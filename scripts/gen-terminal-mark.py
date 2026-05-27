#!/usr/bin/env python3
"""Regenerate the terminal-panel Foglight ASCII mark.

Input:  /public/foglight-wordmark-blue.svg
Output: prints dot-grid lines (· ◦ • ●) to stdout AND writes /tmp/foglight-ascii.json

Steps:
  1. Rasterize the SVG with headless Chrome at a high resolution.
  2. Find the ink bbox, crop tight.
  3. Resample to a (cols × rows) grid where rows are sized to keep
     the natural aspect with a character cell ratio of ~0.5 (mono char
     cells are taller than they are wide).
  4. Convert per-cell intensity to one of 4 dot glyphs from the
     ASCII Magic "Dots" style ramp: ` `, `·`, `◦`, `•`, `●`.

Run:  python3 scripts/gen-terminal-mark.py [cols]
"""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image
    import numpy as np
except ImportError:
    sys.stderr.write("Need Pillow + numpy. `python3 -m pip install --user Pillow numpy`\n")
    sys.exit(1)


REPO = Path(__file__).resolve().parents[1]
SVG = REPO / "public" / "foglight-wordmark-blue.svg"
TMP_PNG = Path("/tmp/fog-wm-blue-hires.png")
TMP_JSON = Path("/tmp/foglight-ascii.json")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


def rasterize(width: int = 2400, height: int = 1328) -> None:
    subprocess.run(
        [
            CHROME,
            "--headless=new",
            "--disable-gpu",
            "--hide-scrollbars",
            f"--screenshot={TMP_PNG}",
            f"--window-size={width},{height}",
            f"file://{SVG}",
        ],
        check=True,
    )


def asciify(cols: int = 60) -> list[str]:
    im = Image.open(TMP_PNG).convert("RGBA")
    a = np.array(im)
    r, g, b, al = a[..., 0], a[..., 1], a[..., 2], a[..., 3]
    ink = (al > 30) & ~((r > 240) & (g > 240) & (b > 240))
    ys, xs = np.where(ink)
    pad = 6
    x0, y0 = max(0, int(xs.min()) - pad), max(0, int(ys.min()) - pad)
    x1, y1 = min(im.size[0], int(xs.max()) + pad), min(im.size[1], int(ys.max()) + pad)
    cropped = im.crop((x0, y0, x1, y1))
    cw, ch = cropped.size
    rows = max(14, round(cols * (ch / cw) * 0.5))

    small = cropped.resize((cols, rows), Image.LANCZOS).convert("RGBA")
    sa = np.array(small)
    sr, sg, sb, sal = sa[..., 0], sa[..., 1], sa[..., 2], sa[..., 3]
    L = (0.3 * sr + 0.59 * sg + 0.11 * sb) / 255.0
    intensity = (sal / 255.0) * (1.0 - L)
    sink = (sal > 60) & ~((sr > 235) & (sg > 235) & (sb > 235))
    intensity[~sink] = 0.0

    def glyph(v: float) -> str:
        if v < 0.05:
            return " "
        if v < 0.22:
            return "\u00b7"
        if v < 0.42:
            return "\u25e6"
        if v < 0.68:
            return "\u2022"
        return "\u25cf"

    out: list[str] = []
    for row in range(rows):
        out.append("".join(glyph(float(intensity[row, c])) for c in range(cols)))
    while out and not out[0].strip():
        out.pop(0)
    while out and not out[-1].strip():
        out.pop()
    return out


def main() -> None:
    cols = int(sys.argv[1]) if len(sys.argv) > 1 else 60
    rasterize()
    lines = asciify(cols)
    for line in lines:
        print(line)
    TMP_JSON.write_text(json.dumps(lines, ensure_ascii=False), encoding="utf-8")
    print(f"\n[wrote] {TMP_JSON}", file=sys.stderr)


if __name__ == "__main__":
    main()

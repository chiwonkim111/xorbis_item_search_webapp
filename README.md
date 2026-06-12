# Xorbis Proposal Engine

Internal MVP for building proposal packages from Xorbis item/module data.

## Features

- Item/module database
- Fast customer/RFP input
- Budget-aware package recommendation
- New item builder with three modes
  - Purpose-based auto recommendation
  - Module-first recommendation
  - Manual entry
- Cost, target margin, sale price, and profit estimates
- Proposal draft view with item-level module mapping

## Run Locally

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173
```

## GitHub Pages

This app is static HTML/CSS/JS and can be deployed from the repository root.

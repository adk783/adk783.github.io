# Antoine Dupuy portfolio

Static, bilingual (FR/EN) portfolio site built on the [Strata](https://html5up.net/strata) template by HTML5 UP. Target hosting: GitHub Pages at `adk783.github.io`.

## Run locally

```bash
python -m http.server 8765
```

Then open http://localhost:8765.

## Structure

- `index.html`: all content. Each translatable text exists twice, as `lang="fr"` and `lang="en"` elements.
- `assets/js/i18n.js`: language switcher. Sets `<html lang>`, updates the page title, remembers the choice in `localStorage`, defaults to the browser language.
- `assets/css/custom.css`: overrides on top of the untouched template stylesheet (language visibility, contrast, timeline, tags, project cards).
## Editing content

Always edit both the `lang="fr"` and `lang="en"` versions of a text. Project cards have no screenshots: each `<article>` gets a color modifier (`project--teal`, `project--blue`, `project--violet`, `project--amber`, `project--rose`) that tints its banner and result blocks.

## License

Template: CCA 3.0 (see `LICENSE.txt`), the footer credit to HTML5 UP must stay.

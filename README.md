# README

This is a quick POC to demonstrate server-side-rendering of styled-components.

Currently there are two changes to support this:

1. `app/javascript/packs/server_rendering` is modified to return both the rendered component _and_ the style tag containing the styles for that component.

2. `app/assets/javascripts/application.js` grabs the style tag and moves it to the document `<head>`, otherwise it will be discarded by the hydrated component.

## Setup

After installation of gems and packages.

1. Start Rails Server

```bash
rails s
```

2. Visit `http://localhost:3000/examples` and create a new 'Example'.

3. Navigate to: `http://localhost:3000/examples/1` with or without JavaScript enabled. The styles are rendered by styled-components.

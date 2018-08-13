# README

This is a quick POC to demonstrate server-side-rendering of React components including Styled Components.

1. Start Rails Server

```bash
rails s
```

2. Navigate to: `http://localhost:3000/examples/1` with JavaScript disabled.

Notes: Currently React strips away the style tag during hydrationm, so with JavaScript enabled, the styles are removed from the DOM.

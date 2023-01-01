---
sidebar_position: 1
title: Introduction
---

# Debrix

Debrix provides a new _truly_ declarative way of building interactive user interfaces for the web. Like many other libraries/frameworks, debrix is library that renderes a tree of components to a HTML document.

You can experiment with Debrix on the online [playground](https://playground.debrix.dev).

## Experimental 🚧

:::danger
Only use debrix in it's current state to [experiment](https://playground.debrix.dev). Most features are not implemented or tested yet and _will_ break.
:::

Debrix is far from being complete and is under active development. Don't post the library in a forum or similar, I don't want the project to have much attention yet. Ideas and questions are very welcome under the [discussions](https://github.com/orgs/debrixjs/discussions) on github.

## Keypoints

- **Nativly Reactive** — The data is written as classes which magically updates the view.
- **Fast** — The compiler (written in rust) compiles leightweight pieces of runtime code which can either client- or server-side render.
  - **Progressive** — Every interative enhancment made to the view is bound in such a way that only the required parts of the document are updated. No additional processing is used runtime (like VDOM).
- **Extensible** — Interacting with the DOM is made easy using bindings. New binders can be implemented which have full control over the value and the node.

### Runtime Size

Debrix has no definite runtime size because all code is generated. However, utillities exist to provide optional bindings and internal helpers (used by generated components).

_Stats will be included in the documentation later on. Changes are being made so often it would be hard to keep the stats updated. I predict the increment example will be about ~3kB in the 0.1.x release._

## Design Principles

### Declarative

Many libraries offer a hybrid solution, where logic and structure are mixed. This makes it very hard to review and implement components.

The view is [declarative](https://en.wikipedia.org/wiki/Declarative_programming), meaning that is should only describe the document (not how it works), and should not contain any logic. All logic are seperated from the view in a view-model, which contains all the data for the view enhancments.

### Nativly Reactive

Debrix uses [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) under the hood to catch all set/get events in the class. This allows debrix to have full control over updates made to the data and re-render required parts of the view. The solution integrates with JavaScript flawlessly.

```ts
class Example extends Model {
  count = 0;

  increment() {
    // Observers will be notified, e.g. the view
    this.count++;
  }
}
```

### Bindings

Often when writing components, you end up doing the same operations on the DOM and having to re-implement them every time because utillities doesn't exist.

Bindings work similarly to passing a value and the node to a function. The binder have full control over what to do with the DOM and how to process the value (get/set).

```jsx
// Previously:
<input value={value} onInput={(event) => (value = event.target.value)} />

// With Bindings
<input bind:value={value} />
```

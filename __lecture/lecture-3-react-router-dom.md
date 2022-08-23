---
marp: true
---

# React Router

Modern JS apps use "client-side routing".

---

# Routes

All routes are defined in the React application.

```jsx
import {Route} from 'react-router-dom';

<Route path="/" element={<Home />} />
<Route path="/items" element={<Items />} />
<Route path="/items/:itemId" element={<ItemDetails />} />

```

A `<Route>` component consists of at least two things:

1. The `path` to match (`"/items"`).

2. The `element` to render when the `path` matches (`<Items />`).


---

# Exercise

What gets rendered in the following snippets?

---

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

Current URL: http://localhost:3000/about

---

```jsx
<Route path="/" element={<Home />} />
<Route path="/items" element={<Items />} />
<Route path="/items/:itemId" element={<ItemDetails />} />
<Route path="*" element={<Error />} />
```

Current URL: http://localhost:3000/items/abc

---

# `<Routes>`

Renders the first `<Route />` match.

Basaically, think of the `<Routes>` as a `switch` statement for the URL of the website.

This would make the `<Route />` components the `case`.

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/items" element={<Items />} />
    <Route path="/items/:itemId" element={<ItemDetails />} />
    <Route path="*" element={<Error />} />
</Routes>
```

---

# `<BrowserRouter>`

All routes must be nested under a `<BrowserRouter>`.

It doesnt stop there!

All `react-router-dom` components **must** be nested inside a `<BrowserRouter>`.

As a convention, `<BrowserRouter>` is often renamed to `<Router>` when it's imported.

❗ There cannot be more than one `<BrowserRouter>` per application.

---

## The full picture

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/items/:itemId" element={<ItemDetails />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
```

---

# Link

Use the provided `<Link>` component to get from one route to another.

```jsx
import { Link } from "react-router-dom";

<Link to="/shop/abc123">View item details</Link>;
```

`<Link>` is the React version of `<a>`.

---

# Question

Why use `<Link to="...">` instead of `<a href="...">`?

---

# Question

Is this "real" navigation?

---

### Accessing URL params

```jsx
<Route path="/items/:itemId" element={<ItemDetails />} />
```

`<ItemDetails />` has no props!

How will it access the `itemId` URL parameter?

---

# Hooks

Hooks are a relatively modern addition to the React framework.

They let us "hook in" to React internals.

We'll learn much more about them in the next few lectures.

---

```jsx
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  // `useParams` is the hook.
  // Hooks always start with `use`.
  const { itemId } = useParams();

  return <h3>Item ID: {itemId}</h3>;
};
```

[Documentation](https://reacttraining.com/react-router/web/example/url-params)
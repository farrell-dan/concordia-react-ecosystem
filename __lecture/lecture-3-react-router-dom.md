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
<Route path="/items/200" element={<ItemDetails />} />

```

A `<Route>` component consists of at least two things:

1. The `path` to match (`"/items"`).

2. The `element` to render when the `path` matches (`<Items />`).

---

A `<Route />` can also be nested, to create an organized structure.

```jsx
<Route path="/" element={<Home />} >
    <Route path="items" element={<Items />} />
    <Route path="items/200" element={<ItemDetails />} />
</Route>
```

❗ Notice how the `/` has been removed from the path of the nested `<Route />`!

‼ When a `<Route />` is nested inside of a parent, the paths combine. 

The path of the first nested `<Route />` is now `"/"` + `"items"` (`"/items"`)

---

Nesting doesn't have to stop at one level either!

```jsx
<Route path="/" element={<Home />} >
    <Route path="items" element={<Items />} >
        <Route path="200" element={<ItemDetails />} />
    </Route>
</Route>
```

The path of the Second nested `<Route />` is now `"/"` + `"items"` + `"200"` (`"/items/200"`)

---

# `<Outlet />`

To render a child `<Route />`, you need to put an `<Outlet />` inside the parent component rendered by the parent `<Route />`

```jsx
import {Outlet} from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>This is the home page!</h1>
            <Outlet /> {/* this will render the <Items /> component! */}
        </div>
    )
}
```

---

Why would we want to nest routes inside one another?

Simple! So we don't have to manually re-render parts of our UI. When nesting routes, the parent component persists on the page automatically, saving us a lot of time and trouble!

❗ Nesting routes is not always necessary, but it is a cool feature!

‼ The parent component is **ALWAYS** rendered when nesting routes.

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
<Route path="/:itemId" element={<ItemDetails />} />
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
    <Route path="/:itemId" element={<ItemDetails />} />
    <Route path="*" element={<Error />} />
</Routes>
```

---

# `<Router>`

All routes must be nested under a router.

It doesnt stop there!

All `react-router-dom` components **must** be nested inside a `<Router>`.

Also, `<Router>`'s full name is actually `<BrowserRouter>`. Typically we'll rename it to `<Router>` when it's imported.

❗ There cannot be more than one `<Router>` per application.

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
            <Route path="/:itemId" element={<ItemDetails />} />
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
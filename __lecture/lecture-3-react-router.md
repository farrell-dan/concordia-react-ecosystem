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

<Route path="/about">
  <About />
</Route>
<Route path="/blog">
  <Blog />
</Route>
```

---

A `<Route>` component consists of at least two things:

- The path to match (eg. "/about")
- What to render when the path matches (the `children` prop)

---

# Exercise

What gets rendered in the following snippets?

---

```jsx
<div>
    <Route exact path="/">
        Home
    </Route>
    <Route path="/about">
        About
    </Route>
</div>
```

Current URL: http://localhost:3000/about

---

```jsx
<div>
    <Route path="/items/:itemId">
        Item detail page
    </Route>
    <Route path="/items">
        Item list page
    </Route>
    <Route>
        404 not found
    </Route>
</div>
```

Current URL: http://localhost:3000/items/abc

---

# `<Switch>`

Renders the first match

---

# `<Router>`

All routes must be nested under a router

---

```jsx
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/shop/:itemId">
                <ItemDetails />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
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

---

# Question

Why use `<Link to="...">` instead of `<a href="...">`?

---

# Question

Is this "real" navigation?

---

### Accessing URL params

```jsx
<Route path="/items/:itemId">
  <ItemDetails />
</Route>
```

`ItemDetails` has no props!

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

---
marp: true
---

# React Fragments

---

# Fragments

---

In React, components can't return multiple elements:

```jsx
import React from 'react';

const App = ({ user, data }) => {
  // Error:
  return (
    <Header user={user} />
    <Content data={data} />
  )
}
```

---

Historically, we'd wrap adjacent children in a `<div>`:

```jsx
import React from "react";

const App = ({ user, data }) => {
  return (
    <div>
      <Header user={user} />
      <Content data={data} />
    </div>
  );
};
```

---

We can also use a `Fragment`:

```jsx
import React from "react";

const App = ({ user, data }) => {
  return (
    <React.Fragment>
      <Header user={user} />
      <Content data={data} />
    </React.Fragment>
  );
};
```

---

Shorthand:

```jsx
import React from "react";

const App = ({ user, data }) => {
  return (
    <>
      <Header user={user} />
      <Content data={data} />
    </>
  );
};
```

---

Works the same way, but it does not produce a DOM node.

`React.Fragment` has no effect on the HTML, it's invisible.

---

## Quiz

### Why is this better?

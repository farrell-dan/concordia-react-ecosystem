---
marp: true
---

# React PropTypes

---

Javascript is a _loosely-typed_ language.

It's very forgiving.

---

```js
const add5ToNum = (n) => {
  return n + 5;
}

add5ToNum(100); // -> 105
add5ToNum("5"); // -> ??
```

---

```js
console.log(5 + true); // -> ??
```

---

React PropTypes is a tool to help prevent some of this uncertainty and wackyness.

---

It's a separate package, so we need to install it

```bash
yarn add prop-types
```

---

We use PropTypes to _annotate props_ in your components

```jsx
import PropTypes from 'prop-types';

const UserProfile = ({ username, age, address }) => {
  return (
    <React.Fragment>
      <h1>{username} is {age} years old</h1>
      <p>They live at {address.line1} in {address.city}</p>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string,
    city: PropTypes.string.isRequired,
  }).isRequired,
}

```

---


```jsx live=true
const UserProfile = ({ username, age, address }) => {
  return (
    <React.Fragment>
      <p>{username} is {age} years old</p>
      <p>They live at {address.line1} in {address.city}</p>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string,
    city: PropTypes.string.isRequired,
  }).isRequired,
}

render(
  <UserProfile
    username="superman"
    age={200}
    address={{
      line1: '123 Krypton st.',
      city: 'N/A',
    }}
  />
)

```

---

# Quiz

- PropTypes help you catch potential type-related bugs.
- Are there any other benefits?

---

# Fin
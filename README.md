# storybook-addon-state

A storybook addon to give you access to store/retrieve arbitrary data. Similar to `knobs` this doesn't add any additional React wrappers to the story, so any other addons used (`prop-types`, `jsx`) aren't effected.

### Install

```
yarn add storybook-addon-state
```

### Usage

```jsx
import { storiesOf } from "@storybook/react";
import state from "storybook-addon-state";

storiesOf("FooBar", module).add("I get state", () => {
  const { store, set } = state("clicks", { count: 0 });

  return (
    <div>
      <button onClick={() => set({ count: (store.count += 1) })}>
        Click Me
      </button>
      <div>{`I was clicked ${store.count} time(s)`}</div>
    </div>
  );
});
```

# storybook-addon-state

A storybook addon to give you access to store/retrieve arbitrary data. Similar to `knobs` this doesn't add any additional React wrappers to the story, so any other addons used (`prop-types`, `jsx`) aren't effected.

### Install

```
yarn add storybook-addon-state
```

### Usage

```jsx
import { storiesOf } from '@storybook/react';
import useState from 'storybook-addon-state';

storiesOf('FooBar', module).add('I get state', () => {
  const [count, set] = useState('clicks', 0);

  return (
    <div>
      <button onClick={() => set(count + 1)}>Click Me</button>
      <div>{`I was clicked ${count} time(s)`}</div>
    </div>
  );
});
```

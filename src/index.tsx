import addons from '@storybook/addons';
import { FORCE_RE_RENDER, STORY_CHANGED } from '@storybook/core-events';

let stores: {
  [name: string]: any;
} = {};

addons.getChannel().addListener(STORY_CHANGED, () => {
  stores = {};
});

export default function useState<T>(
  name: string,
  store: T
): [T, (newState: T) => void] {
  const actualVals = stores[name] === undefined ? store : stores[name];
  stores[name] = actualVals;

  return [
    actualVals,
    (newState: T) => {
      stores[name] = newState;
      addons.getChannel().emit(FORCE_RE_RENDER);
    }
  ];
}

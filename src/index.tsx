import addons from '@storybook/addons';
import { FORCE_RE_RENDER, STORY_CHANGED } from '@storybook/core-events';

function forceReRender() {
  addons.getChannel().emit(FORCE_RE_RENDER);
}

addons.getChannel().addListener(STORY_CHANGED, () => {
  clear();
});

let stores: {
  [name: string]: any;
} = {};

export function clear() {
  stores = {};
}

export default function useState<T>(
  name: string,
  store: T
): [T, (newState: T) => void] {
  const actualVals = stores[name] || store;
  stores[name] = actualVals;

  return [
    actualVals,
    (newState: T) => {
      stores[name] = newState;
      forceReRender();
    }
  ];
}

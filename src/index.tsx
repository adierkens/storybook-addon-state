import addons from '@storybook/addons';
import { FORCE_RE_RENDER, STORY_CHANGED } from '@storybook/core-events';

let stores: Record<string, any> = {};

addons.getChannel().addListener(STORY_CHANGED, () => {
  stores = {};
});

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export default function useState<T>(
  name: string,
  store: T
): [T, (newState: T) => void] {
  const actualVals = stores[name] === undefined ? store : stores[name];
  stores[name] = actualVals;

  const update = (newState: T) => {
    stores[name] = newState;
    addons.getChannel().emit(FORCE_RE_RENDER);
  };
  update.toString = () => `set${capitalizeFirstLetter(name)}(newState)`;

  return [actualVals, update];
}

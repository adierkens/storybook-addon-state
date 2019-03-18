import addons from "@storybook/addons";
import { FORCE_RE_RENDER } from "@storybook/core-events";

function forceReRender() {
  addons.getChannel().emit(FORCE_RE_RENDER);
}

const stores: {
  [name: string]: any;
} = {};


export default function state<T>(
  name: string,
  store: T
): {
  store: T;
  set: (newState: T) => void;
} {
  const actualVals = stores[name] || store;
  stores[name] = actualVals;

  return {
    store: actualVals,
    set: (newState: T) => {
      stores[name] = newState;
      forceReRender();
    }
  };
}

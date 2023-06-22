import { SET_TAB } from "../actions/tabs";

const initialState = {
  activeTab: "bun",
};

export const tabs = (
  state = initialState,
  action: { type: any; item: string }
) => {
  switch (action.type) {
    case SET_TAB: {
      return {
        activeTab: action.item,
      };
    }
    default: {
      return state;
    }
  }
};

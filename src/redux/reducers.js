import {
  INCREMENT_COUNT,
  LVL_UP,
  INCREMENT_FACTOR,
  ADD_GOLD,
  SPEND_GOLD,
  CLEAR_PROGRESS
} from "./actions";

import shopItems from '../JSON/items.json';
import achivmts from '../JSON/achievements.json';


const preloadedState = {
  count: 0,
  lvl: 1,
  mulitplier: 1,
  gold: 0,
  planters: 0,
  clicks: 0,
  goldTotal: 0,
  achieveCount: 0,
  treesPerSec: 0,
  items: [...shopItems],
  achievements: [...achivmts]
};

export const countReducer = (state = preloadedState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_COUNT: {
      const { ammount } = payload;
      return {
        ...state,
        count: state.count + ammount,
        clicks: state.clicks++
      };
    }
    default:
      return state;
  }
};

export const lvlReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case LVL_UP:
      return {
        ...state,
        lvl: state.lvl++
      };
    default:
      return state;
  }
};

export const goldReducer = (state = preloadedState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_GOLD: {
      const { ammount } = payload;
      return {
        ...state,
        gold: state.gold + ammount
      };
    }
    case SPEND_GOLD: {
      const { ammount } = payload;
      return {
        ...state,
        gold: state.gold - ammount
      };
    }
    default:
      return state;
  }
};

export const factorReducer = (state = preloadedState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_FACTOR: {
      const { ammount } = payload;
      return {
        ...state,
        mulitplier: state.mulitplier + ammount
      };
    }
    default:
      return state;
  }
};

// export const plantersReducer = (state = INITIAL_STATE, action, ammount) => {
//   switch (action.type) {
//     case ADD_PLANTER:
//       return {
//         ...state,
//         planters: state.planters + ammount
//       };
//     default:
//       return state;
//   }
// };

// export const achieveReducer = (state = preloadedState, action) => {
//   switch (action.type) {
//     case ADD_ACHIEVEMENT:
//       return {
//         ...state,
//         achieveCount: state.achieveCount + 1
//       };
//     default:
//       return state;
//   }
// };

export const progressReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case CLEAR_PROGRESS:
      return {
        state: preloadedState
      };
    default:
      return state;
  }
};

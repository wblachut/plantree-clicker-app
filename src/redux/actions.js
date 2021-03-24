export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const incrementCount = factor => ({
    type: INCREMENT_COUNT,
    payload: { factor },
});

export const INCREMENT_FACTOR = 'INCREMENT_FACTOR'
export const incrementFactor = ammount => ({
    type: INCREMENT_FACTOR,
    payload: { ammount },
});

export const INCREMENT_TPS = 'INCREMENT_TPS'
export const incrementTPS = ammount => ({
    type: INCREMENT_TPS,
    payload: { ammount },
});

export const INCREMENT_HELPERS = 'INCREMENT_HELPERS'
export const incrementHelpers = () => ({
    type: 'INCREMENT_HELPERS',
});

export const LVL_UP = 'LVL_UP'
export const lvlUp = () => ({
    type: LVL_UP,
});

export const ADD_GOLD = 'ADD_GOLD'
export const addGold = ammount => ({
    type: ADD_GOLD,
    payload: { ammount },
});

export const SPEND_GOLD = 'SPEND_GOLD'
export const spendGold = ammount => ({
    type: SPEND_GOLD,
    payload: { ammount },
});

export const ADD_ACHIEVEMENT = 'ADD_ACHIEVEMENT'
export const addAchievement = () => ({
    type: ADD_ACHIEVEMENT
});

export const ADD_ITEM = 'ADD_ITEM'
export const addItem = () => ({
    type: ADD_ITEM
});

export const CLEAR_PROGRESS = 'CLEAR_PROGRESS'
export const clearProgress = () => ({
    type: 'CLEAR_PROGRESS',
});

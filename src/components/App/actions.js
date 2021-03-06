export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const incrementCount = factor => ({
    type: INCREMENT_COUNT,
    payload: { factor },
});
export const INCREMENT_CLICKS = 'INCREMENT_CLICKS'
export const incrementClicks = () => ({
    type: INCREMENT_CLICKS,
});

export const INCREMENT_FACTOR = 'INCREMENT_FACTOR'
export const incrementFactor = amount => ({
    type: INCREMENT_FACTOR,
    payload: { amount },
});

export const INCREMENT_TPS = 'INCREMENT_TPS'
export const incrementTPS = amount => ({
    type: INCREMENT_TPS,
    payload: { amount },
});

export const CHANGE_TREE_ICONS = 'CHANGE_TREE_ICONS'
export const changeTreeIcons = treeIcons => ({
    type: 'CHANGE_TREE_ICONS',
    payload: { treeIcons },
});

export const LVL_UP = 'LVL_UP'
export const lvlUp = () => ({
    type: LVL_UP,
});

export const ADD_GOLD = 'ADD_GOLD'
export const addGold = amount => ({
    type: ADD_GOLD,
    payload: { amount },
});

export const SPEND_GOLD = 'SPEND_GOLD'
export const spendGold = amount => ({
    type: SPEND_GOLD,
    payload: { amount },
});

export const ADD_ACHIEVEMENT = 'ADD_ACHIEVEMENT'
export const addAchievement = achievements => ({
    type: ADD_ACHIEVEMENT,
    payload: { achievements },
});

export const ADD_ITEM = 'ADD_ITEM'
export const addItem = items => ({
    type: ADD_ITEM,
    payload: { items },
});

export const CLEAR_PROGRESS = 'CLEAR_PROGRESS'
export const clearProgress = () => ({
    type: 'CLEAR_PROGRESS',
});

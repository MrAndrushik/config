const initialValue = null;

const SET_MODULE = "SET_MODULE";
const SET_WINTER_MODULE = "SET_WINTER_MODULE";
const SET_CURTAINS = "SET_CURTAINS";
const SET_WINDOWS_IN_ROOF = "SET_WINDOWS_IN_ROOF";
const SET_WINDOWS_IN_WALL = "SET_WINDOWS_IN_WALL";

export const firstReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SET_MODULE:
            return action.payload;
        case SET_WINTER_MODULE:
            return { ...state, winterPrice: action.payload };
        case SET_CURTAINS:
            return { ...state, curtains: action.payload };
        case SET_WINDOWS_IN_ROOF:
            return { ...state, windowsInRoof: action.payload };
        case SET_WINDOWS_IN_WALL:
            return { ...state, windowsInWall: action.payload };
        default:
            return state;
    }
};

export const setModuleAction = (payload) => ({
    type: SET_MODULE,
    payload,
});

export const setWinterModuleAction = (payload) => ({
    type: SET_WINTER_MODULE,
    payload,
});

export const setCurtainsAction = (payload) => ({
    type: SET_CURTAINS,
    payload,
});

export const setWindowsInRoofAction = (payload) => ({
    type: SET_WINDOWS_IN_ROOF,
    payload,
});

export const setWindowsInWallAction = (payload) => ({
    type: SET_WINDOWS_IN_WALL,
    payload,
});

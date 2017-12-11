const tabReducer = (state = {
    currentTab: "active"
}, action) => {
    switch (action.type) {
        case "TAB_SWITCH":
            state = {
                currentTab: action.payload
            };
            break;
        default:
    }
    return state;
};

export default tabReducer;
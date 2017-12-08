const listReducer = (state = {
    allListItem: []
}, action) => {
    switch (action.type) {
        case "LIST_LOAD":
            state = {
                ...state,
                allListItem: action.payload
            };
            break;
        default:
    }
    return state;
};

export default listReducer;
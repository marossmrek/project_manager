const filterReducer = (state = {
    searchProject: null,
    searchUser: null,
    searchProjectType: null,
    searchMinDate: undefined,
    searchMaxDate: undefined
}, action) => {
    switch (action.type) {
        case "FILTER_CHANGE":
            state = {
                ...state,
                [action.payload.filterName]: action.payload.filterValue
            };
            break;
        case "FILTER_RESET":
            state = {
                searchProject: null,
                searchUser: null,
                searchProjectType: null,
                searchMinDate: undefined,
                searchMaxDate: undefined
            };
            break;
        default:
    }
    return state;
};

export default filterReducer;
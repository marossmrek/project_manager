const filterReducer = (state = {
    searchProject: 1,
    searchUser: 1,
    searchProjectType: 1,
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
                searchProject: 1,
                searchUser: 1,
                searchProjectType: 1,
                searchMinDate: undefined,
                searchMaxDate: undefined
            };
            break;
    }
    return state;
};

export default filterReducer;
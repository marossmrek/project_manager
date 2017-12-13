const userReducer = (state = {
    user: window.localStorage.getItem("user")
}, action) => {
    switch (action.type) {
        case "SET_USER":
            state = {
                user: window.localStorage.getItem("user")
            };
            break;
        default:
    }
    return state;
};

export default userReducer;
const howlFormModalReducer = (state = {
    isShowed: false,
}, action) => {
    switch (action.type) {
        case "HOWL_FORM_SWITCH":
            state = {
                isShowed: action.payload
            };
            break;
        default:
    }
    return state;
};

export default howlFormModalReducer;
const formModalReducer = (state = {
    isShowed: false,
    editMode: false,
    deleteMode:false,
    formValue: {
        name: "",
        code: "",
        type: null,
        state: null,
        description: ""
    },
    formValueError: {
        nameError: "",
        codeError: "",
        typeError: "",
        stateError: "",
        descriptionError: ""
    }
}, action) => {
    switch (action.type) {
        case "FORM_SWITCH":
            state = {
                ...state,
                isShowed: action.payload
            };
            break;
        case "FORM_CHANGE":
            state = {
                ...state,
                formValue: {
                    ...state.formValue,
                    [action.payload.formName]: action.payload.formValue
                }
            };
            break;
        case "FORM_RESET":
            state = {
                isShowed: false,
                editMode: false,
                deleteMode:false,
                formValue: {
                    name: "",
                    code: "",
                    type: null,
                    state: null,
                    description: ""
                },
                formValueError: {
                    nameError: "",
                    codeError: "",
                    typeError: "",
                    stateError: "",
                    descriptionError: ""
                }
            };
            break;
        case "FORM_SETUP_ERROR":
            state = {
                ...state,
                formValueError: action.payload
            };
            break;
        case "FORM_SETUP_EDIT_MODE":
            state = {
                ...state,
                isShowed:true,
                editMode:true,
                deleteMode:false,
                formValue: action.payload
            };
            break;
        case "FORM_SETUP_DELETE_MODE":
            state = {
                ...state,
                isShowed:true,
                editMode:false,
                deleteMode:true,
                formValue: action.payload
            };
            break;
        default:
    }
    return state;
};

export default formModalReducer;
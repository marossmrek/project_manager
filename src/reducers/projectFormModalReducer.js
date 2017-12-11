const projectFormModalReducer = (state = {
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
        case "PROJECT_FORM_SWITCH":
            state = {
                ...state,
                isShowed: action.payload
            };
            break;
        case "PROJECT_FORM_CHANGE":
            state = {
                ...state,
                formValue: {
                    ...state.formValue,
                    [action.payload.formName]: action.payload.formValue
                }
            };
            break;
        case "PROJECT_FORM_RESET":
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
        case "PROJECT_FORM_SETUP_ERROR":
            state = {
                ...state,
                formValueError: action.payload
            };
            break;
        case "PROJECT_FORM_SETUP_EDIT_MODE":
            state = {
                ...state,
                isShowed:true,
                editMode:true,
                deleteMode:false,
                formValue: action.payload
            };
            break;
        case "PROJECT_FORM_SETUP_DELETE_MODE":
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

export default projectFormModalReducer;
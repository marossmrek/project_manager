const howlFormModalReducer = (state = {
    isShowed: false,
    editMode: false,
    deleteMode: false,
    formValue: {
        date: undefined,
        type: "",
        projects: [
            {code: "", description: "", percentage: 0, status: "Good"}
        ]
    },
    formValueError: {
        dateError: "",
        typeError: "",
        percentageError: "",
        projects: [
            {code: "", description: ""}
        ]
    }
}, action) => {
    switch (action.type) {
        case "HOWL_FORM_SWITCH":
            state = {
                ...state,
                isShowed: action.payload
            };
            break;
        case "HOWL_FORM_CHANGE":
            state = {
                ...state,
                formValue: {
                    ...state.formValue,
                    [action.payload.formName]: action.payload.formValue
                }
            };
            break;
        case "HOWL_FORM_CHANGE_PROJECTS":
            state = {
                ...state,
                formValue: {
                    ...state.formValue,
                    projects: state.formValue.projects.map(
                        (content, i) => i === action.payload.index ? {
                            ...content,
                            [action.payload.formName]: action.payload.formValue
                        }
                            : content
                    )
                }
            };
            break;
        case "HOWL_FORM_ADD_WORK":
            state = {
                ...state,
                formValue: {
                    ...state.formValue,
                    projects: [
                        ...state.formValue.projects,
                        {code: "", description: "", percentage: 0, status: "Good"}
                    ]
                },
                formValueError: {
                    ...state.formValueError,
                    projects: [
                        ...state.formValueError.projects,
                        {code: "", description: ""}
                    ]
                }
            };
            break;
        case "HOWL_FORM_RESET":
            state = {
                isShowed: false,
                editMode: false,
                deleteMode: false,
                formValue: {
                    date: undefined,
                    type: "",
                    projects: [
                        {code: "", description: "", percentage: 0, status: "Good"}
                    ]
                },
                formValueError: {
                    dateError: "",
                    typeError: "",
                    percentageError: "",
                    projects: [
                        {code: "", description: ""}
                    ]
                }
            };
            break;
        case "HOWL_FORM_SETUP_EDIT_MODE":
            state = {
                ...state,
                isShowed: true,
                editMode: true,
                deleteMode: false,
                formValue: action.payload,
            };
            break;
        case "HOWL_FORM_SETUP_DELETE_MODE":
            state = {
                ...state,
                isShowed: true,
                editMode: false,
                deleteMode: true,
                formValue: action.payload
            };
            break;
        case "HOWL_FORM_SETUP_ERROR":
            state = {
                ...state,
                formValueError: action.payload
            };
            break;
        default:
    }
    return state;
};

export default howlFormModalReducer;
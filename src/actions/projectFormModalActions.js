export function switchModal(isShowed) {
    return {
        type: "PROJECT_FORM_SWITCH",
        payload: isShowed
    };
}

export function changeFormValue(formValue) {
    return {
        type: "PROJECT_FORM_CHANGE",
        payload: formValue
    };
}

export function resetFormValues() {
    return {
        type: "PROJECT_FORM_RESET"
    };
}

export function setUpFormErrors(errors) {
    return {
        type: "PROJECT_FORM_SETUP_ERROR",
        payload: errors
    };
}

export function setUpEditMode(editData) {
    return {
        type: "PROJECT_FORM_SETUP_EDIT_MODE",
        payload: editData
    };
}

export function setUpDeleteMode(deleteItem) {
    return {
        type: "PROJECT_FORM_SETUP_DELETE_MODE",
        payload: deleteItem
    };
}




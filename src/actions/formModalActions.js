export function switchModal(isShowed) {
    return {
        type: "FORM_SWITCH",
        payload: isShowed
    };
}

export function changeFormValue(formValue) {
    return {
        type: "FORM_CHANGE",
        payload: formValue
    };
}

export function resetFormValues() {
    return {
        type: "FORM_RESET"
    };
}

export function setUpFormErrors(errors) {
    return {
        type: "FORM_SETUP_ERROR",
        payload: errors
    };
}

export function setUpEditMode(editData) {
    return {
        type: "FORM_SETUP_EDIT_MODE",
        payload: editData
    };
}

export function setUpDeleteMode(deleteItem) {
    return {
        type: "FORM_SETUP_DELETE_MODE",
        payload: deleteItem
    };
}




export function switchModal(isShowed) {
    return {
        type: "HOWL_FORM_SWITCH",
        payload: isShowed
    };
}

export function changeFormValue(formValue) {
    return {
        type: "HOWL_FORM_CHANGE",
        payload: formValue
    };
}

export function resetFormValues() {
    return {
        type: "HOWL_FORM_RESET"
    };
}

export function setUpEditMode(editData) {
    return {
        type: "HOWL_FORM_SETUP_EDIT_MODE",
        payload: editData
    };
}

export function setUpDeleteMode(deleteItem) {
    return {
        type: "HOWL_FORM_SETUP_DELETE_MODE",
        payload: deleteItem
    };
}

export function setUpFormErrors(errors) {
    return {
        type: "HOWL_FORM_SETUP_ERROR",
        payload: errors
    };
}

export function changeFormProjectValue(formProjectValue) {
    return {
        type: "HOWL_FORM_CHANGE_PROJECTS",
        payload: formProjectValue
    };
}

export function addAnotherDailyWork() {
    return {
        type: "HOWL_FORM_ADD_WORK"
    };
}






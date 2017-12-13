export function setSnackBarMsg(msg) {
    return {
        type: "CHANGE_MSG",
        payload: msg
    };
}

export function hiddenSnackBar() {
    return {
        type: "HIDDEN_BAR"
    };
}


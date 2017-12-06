export function changeFilterValue(filterValue) {
    return {
        type: "FILTER_CHANGE",
        payload: filterValue
    };
}

export function resetFilterValues() {
    return {
        type: "FILTER_RESET"
    };
}
import { createSelector } from "reselect"

const selectDirectory = state => state.directory

export const selectDictionarySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)
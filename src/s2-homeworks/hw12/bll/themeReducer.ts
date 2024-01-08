const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: Actions): typeof initState=> { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type Actions = ChangeThemeId
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
type ChangeThemeId = ReturnType<typeof changeThemeId>
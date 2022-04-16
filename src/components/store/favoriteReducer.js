const initialState = {
    favoriteWords: [],
}

const SET_WORDS = 'setFavoriteWord'
const ADD_WORD = 'addWord'
const DELETE_WORD = 'deleteWord'

export const favoriteReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_WORDS:
            return {...state, favoriteWords: action.payload}
        case ADD_WORD:
            return {...state, favoriteWords: [...state.favoriteWords, action.payload]}
        case DELETE_WORD:
            return {...state, favoriteWords: state.favoriteWords.filter(item => item !== action.payload)}
        default:
            return state
    }
}

export const setWords = payload => ({type: SET_WORDS, payload})
export const addWord = payload => ({type: ADD_WORD, payload})
export const deleteWord = payload => ({type: DELETE_WORD, payload})
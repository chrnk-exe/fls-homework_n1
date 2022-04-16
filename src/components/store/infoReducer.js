const initialState = {
    word: undefined,
    license: undefined,
    meanings: undefined,
    phonetics: undefined,
    sourceUrls: undefined,
}

const SET_WORD = 'setWord'
const SET_LICENSE = 'setLicence'
const SET_MEANINGS = 'setMeanings'
const SET_PHONETICS = 'setPhonetics'
const SET_SOURCES = 'setSources'
const SET_DATA = 'setData'

export const infoReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_WORD:
            return {...state, word: action.payload}
        case SET_LICENSE:
            return {...state, license: action.payload}
        case SET_MEANINGS:
            return {...state, meanings: action.payload}
        case SET_PHONETICS:
            return {...state, phonetics: action.payload}
        case SET_SOURCES:
            return {...state, sourceUrls: action.payload}
        case SET_DATA:
            return {
                ...state,
                word: action.payload.word,
                license: action.payload.license,
                meanings: action.payload.meanings,
                phonetics: action.payload.phonetics,
                sourceUrls: action.payload.sourceUrls,
            }
        default:
            return state
    }
}

export const setInfoWord = payload => ({type:SET_WORD, payload})
export const setInfoLicence = payload => ({type:SET_LICENSE, payload})
export const setInfoMeanings = payload => ({type:SET_MEANINGS, payload})
export const setInfoPhonetics = payload => ({type:SET_PHONETICS, payload})
export const setInfoSources = payload => ({type:SET_SOURCES, payload})
export const setData = payload => ({type: SET_DATA, payload})
import {
    GET_ITEMS,
    ITEMS_LOADING,
    GET_ITEM,
} from '../actions/types'

const initialState = {
    items: [],
    item: {},
    pagination: {},
    filters: [],
    sort: 0,
    regex:'',
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload.results,
                pagination: action.payload.pagination,
                filters: action.payload.filters,
                sort: action.payload.sort,
                regex: action.payload.regex,
                isLoading: false
            }

        case GET_ITEM:
            return {
                ...state,
                item: action.payload,
                isLoading: false
            }
        case ITEMS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}
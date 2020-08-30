import {
    GET_ITEMS,
    ITEMS_LOADING,
    GET_ITEM
} from './types';

import axios from 'axios';

export const getItems = (page, limit, category=0, from=0, to=1000000, sort=1, regex='') => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`/item?page=${page}&limit=${limit}&category=${category}&from=${from}&to=${to}&sort=${sort}&regex=${regex}`)
        .then(res => {
            setTimeout(() => {
                dispatch({type: GET_ITEMS, payload: res.data})
            }, 300)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getItem = (id) => dispatch => {
    // dispatch(setItemsLoading());
    axios
        .get(`/item/${id}`)
        .then(res => dispatch({type: GET_ITEM, payload: res.data}))
}


export const setItemsLoading = () => {
    return {type: ITEMS_LOADING}
}
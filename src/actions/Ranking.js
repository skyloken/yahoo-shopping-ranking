import { replace } from 'connected-react-router';
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';

const APP_ID = 'dj00aiZpPWtPMENZTTMwNlByRyZzPWNvbnN1bWVyc2VjcmV0Jng9NTg-'

// リクエスト開始
const startRequest = category => ({
    type: 'START_REQUEST',
    payload: { category }
})

// レスポンス受信
const receiveData = (category, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: { category, error, response }
})

// リクエスト完了
const finishRequest = category => ({
    type: 'FINISH_REQUEST',
    payload: { category }
})

// ランキング取得
export const fetchRanking = categoryId => {
    return async (dispatch, getState) => {

        // find category
        const categories = getState().shopping.categories;
        const category = categories.find(category => (category.id === categoryId));

        // if not found category, redirect to root
        if (typeof category === 'undefined') {
            dispatch(replace('/'));
            return;
        }

        // start request
        dispatch(startRequest(category));

        // query string
        const queryString = qs.stringify({
            appid: APP_ID,
            category_id: categoryId
        });

        // receive data
        try {
            const response = await fetchJsonp(`${API_URL}?${queryString}`);
            const data = await response.json();
            dispatch(receiveData(category, null, data));
        } catch (err) {
            dispatch(receiveData(category, err));
        }

        // finish request
        dispatch(finishRequest(category));
    }
}
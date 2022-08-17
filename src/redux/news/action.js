import axios from "axios"

export const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR'

export const fetchNewsRequested = () => ({
    type: FETCH_NEWS_REQUESTED
})

export const fetchNewsSuccess = (newsList) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: newsList
})

export const fetchNewsError = (error) => ({
    type: FETCH_NEWS_ERROR,
    payload: error
})

export const fetchNews = () => {
    return async (dispatch, getState ) => {
        try{
            dispatch(fetchNewsRequested())
            let res = await axios.get('https://newsdata.io/api/1/news?apikey=pub_1013144f00a3c112a004afaeb66cc00c9f287&q=olympics')
            dispatch(fetchNewsSuccess(res.data.results))
        }
        catch(error){
            dispatch(fetchNewsError(error.message))
        }
    }
}
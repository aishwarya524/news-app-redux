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
            let res = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=8c19ce1efc664d64aa051402a419c774')
            dispatch(fetchNewsSuccess(res.data.articles))
        }
        catch(error){
            dispatch(fetchNewsError(error.message))
        }
    }
}
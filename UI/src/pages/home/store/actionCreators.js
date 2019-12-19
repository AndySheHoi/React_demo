import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
});

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/moreList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page+1));
        })
    }
};

const updateHomeList = (result) => ({
    type: constants.UPDATE_HOME_LIST,
    topicList: result.topicList,
    assessmentList: result.assessmentList,
    questionList: result.questionList
});

export const getHomeList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then((res) => {
            const result = res.data.data;
            dispatch(updateHomeList(result));
        })
    }
};

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
});

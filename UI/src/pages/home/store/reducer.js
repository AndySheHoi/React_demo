import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    assessmentList: [],
    questionList: [],
    questionPage: 1,
    showScroll: false
});

const updateHomeList = (state, action) => {
    return state.merge({
        'topicList': fromJS(action.topicList),
        'assessmentList': fromJS(action.assessmentList),
        'questionList': fromJS(action.questionList)
    });
}

const addHomeList = (state, action) => {
    return state.merge({
        'questionList': state.get('questionList').concat(action.list),
        'questionPage': action.nextPage
    });
}

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.UPDATE_HOME_LIST:
            return updateHomeList(state, action)
        
        case constants.ADD_HOME_LIST: 
            return addHomeList(state, action)

        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);

        default:
            return state;
    }
}
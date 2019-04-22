import MenageReducers from './MenageReducers';
import SearchProductReducers from './SearchProductReducers';
import MenageLogin from './MenageLogin';
import RecommendProductReducers from './RecommendProductReducers';

import { combineReducers } from 'redux'

export default combineReducers({
    MenageReducers,
    SearchProductReducers,
    MenageLogin,
    RecommendProductReducers
});
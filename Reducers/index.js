import MenageReducers from './MenageReducers';
import SearchProductReducers from './SearchProductReducers';

import { combineReducers } from 'redux'

export default combineReducers({
    MenageReducers,
    SearchProductReducers
});
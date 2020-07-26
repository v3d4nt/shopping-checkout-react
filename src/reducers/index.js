import { combineReducers } from 'redux';

import promocodeReducer from '../reducers/promocodeReducer';

export default combineReducers({
    promoCode: promocodeReducer
});
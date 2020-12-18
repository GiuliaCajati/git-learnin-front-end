

import {combineReducers} from 'redux'
import user from './user'
import courses from './courses'


const rootReducers =  combineReducers({
    user,
    courses
})

export default rootReducers;
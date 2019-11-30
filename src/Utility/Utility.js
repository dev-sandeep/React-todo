import Axios from 'axios';
import UseBaseContext from '../ContextApi/UseBaseContext'

function limitString(string, limit) {
    return string.substring(string, limit);
}

export {
    limitString
}
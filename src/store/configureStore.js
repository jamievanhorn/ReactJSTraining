import { createStore, combineReducers } from "redux";
import entriesReducers from "../reducers/entries.reducers";
import { composeWithDevTools} from  'redux-devtools-extension'

const configureStore = () => {
    return createStore(
        combineReducers({
            entries:entriesReducers
        }), composeWithDevTools()
    );
};

export default configureStore;
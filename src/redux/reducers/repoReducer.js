import { GET_REPOSITORIES, SEARCH_REPOSITORIES } from '../../constants';

const initialState = {
    repositories: []
};

const repoReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_REPOSITORIES:
            return {
                ...state,
                repositories:action.payload
            };
        default:
            return state;
    }
}
export default repoReducer;
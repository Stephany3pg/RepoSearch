import axios from 'axios';

import { BASE_URL } from '../../config';
import { GET_REPOSITORIES } from '../../constants';


export const getRepositories = () => {
    try {
      return async dispatch => {
        const response = await axios.get(`https://api.github.com/search/repositories?q=TERMO_DA_BUSCA&per_page=20`);
        if (response.data) {
          dispatch({
            type: GET_REPOSITORIES,
            payload: response.data.items
          });
        } else {
          console.log('Unable to fetch data from the API BASE URL!');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
      console.log(error);
    }
};

export const searchRepositories = term => {
  try {
    return async dispatch => {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${term}&per_page=20`);
      if (response.data) {
        dispatch({
          type: GET_REPOSITORIES,
          payload: response.data.items
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};
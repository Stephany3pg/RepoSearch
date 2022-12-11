/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './src/redux/store/configureStore';
import App from './App';
import {name as appName} from './app.json';

const store = createStore();
const RNRedux = () => (
    <Provider store = { store }>
      <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);

import { createStore } from 'redux';

import reducers from '../shared/reducers';

export default preloadedState => createStore(reducers, preloadedState);

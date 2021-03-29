import {createStore} from 'vuex';

import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import {user} from './modules'


export default createStore({
 state,
 mutations,
 getters,
 actions,
 modules:{
  user
 }
})

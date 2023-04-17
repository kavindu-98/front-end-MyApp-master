import { configureStore } from '@reduxjs/toolkit';

import mapSlice from '../reducers/mapSlice';
import  userLogInDataReducer from '../reducers/userSlice';

export default configureStore({
  reducer: {
    mapData:mapSlice,
    userLogIn:userLogInDataReducer,

  },
})
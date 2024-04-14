import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from 'features/auth/authSlice';
import { connectRouter } from 'connected-react-router';
import { history } from 'utils';
import { routerMiddleware } from 'connected-react-router';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  router: connectRouter(history),
})

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});
sagaMiddleware.run(rootSaga);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

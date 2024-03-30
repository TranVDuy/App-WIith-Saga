import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { increment, incrementSaga, incrementSagaSuccess } from "./counterSlice";


function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('Waiting 2s');
    // delay 2s
    yield delay(2000)

    console.log("Done, dispatch action");
    //Dispatch action success
    yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
import {AnyAction, applyMiddleware, createStore} from "redux";
import {Context, createWrapper} from "next-redux-wrapper";
import {reducer} from "./reducers";
import thunk, {ThunkDispatch} from "redux-thunk";

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<Store>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<Store, void, AnyAction>
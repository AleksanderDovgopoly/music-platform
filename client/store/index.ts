import {createStore} from "redux";
import {Context, createWrapper} from "next-redux-wrapper";
import {reducer} from "./reducers";

const makeStore = (context: Context) => createStore(reducer);

type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<Store>(makeStore, {debug: true});
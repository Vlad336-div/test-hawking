import '../styles/globals.css'
import {createStore} from "redux";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import type { AppProps } from 'next/app'
import {rootReducer} from "../store/rootReducer";

const store = createStore(rootReducer, composeWithDevTools())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

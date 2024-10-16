import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style.scss'
import {Provider} from "react-redux";
import store from "./store/store";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <App />
  </Provider>
)

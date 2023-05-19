import React, {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "./app/store";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {deepOrange} from "@mui/material/colors";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: deepOrange
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Fragment>
      <ThemeProvider theme={darkTheme}>
          <Provider store={store}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </Provider>
      </ThemeProvider>
  </Fragment>
)

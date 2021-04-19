import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import Blog from "./Pages/Blog";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PressStart2P from "./fonts/PressStart2P-Regular.ttf";

const pressStart2P = {
  fontFamily: "Press Start 2P",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('PressStart2P'),
    local('PressStart2P-Regular'),
    local('Press Start 2P'),
    url(${PressStart2P}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const THEME = createMuiTheme({
  palette: {
    primary: {
      light: '#986ee7',
      main: '#6541b4',
      dark: '#311683',
      contrastText: '#f6f3f4',
    },
    secondary: {
      light: '#6fffff',
      main: '#00f5f5',
      dark: '#00c1c2',
      contrastText: '#171213',
    },
  },
  typography: {
    fontFamily: "Press Start 2P",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [pressStart2P],
      },
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <CssBaseline />
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>
          <Route exact path="/about-me">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

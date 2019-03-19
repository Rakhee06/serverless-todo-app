import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        ReactDOM.render(<AppContainer><NextApp /></AppContainer>,
            document.getElementById("root"));
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

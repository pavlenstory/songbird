import React from 'react';
import ReactDOM from 'react-dom';
import Provider from "react-redux/lib/components/Provider";
import store from "./redux/store";
import AppContainer from "./components/AppContainer";


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, document.getElementById('root'));
import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header'
import Items from './components/items'

import store from './store';
import {Provider} from 'react-redux';

class App extends React.Component {
    componentDidMount() {
        store.dispatch()
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="wrapper">
                        <Header/>

                        <div className="content-section">

                            <div className="container">
                                <Route path='/' exact strict component={Items}/>

                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont.js';
import Home from './pages/home';
import Chatbot from './pages/chatbot';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Ask from './pages/ask';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/chatbot' exact component={Chatbot}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/ask' exact component={Ask}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
          <GlobalStyle />
          <GlobalStyleFont />
        </div>
      </Provider>
    );
  }
}

export default App;

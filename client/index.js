import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ApolloClient from 'apollo-client'
// ApolloClient gets data from server and stores it locally - ApolloClient is library agnostic - does not care if we are using React, Angular etc
import { ApolloProvider } from 'react-apollo'
// ApolloProvider is glue layer b/w React and Apollo world; it is a React component and we are passing it a reference to the Apollo store

import App from './components/App'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'

const client = new ApolloClient({}) // like redux

const Root = () => {
  return (
    <ApolloProvider client={ client }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ SongList } />
          <Route path="songs/new" component={ SongCreate }/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

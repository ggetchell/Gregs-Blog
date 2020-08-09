
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostFormContainer from "./PostFormContainer"; 
import PostShowContainer from "./PostShowContainer";
import PostsContainer from "./PostsContainer";


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostsContainer} />
        <Route exact path="/posts" component={PostsContainer} />
        <Route exact path="/posts/new" component={PostFormContainer} />
        <Route exact path="/posts/:id" component={PostShowContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App

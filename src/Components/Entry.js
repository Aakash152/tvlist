import React from "react";

import Series from "../Containers/Series";
import SingleSeries from "../Containers/SingleSeries";
import { BrowserRouter } from "react-router-dom";
import NoPage from '../Components/NoPage';

import { Switch, Route } from "react-router-dom";

const Entry = () => {
  return (
    <div>
       <BrowserRouter basename="/tvlist">
      <Switch>
        <Route exact path="/" component={Series} />
        <Route exact path="/series/:id" component={SingleSeries} />
        <Route component={NoPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Entry;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import TransactionsPage from "./pages/transactions/TransactionsPage";

function App() {
  return (
    <Router>
      <div>
        <header className="header"></header>
        <div className="main-container">
          <Switch>
            <Redirect exact from="/" to="transactions" />
            <Route path="/transactions" component={TransactionsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

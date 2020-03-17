import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import TransactionsPage from "./pages/transactions/TransactionsPage";
import TransactionsViewPage from './pages/transaction-view/TransactionViewPage';

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <a href="/">Home</a>
        </header>
        <div className="main-container">
          <Switch>
            <Redirect exact from="/" to="transactions" />
            <Route exact path="/transactions" component={TransactionsPage} />
            <Route exact path="/transactions/:accountNo" component={TransactionsViewPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import "./TransactionViewPage.css";

class TransactionsViewPage extends Component {
    transaction = undefined;
    constructor(props) {
        super(props);
        this.transaction = props.location.state.transaction;
    }

    render() {
        return (
            <div className="transaction-info">
                <h2>Transaction view</h2>
                <hr />
                <div className="transaction">
                    <div className="info">
                        <label> Account No: </label>
                        <span>{this.transaction.account} </span>
                    </div>
                    <div className="info">
                        <label> Account Name: </label>
                        <span>{this.transaction.accountName} </span>
                    </div>
                    <div className="info">
                        <label> Currency Code: </label>
                        <span>{this.transaction.currencyCode} </span>
                    </div>
                    <div className="info">
                        <label> Amount: </label>
                        <span>{this.transaction.amount} </span>
                    </div>
                    <div className="info">
                        <label> Transaction Type: </label>
                        <span>{this.transaction.transactionType} </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default TransactionsViewPage;

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TransactionsList extends Component {

    handleClick = (transaction) => {
        this.props.history.push({
            pathname: `/transactions/${transaction.account}`,
            state: {
                transaction: transaction
            }
        })
    }

    render() {
        return (
            <table className="transactions-table">
                <thead>
                    <tr>
                        <th>ACCOUNT NO.</th>
                        <th>ACCOUNT NAME</th>
                        <th>CURRENCY</th>
                        <th>AMOUNT</th>
                        <th>TRANSACTION TYPE</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.transactions.map((transaction) => (
                        <tr key={transaction.account}>
                            <td>
                                <a href="#" onClick={() => this.handleClick(transaction)}>{transaction.account}</a>
                            </td>
                            <td>{transaction.accountName}</td>
                            <td>{transaction.currencyCode}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.transactionType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default withRouter(TransactionsList);

import React, { Component } from "react";

class TransactionsList extends Component {
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
                    {this.props.transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.account}</td>
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

export default TransactionsList;

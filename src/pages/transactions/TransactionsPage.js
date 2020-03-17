import React, { Component } from "react";
import { getTransactions } from "../../services/TransactionService";
import TransactionsList from "./../../components/transactions/TransactionsList";
import "./TransactionsPage.css";

class TransactionsPage extends Component {

    hasMoreResult = false;
    filteredTransactionsList = [];
    from = 0
    size = 50;

    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            displayedTransactionsList: [],
        }

        window.onscroll = () => {
            if (this.hasMoreResult) {
                let st = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
                if(document.documentElement.offsetHeight - (window.innerHeight + st) < 150) {
                    this.from = this.from + this.size;
                    this.showMoreTransactions();
                }
            }
        }
    }

    showMoreTransactions = () => {
        let data = this.filteredTransactionsList.slice(this.from, this.from + this.size);
        if (this.filteredTransactionsList.length > this.size) {
            this.hasMoreResult = true;
        } else {
            this.hasMoreResult = false;
        }
        this.setState({
            displayedTransactionsList: [...this.state.displayedTransactionsList, ...data]
        });
    }


    async componentDidMount() {
        const data = await getTransactions();
        this.filteredTransactionsList = data.transactions;
        this.showMoreTransactions();
    }

    render() {
        const { displayedTransactionsList } = this.state;
        return (
            <div>
                <div className="mb-16">
                    <h1 className="title">My Transactions</h1>
                    <hr />
                </div>
                <div>
                    <div>
                        <TransactionsList transactions={displayedTransactionsList} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TransactionsPage;

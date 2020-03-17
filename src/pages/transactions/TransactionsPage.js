import React, { Component } from "react";
import { getTransactions } from "../../services/TransactionService";
import TransactionsList from "./../../components/transactions/TransactionsList";
import Filters from "./../../components/transactions/Filters";
import "./TransactionsPage.css";

class TransactionsPage extends Component {

    hasMoreResult = false;
    filteredTransactionsList = [];
    allTransactions = [];
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
                if (document.documentElement.offsetHeight - (window.innerHeight + st) < 150) {
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
        this.allTransactions = [...data.transactions];
        this.filteredTransactionsList = data.transactions;
        this.showMoreTransactions();
    }

    handleFilterChange = (selectedFilters) => {
        const data = [...this.allTransactions];
        const accountNames = selectedFilters.accountNames.map(ele => ele.replace(/_/g, " ").toLowerCase());
        const transactionTypes = selectedFilters.transactionTypes.map(ele => ele.toLowerCase());

        let fitleredResults = data;
        if (accountNames.length > 0) {
            fitleredResults = data.filter(x => accountNames.indexOf(x.accountName.toLowerCase()) > -1);
        }
        if (transactionTypes.length > 0) {
            fitleredResults = fitleredResults.filter(x => transactionTypes.indexOf(x.transactionType.toLowerCase()) > -1);
        }
        this.filteredTransactionsList = fitleredResults;
        this.from = 0;
        this.setState({
            displayedTransactionsList: []
        }, () => this.showMoreTransactions());

    }

    render() {
        const { displayedTransactionsList } = this.state;
        return (
            <div>
                <div className="mb-16">
                    <h1 className="title">My Transactions</h1>
                    <hr />
                </div>
                <div className="transactions-main">
                    <Filters onFilterChange={this.handleFilterChange} />
                    <TransactionsList transactions={displayedTransactionsList} />
                </div>
            </div>
        )
    }
}

export default TransactionsPage;

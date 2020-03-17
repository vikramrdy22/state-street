import React, { Component } from "react";
import CheckBox from "../common/CheckBox";
import "./Filters.css";

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFilters: {
                transactionTypes: [],
                accountNames: []
            }
        }
    }

    handleChange = (type, name, event) => {
        const selectedFilters = { ...this.state.selectedFilters };
        if (type === "accountName") {
            const index = selectedFilters.accountNames.indexOf(name);
            if (index > -1) {
                selectedFilters.accountNames.splice(index, 1);
            } else {
                selectedFilters.accountNames.push(name);
            }
        } else {
            const index = selectedFilters.transactionTypes.indexOf(name);
            if (index > -1) {
                selectedFilters.transactionTypes.splice(index, 1);
            } else {
                selectedFilters.transactionTypes.push(name);
            }
        }
        this.setState({
            selectedFilters
        }, () => this.props.onFilterChange(selectedFilters));
    }

    render() {
        const { selectedFilters } = this.state;
        return (
            <div className="filters">
                <h2>Filters</h2>
                <div>
                    <h3>Account Name</h3>
                    <div className="account-name-filters">
                        <CheckBox type="accountName" name="Savings_Account" value="Savings Account" checked={selectedFilters.accountNames.indexOf('Savings_Account') > -1} onChange={this.handleChange} />
                        <CheckBox type="accountName" name="Checking_Account" value="Checking Account" checked={selectedFilters.accountNames.indexOf('Checking_Account') > -1} onChange={this.handleChange} />
                        <CheckBox type="accountName" name="Auto_Loan_Account" value="Auto Loan Account" checked={selectedFilters.accountNames.indexOf('Auto_Loan_Account') > -1} onChange={this.handleChange} />
                        <CheckBox type="accountName" name="Credit_Card_Account" value="Credit Card Account" checked={selectedFilters.accountNames.indexOf('Credit_Card_Account') > -1} onChange={this.handleChange} />
                        <CheckBox type="accountName" name="Investment_Account" value="Investment Account" checked={selectedFilters.accountNames.indexOf('Investment_Account') > -1} onChange={this.handleChange} />
                        <CheckBox type="accountName" name="Personal_Loan_Account" value="Personal Loan Account" checked={selectedFilters.accountNames.indexOf('Personal_Loan_Account') > -1} onChange={this.handleChange} />
                        <CheckBox type="accountName" name="Money_Market_Account" value="Money Market Account" checked={selectedFilters.accountNames.indexOf('Money_Market_Account') > -1} onChange={this.handleChange} />
                        <CheckBox type="accountName" name="Home_Loan_Account" value="Home Loan Account" checked={selectedFilters.accountNames.indexOf('Home_Loan_Account') > -1} onChange={this.handleChange} />
                    </div>
                </div>
                <div>
                    <h3>Transaction Type</h3>
                    <div className="transaction-type-filters">
                        <CheckBox type="transactionType" name="deposit" value="Deposit" checked={selectedFilters.accountNames.indexOf('deposit') > -1}  onChange={this.handleChange} />
                        <CheckBox type="transactionType" name="withdrawal" value="Withdrawal" checked={selectedFilters.accountNames.indexOf('withdrawal') > -1}  onChange={this.handleChange} />
                        <CheckBox type="transactionType" name="invoice" value="Invoice" checked={selectedFilters.accountNames.indexOf('invoice') > -1}  onChange={this.handleChange} />
                        <CheckBox type="transactionType" name="payment" value="Payment" checked={selectedFilters.accountNames.indexOf('payment') > -1}  onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters;

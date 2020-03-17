import React, { Component } from "react";

class CheckBox extends Component {
    render() {
        const { name, type, value } = this.props;
        return (
            <span>
                <input type="checkbox" name={name} onChange={(event) => this.props.onChange(type, name, event)} />
                {value}
            </span> 
        )
    }
}

export default CheckBox;

import React, { Component } from "react";

import styled from "styled-components"
// import { Button } from "react-bootstrap";

export class AppButton extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const Button = styled.button`
        /* Adapt the colors based on primary prop */
        background: ${this.props.primary ? this.props.color: this.props.background};
        color: ${this.props.primary ? this.props.background : this.props.color};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid ${this.props.color};
        border-radius: 0.25rem;
      `;
        return (
            <>
            <Button as="a" href="/" onClick={this.props.onClick} >
            {this.props.inputval}
        </Button>
        </>
        )
    }
}

AppButton.defaultProps = {
    primary: false,
    background: "white",
    color: "#db8215"
  };
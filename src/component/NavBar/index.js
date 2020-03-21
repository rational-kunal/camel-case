import React from "react";
import './navbar.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <div className="nav-bg" />
                <div className="container">
                    <div className="row">
                        <div className="col-10 nav-brand">
                            { this.props.brandName }
                        </div>
                        <div className="col-2 nav-button" onClick={ this.props.onChange }>
                            home
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class Header extends Component {

    render() {


        return (
            <div className="header-section">
                
                <div className="container flex-wrap">
                    <NavLink exact className="header-logo" to="/">Food Vybe</NavLink>

                        <ul className="header-nav">
                            <li>
                                <NavLink exact className="nav-item" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact className="nav-item" to="/">About</NavLink>
                            </li>
                            <li>
                                <NavLink exact className="nav-item" to="/">FAQ</NavLink>
                            </li>
                            <li>
                                <NavLink exact className="nav-item" to="/">Contacts</NavLink>
                            </li>
                        </ul>


                    <ul className="header-user">
                                <span>
                                    <li>
                                        <NavLink exact className="btn simple" to="/">Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact className="btn simple" to="/">Register</NavLink>
                                    </li>
                                </span>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({isLoading: state.auth.isLoading, error: state.error})

export default connect(mapStateToProps)(Header)
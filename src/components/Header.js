/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';


export default () => (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/images/logo/logo.jpg" alt="logo" width="100" height="50" /> | กินข้าวกัน
            </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <NavLink to="/" className="navbar-item" activeClassName="is-active">Home</NavLink>
                    <NavLink to="/about" className="navbar-item" activeClassName="is-active">About</NavLink>
                    <NavLink to="/orders" className="navbar-item" activeClassName="is-active">Order</NavLink>
                    <NavLink to="/products" className="navbar-item" activeClassName="is-active">Product</NavLink>
                </div>
            </div>
        </div>
    </nav>
)
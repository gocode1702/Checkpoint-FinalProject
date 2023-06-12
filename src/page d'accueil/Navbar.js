import React, { Component } from "react";
import "./Navbar.css"
import logo from "../Media/img/profilforme.jpg"
import { Link } from "react-router-dom";
import "mdbreact/dist/css/mdb.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { Routes , Route } from "react-router-dom";
import background from "../Media/img/vision.png";

import SignUp from "../InterfaceUsers/signUp/SignUp";
import SignIn from "../InterfaceUsers/signIn/SignIn";
import ListUsers from "../InterfaceUsers/List-users/ListUsers";






class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="dark" dark expand="md" style={{ padding: "20px" }}>
        <MDBNavbarBrand>
          <img
            src={logo}
            className="fadeinout"
            id="logo"
            alt="profile-user"
            style={{ cursor: "pointer" }}
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">HOME</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>
                    {" "}
                    <Link to="/analytic">Supervisor</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">SERVICES</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>
                    <Link to="/ser/DocsHome">Learn</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Products</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>
                    <Link to="/ser/Booksnet">BooksNet </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/ser/BooksEdition">BooksEdition </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">News</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>
                    <Link to="/ser/Seminar">Seminar </Link>{" "}
                  </MDBDropdownItem>

                  <MDBDropdownItem>
                    <Link to="/ser/Articls">Articls </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    {" "}
                    <Link to="/ser/ProgramF">ProgramF </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/ser/NoticeBuyer">NoticeBuyer </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/analytic">Analytic </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/analytic/invoices"> Pricing </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem>
                  <Link to="/add"> UserAdd </Link>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <Link to="/list"> ListUsers </Link>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <Link to="/ser/Newsletter"> Newsletter </Link>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBNavItem>
              <SignIn />
            </MDBNavItem>
            <MDBNavItem>
              <SignUp />
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;

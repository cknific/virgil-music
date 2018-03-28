import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'

class Header extends Component {
  state = {
    isOpen: false,
  }

  handleToggle = () => {
    // eslint-disable-next-line react/no-set-state
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { isOpen } = this.state

    return (
      <Navbar color="dark" expand="sm" dark>
        <NavbarBrand href="/">
          Virgil Music
        </NavbarBrand>
        <NavbarToggler onClick={this.handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>A</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>B</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>C</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header

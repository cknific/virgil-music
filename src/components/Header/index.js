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
import styled from 'styled-components'

const StyledNavbar = styled(Navbar)`
  &&& {
    background-color: #222;
  }
`

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
      <StyledNavbar expand="sm" dark>
        <NavbarBrand href="/">
          VIRGIL
        </NavbarBrand>
        <NavbarToggler onClick={this.handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>The Band</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Listen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Pre-order</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </StyledNavbar>
    )
  }
}

export default Header

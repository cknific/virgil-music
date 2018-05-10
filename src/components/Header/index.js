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

const StyledNavbar = styled(Navbar).attrs({
  dark: true,
  expand: 'sm',
  fixed: 'top',
  sticky: 'top',
})
`
  &&& {
    background-color: #111111e8;
    font-family: "PT Sans Narrow", sans-serif;
    position: sticky;
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
      <StyledNavbar>
        <NavbarBrand href="/">
          VIRGIL
        </NavbarBrand>
        <NavbarToggler onClick={this.handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#bio">Bio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#listen">Listen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pre-order">Order</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.instagram.com/virgil_music/"
                target="_blank"
              >
                Instagram
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.facebook.com/thisisvirgil/"
                target="_blank"
              >
                Facebook
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.youtube.com/channel/UC9WxKj4wD34FNlzYwF6Dm4g"
                target="_blank"
              >
                YouTube
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </StyledNavbar>
    )
  }
}

export default Header

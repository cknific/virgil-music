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
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
  margin-top: .25rem;
`

const StyledNav = styled(Nav).attrs({
  navbar: true,
})`
  margin-left: auto;
`

const StyledNavbar = styled(Navbar).attrs({
  dark: true,
  expand: 'sm',
  fixed: 'top',
  sticky: 'top',
})
`
  &&& {
    background-color: rgba(17, 17, 17, 0.91);
    font-family: "PT Sans Narrow", sans-serif;
    position: sticky;
  }
`

const StyledNavLink = styled(NavLink)`
  &&& {
    padding-top: 0;
    padding-bottom: 0;
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
              <NavLink href="#pacer">The Pacer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#bio">Bio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#listen">Listen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pre-order">Order</NavLink>
            </NavItem>
          </Nav>
          <StyledNav>
            <NavItem>
              <StyledNavLink
                href="https://www.instagram.com/virgil_music/"
                target="_blank"
                title="Virgil Instagram Account"
              >
                <StyledFontAwesomeIcon icon={faInstagram} />
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                href="https://www.facebook.com/thisisvirgil/"
                target="_blank"
                title="Virgil Facebook Page"
              >
                <StyledFontAwesomeIcon icon={faFacebook} />
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                href="https://www.youtube.com/channel/UC9WxKj4wD34FNlzYwF6Dm4g"
                target="_blank"
                title="Virgil YouTube Channel"
              >
                <StyledFontAwesomeIcon icon={faYoutube} />
              </StyledNavLink>
            </NavItem>
          </StyledNav>
        </Collapse>
      </StyledNavbar>
    )
  }
}

export default Header

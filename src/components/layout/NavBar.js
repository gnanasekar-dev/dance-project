import React, { useState, useEffect } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

// Render public/guests links
const renderNavbarGuestLinks = () => {
  return (
    <Nav className='ml-auto' navbar>
      <NavItem>
        <NavLink tag={RRNavLink} to='/' activeClassName='active'>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to='/about-me' activeClassName='active'>
          About Me
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to='/event' activeClassName='active'>
          Event
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RRNavLink} to='/brochure' activeClassName='active'>
          Brochure
        </NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          More
        </DropdownToggle>
        <DropdownMenu left>
          <DropdownItem>
            <NavLink tag={RRNavLink} to='/guru' activeClassName='active'>
              Guru
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink tag={RRNavLink} to='/projects' activeClassName='active'>
              Projects
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <Navbar expand='md' className={navbar ? "navbar-custom-scroll" : "navbar-custom-still"}>
      <div className='row w-100'>
        <div className='col-3'>
          <h3 className='font-greate-vibes-regular mt-2'>
            Esha's Bharatanatyam Arangetram
          </h3>
        </div>
        <div className='col-9'>
          <div className='float-end'>
            <NavbarToggler onClick={toggle}>
              <svg
                className='toggler-custom'
                viewBox='0 0 24 24'
                fill='currentColor'
                width='40px'
                height='40px'
                data-ux='IconHamburger'
                class='x-el x-el-svg c2-1 c2-2 c2-x c2-y c2-1m c2-17 c2-18 c2-19 c2-1a c2-3 c2-4 c2-5 c2-6 c2-7 c2-8'
              >
                <path
                  fill-rule='evenodd'
                  d='M19 8H5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2zm0 5.097H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zm0 5.25H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z'
                ></path>
              </svg>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              {renderNavbarGuestLinks()}
            </Collapse>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;

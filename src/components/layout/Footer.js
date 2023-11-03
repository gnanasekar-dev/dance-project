import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <div className='d-flex justify-content-center mb-5'>
                <svg
                  color='rgb(247, 247, 247)'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  width='40px'
                  height='40px'
                  data-ux='IconSocial'
                  class='x-el x-el-svg c1-1 c1-2 c1-3n c1-3b c1-7g c1-69 c1-6a c1-6b c1-6c c1-b c1-c c1-d c1-e c1-f c1-g'
                >
                  <path d='M16.604 8.516c.13.35.198.719.203 1.091.033.622.033.811.033 2.386 0 1.574-.004 1.763-.033 2.385a3.273 3.273 0 0 1-.203 1.091 1.956 1.956 0 0 1-1.12 1.12c-.35.13-.719.198-1.091.204-.622.032-.811.032-2.386.032-1.574 0-1.763-.003-2.385-.032a3.273 3.273 0 0 1-1.091-.204 1.956 1.956 0 0 1-1.12-1.12 3.273 3.273 0 0 1-.204-1.09c-.032-.623-.032-.812-.032-2.386 0-1.575.003-1.764.032-2.386.006-.372.074-.741.204-1.09a1.956 1.956 0 0 1 1.12-1.12c.35-.13.718-.199 1.09-.204.623-.033.812-.033 2.386-.033 1.575 0 1.764.004 2.386.033.372.005.741.074 1.09.203.515.2.922.606 1.12 1.12zM12 15.033a3.033 3.033 0 1 0 0-6.066 3.033 3.033 0 0 0 0 6.066zm3.153-5.477a.71.71 0 1 0 0-1.418.71.71 0 0 0 0 1.418zM12 13.967a1.967 1.967 0 1 1 0-3.934 1.967 1.967 0 0 1 0 3.934zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2zm5.87 12.433c-.01.49-.102.974-.274 1.432a3.018 3.018 0 0 1-1.727 1.728 4.335 4.335 0 0 1-1.433.272c-.629.03-.829.037-2.432.037-1.604 0-1.819 0-2.433-.037a4.335 4.335 0 0 1-1.433-.272 3.018 3.018 0 0 1-1.727-1.728 4.335 4.335 0 0 1-.273-1.432c-.029-.63-.036-.83-.036-2.433 0-1.604 0-1.818.036-2.433.01-.49.102-.974.273-1.432a3.018 3.018 0 0 1 1.727-1.728 4.335 4.335 0 0 1 1.433-.272c.629-.03.829-.037 2.433-.037 1.603 0 1.818 0 2.432.037.49.009.974.101 1.433.272.794.307 1.42.934 1.727 1.728.172.458.264.943.273 1.432.03.63.036.83.036 2.433 0 1.604-.007 1.804-.036 2.433z'></path>
                </svg>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='d-flex justify-content-center mb-5'>
                <p className='font-size-12 color-half-white'>
                  Copyright © 2022 Fryktos Inc - All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='d-flex justify-content-center mb-5'>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to='/'
                  activeClassName='active'
                  className='color-white'
                >
                  HOME
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

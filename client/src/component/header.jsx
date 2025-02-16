import React, { Fragment } from 'react';
import Menu from './menu';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Fragment>
            <header id="new-header" class="stickystack">
                <div className="new-header-top">
                    <div className="new-container">
                        <div className="new-header-top-wrap">
                            <div className="new-header-top-logo">
                                <Link to='/home'>
                                    <img src="/img/pandora logo.png" style={{ marginLeft: '40px', width: '170px', height: '35px' }} alt="Pandora-viet-nam" />
                                </Link>
                            </div>
                            <div className="new-header-top-actions">

                                <div className="new-header-top-actions-list">
                                    <ul>
                                        <li className="new-header-top-actions-store">
                                            <a href="https://pandora.norbreeze.vn/blogs/ha-noi">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                            </a>
                                        </li>
                                        
                                        <li className="new-header-top-actions-account">
                                            <div class="welcome">
                                                <Link to="/" class="header__actions-link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                                </Link>
                                                <div class="dropdown-menu">
                                                    <Link to="/login" className="dropdown-item-logout"> Đăng xuất</Link>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="new-header-top-actions-cart">
                                            <a href="/cart">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu />
            </header>
        </Fragment>
    );
}

export default Header;
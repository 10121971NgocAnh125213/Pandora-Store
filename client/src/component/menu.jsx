import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <Fragment>
            <div className="new-header-bottom">
                <div className="new-container">
                    <div className="new-header-menu">
                        <ul className="new-header-menu-list">
                            <li className="new-header-menu-list-item"> 
                                <Link to='/home'>
                                    <span>TRANG CHỦ</span>
                                </Link>
                            </li>
                            <li className="new-header-menu-list-item"> 
                                <Link to='/home'>
                                    <span>GIỚI THIỆU</span>
                                </Link>
                            </li>
                            <li className="new-header-menu-list-item"> 
                                <Link to='/collection'>
                                    <span>THỨC ĂN THEO VẤN ĐỀ</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                </Link>
                                <div className="new-header-menu-mega">
                                    <div className="new-header-product-menu-mega">
                                        <div className="new-header-product-colum" style={{paddingLeft: '20px'}}>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Hỗ trợ tiêu hoá</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Hỗ trợ dinh dưỡng</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Hỗ trợ tai mắt</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Hỗ trợ gan thận</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Hỗ trợ xương khớp</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Hộ trợ lông da - ve rận</p>
                                                    </a>
                                                </li>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="new-header-menu-list-item"> 
                                <Link to='/collection'>
                                    <span>THỨC ĂN CHO MÈO</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                </Link>
                                <div className="new-header-menu-mega">
                                    <div className="new-header-product-menu-mega">
                                        <div className="new-header-product-colum" style={{paddingLeft: '20px'}}>
                                            <a href="#" className="new-header-product-heading">Theo giống mèo</a>
                                            <ul>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Mèo Anh lông ngắn</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Mèo Munchkin lông ngắn</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Mèo Xiêm</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Mèo cam</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Mèo Ragdoll</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Mèo Bengal</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Mèo Sphyns không lông</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="new-header-product-colum">
                                            <a href="#" className="new-header-product-heading">Theo độ tuổi</a>
                                            <ul>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">0 - 6 tháng</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">6 tháng - 2 năm</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">2 - 6 năm</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">7 - 10 năm</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">11 - 14 năm</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">15 năm trở lên</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="new-header-product-colum">
                                            <a href="#" className="new-header-product-heading">Theo thương hiệu</a>
                                            <ul>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Thức ăn cho mèo kitcat</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Thức ăn cho mèo minino</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Thức ăn cho mèo whiskas</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Thức ăn cho mèo meo-o</p>
                                                    </a>
                                                </li>
                                                <li className="new-header-product-item">
                                                    <a href="#" className="new-header-product-item-link">
                                                        <p className="new-header-product-item-name">Thức ăn cho mèo blisk</p>
                                                    </a>
                                                </li>
                                            </ul>    
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="new-header-menu-list-item"> 
                                <a href="https://pandora.norbreeze.vn/collections/new-collection-1">
                                    <span>DỊCH VỤ</span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                    height="1em"viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                </a>
                                <div className="new-header-menu-mega">
                                    <div className="new-header-product-menu-mega">
                                        <div className="new-header-product-colum" style={{paddingLeft: '20px'}}>
                                            <li className="new-header-product-item">
                                                <a href="#" className="new-header-product-item-name">Cứu hộ mèo</a>
                                            </li>
                                            <li className="new-header-product-item">
                                                <a href="#" className="new-header-product-item-name">Tắm cho mèo</a>
                                            </li>
                                            <li className="new-header-product-item">
                                                <a href="#" className="new-header-product-item-name">Cắt tỉa lông cho mèo</a>
                                            </li>
                                            <li className="new-header-product-item">
                                                <a href="#" className="new-header-product-item-name">Tiêm phòng cho mèo</a>
                                            </li>
                                            <li className="new-header-product-item">
                                                <a href="#" className="new-header-product-item-name">Trông giữ mèo</a>
                                            </li>
                                            <li className="new-header-product-item">
                                                <a href="#" className="new-header-product-item-name">Khách sạn mèo</a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="new-header-menu-list-item"> 
                                <a href="https://pandora.norbreeze.vn/collections/new-collection-1">
                                    <span>BLOG</span>
                                </a>
                            </li>
                            <li className="new-header-menu-list-item"> 
                                <a href="http://127.0.0.1:5501/html/TuyenDung.html">
                                    <span>TIN TỨC</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>   
    );
}

export default Menu;
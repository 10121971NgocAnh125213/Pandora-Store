import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Promotion from '../component/promotion';
import Header from '../component/header';
import Footer from '../component/footer';

function Staff(){
  return (
    <Fragment>
        <Promotion/>
        <Header/>
        <main id="new-main">
            <div className="pageAbout-us" id="recruitment">
                <div className="breadcrumb-shop">
                    <div className="breadcrumb-old">
                        <ol className="breadcrumb-arrows" itemscope itemtype="#">
                            <li itemprop="itemListElement" itemscope itemtype="#">
                                <a herf="#" target="_self" itemprop="item">
                                    <span itemprop="name">Trang chủ</span>
                                </a>
                                <meta itemprop="position" content="1"/>
                            </li>
                            <li className="active" itemprop="itemListElement" itemscope itemtype="#">
                                <span className="before">/</span>
                                <span itemprop="item" content="#">
                                    <span itemprop="name">TUYỂN DỤNG</span>
                                </span>
                                <meta itemprop="position" content="2"/>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="container">
                    <div className="wrapper-row">
                        <div className="page-wrapper" >
                            <div className="heading-page-text-center">
                                <h1>TUYỂN DỤNG</h1>
                            </div>
                            <div className="wrapbox-content-page">
                                <div className="wrap-content-page">
                                    <div className="head-title-filter"> Lọc tin tuyển dụng </div>
                                    <div className="group-filter"> 
                                        <div className="group-select-one">
                                            <select clas="department">
                                                <option value="none" data-value="none" selected>Chọn khối phòng ban</option>
                                                <option value="Bộ phận sales" data-value="/">Bộ phận sales</option>
                                                <option value="Bộ phận Marketing" data-value="/">Bộ phận Marketing</option>
                                                <option value="Bộ phận Management" data-value="/">Bộ phận Management</option>
                                            </select>
                                        </div>
                                        <div className="group-select-one">
                                            <select className="location">
                                                <option value="none" data-value="none">Chọn nơi làm việc</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="filter-button">
                                        <button className="clear" type="button">Xóa bộ lọc</button>
                                        <button className="filter" type="button">Tìm kiếm</button>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-result">
                                <table className="desktop"> 
                                    <thead>
                                        <tr className="fs-20" style={{bsTableAccentAg: '#fff'}}>
                                            <th style={{width: '25%'}}>Vị trí</th>
                                            <th style={{width: '20%'}}>Khối phòng ban</th>
                                            <th style={{width: '15%'}}>Địa điểm</th>
                                            <th style={{width: '10%'}}>Ngày đăng</th>
                                            <th style={{width: '10%'}}>Hạn nộp</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onclick="window.location='/blogs/bo-phan-sales/store-manager';" className="cursor-pointer">
                                            <td>Store Manager</td>
                                            <td>Bộ phận sales</td>
                                            <td>Hà Nội, TP. HCM</td>
                                            <td>20/06/2023</td>
                                            <td>30/06/2023</td>
                                        </tr>
                                        <tr onclick="window.location='/blogs/bo-phan-sales/nhan-vien-tu-van-ban-hang';" className="cursor-pointer">
                                            <td>Nhân viên tư vấn bán hàng</td>
                                            <td>Bộ phận sales</td>
                                            <td>TP. HCM, Hà Nội</td>
                                            <td>12/01/2023</td>
                                            <td>30/06/2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="list-new-recruitment">
                                <div className="row">
                                    <div className="artile-item">
                                        <div className="blog-post">
                                            <div className="blog-post-image">
                                                <div className=" blog-post-content">
                                                    <a href="#">
                                                        <img className="dt-width-100" src="assets/img/blog-post-image1.PNG" style={{width: '100%', height: 'auto'}}/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="blog-post-content">
                                                <h3 className="blog-title">
                                                    <a href="#">Môi trường làm việc</a>
                                                </h3>
                                                <p className="blog-desc">
                                                    "Văn phòng Norbreeze Collective Assia - Norbreeze House tọa lạc tại Lakeview 3, phường Thủ Thiển, Quận 2 - "
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="artile-item">
                                        <div className="blog-post">
                                            <div className="blog-post-image">
                                                <div className=" blog-post-content">
                                                    <a href="#">
                                                        <img className="dt-width-100" src="assets/img/blog-post-image1.PNG" style={{width: '100%', height: 'auto'}}/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="blog-post-content">
                                                <h3 className="blog-title">
                                                    <a href="#">Môi trường làm việc</a>
                                                </h3>
                                                <p className="blog-desc">
                                                    "Văn phòng Norbreeze Collective Assia - Norbreeze House tọa lạc tại Lakeview 3, phường Thủ Thiển, Quận 2 - "
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="artile-item">
                                        <div className="blog-post">
                                            <div className="blog-post-image">
                                                <div className=" blog-post-content">
                                                    <a href="#">
                                                        <img className="dt-width-100" src="assets/img/blog-post-image1.PNG" style={{width: '100%', height: 'auto'}}/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="blog-post-content">
                                                <h3 className="blog-title">
                                                    <a href="#">Môi trường làm việc</a>
                                                </h3>
                                                <p className="blog-desc">
                                                    "Văn phòng Norbreeze Collective Assia - Norbreeze House tọa lạc tại Lakeview 3, phường Thủ Thiển, Quận 2 - "
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </Fragment>
  );
}

export default Staff;
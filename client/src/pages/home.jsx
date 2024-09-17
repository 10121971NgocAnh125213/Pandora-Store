import React, { Fragment } from 'react';
import Promotion from '../component/promotion';
import Header from '../component/header';
import Footer from '../component/footer';
import { Link } from 'react-router-dom';
import { StartSlider } from '../until/slider';

function Home() {

    StartSlider();
    return (
        <Fragment>
            <Promotion/>
            <Header/>
            <main id="new-main">
                    <div id="new-index-banner-top">
                        <div className>
                            <a href="https://pandora.norbreeze.vn/collections/double-day-5-5">
                                <img src="/img/new-index-banner-top.png" alt="" style={{ width: '100%'}} />
                            </a>
                        </div>
                    </div>
                    <section className="home-coupon">
                        <div className="coupon-container">
                            <div className="listCoupon">
                                <div className="coupon-item">
                                    <div className="coupon-item-inner">
                                        <div className="coupon-item-left">
                                            <div className="bottom"></div>
                                            <div className="coupon-img">
                                                <span className="coupon-img-insert">
                                                    <img src="/img/home-coupon.webp"/>
                                                </span>
                                            </div>
                                            <div className="on"></div>
                                        </div>
                                        <div className="coupon-item-right">
                                            <button className="coupon-icon" type="button" title="Giảm thêm 50k"></button>
                                            <div className="coupon-top">
                                                <h3>Giảm thêm 50k</h3>
                                                <p>Đơn từ 2 triệu thanh toán qua VNPAY</p>
                                            </div>
                                            <div className="coupon-bottom">
                                                <div className="coupon-bottom-detail">
                                                    <p>
                                                        Mã:
                                                        <strong>VNPAYGIFT</strong>
                                                    </p>
                                                    <p>HSD: 23:59:59, 30/06/2024</p>
                                                </div>
                                                <div className="coupon-bottom-btn">
                                                    <button className="coupon-btn" data-coupon="VNPAYGIFT">Sao chép mã</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="coupon-item">
                                    <div className="coupon-item-inner">
                                        <div className="coupon-item-left">
                                            <div className="bottom"></div>
                                            <div className="coupon-img">
                                                <span className="coupon-img-insert">
                                                    <img src="/img/home-coupon.webp"/>
                                                </span>
                                            </div>
                                            <div className="on"></div>
                                        </div>
                                        <div className="coupon-item-right">
                                            <button className="coupon-icon" type="button" title="Giảm thêm 50k"></button>
                                            <div className="coupon-top">
                                                <h3>Giảm thêm 100k</h3>
                                                <p>Đơn từ 5 triệu thanh toán qua VNPAY</p>
                                            </div>
                                            <div className="coupon-bottom">
                                                <div className="coupon-bottom-detail">
                                                    <p>
                                                        Mã:
                                                        <strong>VNPAYGIFT</strong>
                                                    </p>
                                                    <p>HSD: 23:59:59, 30/06/2024</p>
                                                </div>
                                                <div className="coupon-bottom-btn">
                                                    <button className="coupon-btn" data-coupon="VNPAYGIFT">Sao chép mã</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="coupon-item">
                                    <div className="coupon-item-inner">
                                        <div className="coupon-item-left">
                                            <div className="bottom"></div>
                                            <div className="coupon-img">
                                                <span className="coupon-img-insert">
                                                    <img src="/img/home-coupon.webp"/>
                                                </span>
                                            </div>
                                            <div className="on"></div>
                                        </div>
                                        <div className="coupon-item-right">
                                            <button className="coupon-icon" type="button" title="Giảm thêm 50k"></button>
                                            <div className="coupon-top">
                                                <h3>Giảm thêm 200k</h3>
                                                <p>Đơn từ 10 triệu thanh toán qua VNPAY</p>
                                            </div>
                                            <div className="coupon-bottom">
                                                <div className="coupon-bottom-detail">
                                                    <p>
                                                        Mã:
                                                        <strong>VNPAYGIFT</strong>
                                                    </p>
                                                    <p>HSD: 23:59:59, 30/06/2024</p>
                                                </div>
                                                <div className="coupon-bottom-btn">
                                                    <button className="coupon-btn" data-coupon="VNPAYGIFT">Sao chép mã</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id="new-index-item1">
                        <div className="container">
                            <div className="new-index-item1-wrap">
                                <div className="new-index-item1-left">
                                    <h3>Xem ngay ưu đãi</h3>
                                </div>
                                <div className="new-index-item1-right">
                                    <div className="new-index-item-list">
                                        <div className="new-index-item1-item">
                                            <a href="https://pandora.norbreeze.vn/collections/new-collection-1">
                                                <img className="dt-width-100" src="/img/new_index_item1_1_compact.webp"/>
                                                    <span>
                                                        <div className="before"></div>
                                                        HÀNG MỚI VỀ
                                                    </span>
                                            </a>
                                        </div>
                                        <div className="new-index-item1-item">
                                            <a href="https://pandora.norbreeze.vn/collections/new-collection-1">
                                                <img className="dt-width-100" src="/img/new_index_item1_2_compact.webp" width="160" height="160"/>
                                                    <span>
                                                        <div className="before"></div>
                                                        CHARM
                                                    </span>
                                            </a>
                                        </div>
                                        <div className="new-index-item1-item">
                                            <a href="https://pandora.norbreeze.vn/collections/new-collection-1">
                                                <img className="dt-width-100" src="/img/new_index_item1_3_compact.webp" width="160" height="160"/>
                                                    <span>
                                                        <div className="before"></div>
                                                        VÒNG TAY
                                                    </span>
                                            </a>
                                        </div>
                                        <div className="new-index-item1-item">
                                            <a href="https://pandora.norbreeze.vn/collections/new-collection-1">
                                                <img className="dt-width-100" src="/img/new_index_item1_4_compact.webp" width="160" height="160"/>
                                                    <span>
                                                        <div className="before"></div>
                                                        NHẪN
                                                    </span>
                                            </a>
                                        </div>
                                        <div className="new-index-item1-item">
                                            <a href="https://pandora.norbreeze.vn/collections/new-collection-1">
                                                <img className="dt-width-100" src="/img/new_index_item1_5_compact.webp" width="160" height="160"/>
                                                    <span>
                                                        <div className="before"></div>
                                                        HOA TAI
                                                    </span>
                                            </a>
                                        </div>
                                        <div className="new-index-item1-item">
                                            <a href="https://pandora.norbreeze.vn/collections/new-collection-1">
                                                <img className="dt-width-100" src="/img/new_index_item1_6_compact.webp" width="160" height="160"/>
                                                    <span>
                                                        <div className="before"></div>
                                                        DÂY CHUYỀN
                                                    </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="new-index-slider">
                        <div className="new-container">
                            <div className="new-index-slider-wrap">
                                <section>
                                    <div className="swiper-pointer-events">
                                        <img className="slide-header-img" src="/img/new-index-slider-1.png"/>
                                        <img className="slide-header-img" src="/img/new-index-slider-2.png"/>
                                        <img className="slide-header-img" src="/img/new-index-slider-3.png"/>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div id="new-index-item2">
                        <div className="container" style={{ boxSizing: 'border-box' }}>
                                <div className="new-index-item2-wrap">
                                    <div className="new-index-item2-left">
                                        <div className="new-index-item2-list">
                                            <div className="new-index-item2-item">
                                                <a href="https://pandora.norbreeze.vn/collections/sinh-nhat">
                                                    <img className="img-reponsive" src="/img/new-index-item1.jpg" alt=""/>
                                                    <span>
                                                        Du lịch
                                                        <div className="text"></div>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="new-index-item2-item">
                                                <a href="https://pandora.norbreeze.vn/collections/sinh-nhat">
                                                    <img className="img-reponsive" src="/img/new-index-item2.webp" alt=""/>
                                                    <span>
                                                        Sinh nhật tháng 6
                                                        <div className="text"></div>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="new-index-item2-item">
                                                <a href="https://pandora.norbreeze.vn/collections/sinh-nhat">
                                                    <img className="img-reponsive" src="/img/new-index-item3.webp" alt=""/>
                                                    <span>
                                                        Thiên nhiên
                                                        <div className="text"></div>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="new-index-item2-item">
                                                <a href="https://pandora.norbreeze.vn/collections/sinh-nhat">
                                                    <img className="img-reponsive" src="/img/new-index-item4.webp" alt=""/>
                                                    <span>
                                                        Biểu tượng mới
                                                        <div className="text"></div>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="new-index-item2-item">
                                                <a href="https://pandora.norbreeze.vn/collections/sinh-nhat">
                                                    <img className="img-reponsive" src="/img/new-index-item5.webp" alt=""/>
                                                    <span>
                                                        Disney x Pandora
                                                        <div className="text"></div>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="new-index-item2-item">
                                                <a href="https://pandora.norbreeze.vn/collections/sinh-nhat">
                                                    <img className="img-reponsive" src="/img/new-index-item6.webp" alt=""/>
                                                    <span>
                                                        Ngọc trai
                                                        <div className="text"></div>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="new-index-item2-right">
                                        <h6> </h6>
                                        <h3> XEM NGAY BIỂU TƯỢNG MỚI</h3>
                                        <div className="new-index-item2-action">
                                            <Link to="/collection">XEM THÊM</Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="new-product-like">
                                    <h2>ĐỘC QUYỀN ONLINE</h2>
                                    <div className="swiper-pointer">
                                        <div className="swiper-wrapper" aria-live="polite" style={{marginLeft: '80px'}}>
                                            <div className="swiper-slide" style={{width: '227px', height: '320px'}} role="group" aria-label="1/7">
                                                <div className="new-product-loop-like">
                                                    <a href="#" className="new-product-loop-like-wrap">
                                                        <span className="new-product-loop-like-head">
                                                            <span className="new-product-loop-like-head-hidden">
                                                                <i className="fa-regular fa-heart fa-2xl"></i>
                                                            </span>
                                                            <button className="new-product-loop-like-btn" >MUA NGAY</button>
                                                            <span className="new-product-loop-like-head">
                                                                <span className="new-product-loop-like-img">
                                                                    <img src="/images/bst7.webp"/>
                                                                </span>
                                                                <span className="new-product-loop-like-label-discount">NEW</span>
                                                            </span>
                                                            <span className="new-product-loop-like-body">
                                                                <span className="new-product-loop-like-title">Charm Disney x Pandora Khung Quay Mickey và Minne</span>
                                                                <span className="new-product-loop-like-prices">
                                                                    <b>3,5900,000đ</b>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide" style={{width: '227px', height: '320px'}} role="group" aria-label="1/7">
                                                <div className="new-product-loop-like">
                                                    <a href="#" className="new-product-loop-like-wrap">
                                                        <span className="new-product-loop-like-head">
                                                            <span className="new-product-loop-like-head-hidden">
                                                                <i className="fa-regular fa-heart fa-2xl"></i>
                                                            </span>
                                                            <button className="new-product-loop-like-btn" >MUA NGAY</button>
                                                            <span className="new-product-loop-like-head">
                                                                <span className="new-product-loop-like-img">
                                                                    <img src="/images/bst2.webp"/>
                                                                </span>
                                                                <span className="new-product-loop-like-label-discount">NEW</span>
                                                            </span>
                                                            <span className="new-product-loop-like-body">
                                                                <span className="new-product-loop-like-title">Charm Disney x Pandora Khung Quay Mickey và Minne</span>
                                                                <span className="new-product-loop-like-prices">
                                                                    <b>3,5900,000đ</b>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide" style={{width: '227px', height: '320px'}} role="group" aria-label="2/7">
                                                <div className="new-product-loop-like">
                                                    <a href="#" className="new-product-loop-like-wrap">
                                                        <span className="new-product-loop-like-head">
                                                            <span className="new-product-loop-like-head-hidden">
                                                                <i className="fa-regular fa-heart fa-2xl"></i>
                                                            </span>
                                                            <button className="new-product-loop-like-btn" >MUA NGAY</button>
                                                            <span className="new-product-loop-like-head">
                                                                <span className="new-product-loop-like-img">
                                                                    <img src="/images/bst5.webp"/>
                                                                </span>
                                                                <span className="new-product-loop-like-label-discount">NEW</span>
                                                            </span>
                                                            <span className="new-product-loop-like-body">
                                                                <span className="new-product-loop-like-title">Charm Disney x Pandora Khung Quay Mickey và Minne</span>
                                                                <span className="new-product-loop-like-prices">
                                                                    <b>3,5900,000đ</b>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide" style={{width: '227px', height: '320px'}} role="group" aria-label="3/7">
                                                <div className="new-product-loop-like">
                                                    <a href="#" className="new-product-loop-like-wrap">
                                                        <span className="new-product-loop-like-head">
                                                            <span className="new-product-loop-like-head-hidden">
                                                                <i className="fa-regular fa-heart fa-2xl"></i>
                                                            </span>
                                                            <button className="new-product-loop-like-btn" >MUA NGAY</button>
                                                            <span className="new-product-loop-like-head">
                                                                <span className="new-product-loop-like-img">
                                                                    <img src="/images/bst6.webp"/>
                                                                </span>
                                                                <span className="new-product-loop-like-label-discount">NEW</span>
                                                            </span>
                                                            <span className="new-product-loop-like-body">
                                                                <span className="new-product-loop-like-title">Charm Disney x Pandora Khung Quay Mickey và Minne</span>
                                                                <span className="new-product-loop-like-prices">
                                                                    <b>3,5900,000đ</b>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide" style={{width: '227px', height: '320px'}} role="group" aria-label="4/7">
                                                <div className="new-product-loop-like">
                                                    <a href="#" className="new-product-loop-like-wrap">
                                                        <span className="new-product-loop-like-head">
                                                            <span className="new-product-loop-like-head-hidden">
                                                                <i className="fa-regular fa-heart fa-2xl"></i>
                                                            </span>
                                                            <button className="new-product-loop-like-btn" >MUA NGAY</button>
                                                            <span className="new-product-loop-like-head">
                                                                <span className="new-product-loop-like-img">
                                                                    <img src="/images/bst3.webp"/>
                                                                </span>
                                                                <span className="new-product-loop-like-label-discount">NEW</span>
                                                            </span>
                                                            <span className="new-product-loop-like-body">
                                                                <span className="new-product-loop-like-title">Charm Disney x Pandora Khung Quay Mickey và Minne</span>
                                                                <span className="new-product-loop-like-prices">
                                                                    <b>3,5900,000đ</b>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                    <div id="new-index-collect">
                        <div className="container">
                            <h2>BỘ SƯU TẬP</h2>
                        </div>
                        <div className="container">
                            <div className="new-index-collect-wrap">
                                <div className="new-index-collect-item">
                                    <span className="new-index-collect-item-head">
                                        <a href="https://pandora.norbreeze.vn/collections/new-collection">
                                            <img className="img-collect" src="/img/new-index-collect-item1.PNG" alt=""/>
                                        </a>
                                    </span>
                                    <span className="new-index-collect-item-title">BE LOVE</span>
                                    <span className="new-index-collect-item-desc"> </span>
                                    <span className="new-index-collect-item-cta"> XEM THÊM </span>
                                </div>
                                <div className="new-index-collect-item">
                                    <span className="new-index-collect-item-head">
                                        <a href="https://pandora.norbreeze.vn/collections/new-collection">
                                            <img className="img-collect" src="/img/new-index-collect-item2.jpg" alt=""/>
                                        </a>
                                    </span>
                                    <span className="new-index-collect-item-title">MÙA HÈ RỰC RỠ</span>
                                    <span className="new-index-collect-item-desc"> </span>
                                    <span className="new-index-collect-item-cta"> XEM THÊM </span>
                                </div>
                                <div className="new-index-collect-item">
                                    <span className="new-index-collect-item-head">
                                        <a href="https://pandora.norbreeze.vn/collections/new-collection">
                                            <img className="img-collect" src="/img/new-index-collect-item3.webp" alt=""/>
                                        </a>
                                    </span>
                                    <span className="new-index-collect-item-title">BỘ QUÀ TẶNG</span>
                                    <span className="new-index-collect-item-desc"> </span>
                                    <span className="new-index-collect-item-cta"> XEM THÊM </span>
                                </div>
                                <div className="new-index-collect-item">
                                    <span className="new-index-collect-item-head">
                                        <a href="https://pandora.norbreeze.vn/collections/new-collection">
                                            <img className="img-collect" src="/img/new-index-collect-item4.webp" alt=""/>
                                        </a>
                                    </span>
                                    <span className="new-index-collect-item-title">NHỮNG DỊP ĐẶC BIỆT</span>
                                    <span className="new-index-collect-item-desc"> </span>
                                    <span className="new-index-collect-item-cta"> XEM THÊM </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="new-index-policy">
                        <div className="container">
                            <div className="new-index-policy-wrap">
                                <div className="new-index-policy-item">
                                    <a href="https://pandora.norbreeze.vn/pages/freeship-toan-quoc" className="box">
                                        <span className="icon">
                                            <img src="/img/freeship.webp" alt="Free ship toàn quốc"/>
                                        </span>
                                        <span className="title">
                                            Free ship
                                            <br/>
                                            toàn quốc
                                        </span>
                                        <div className="line"></div>
                                    </a>
                                </div>
                                <div className="new-index-policy-item">
                                    <a href="https://pandora.norbreeze.vn/pages/giao-hang-hoa-toc-noi-thanh" className="box">
                                        <span className="icon">
                                            <img src="/img/hoatoc.webp" alt="Ship hoả tốc nội thành"/>
                                        </span>
                                        <span className="title">
                                            Ship hoả tốc
                                            <br/>
                                            nội thành
                                        </span>
                                        <div className="line"></div>
                                    </a>
                                </div>
                                <div className="new-index-policy-item">
                                    <a href="https://pandora.norbreeze.vn/pages/thiep-viet-tay" className="box">
                                        <span className="icon">
                                            <img src="/img/thiep.webp" alt="Thiệp viết tay"/>
                                        </span>
                                        <span className="title">
                                            Thiệp
                                            <br/>
                                            viết tay
                                        </span>
                                        <div className="line">

                                        </div>
                                    </a>
                                </div>
                                <div className="new-index-policy-item">
                                    <a href="https://pandora.norbreeze.vn/pages/uu-dai-sinh-nhat" className="box">
                                        <span className="icon">
                                            <img src="/img/sinhnhat.webp" alt="Ưu đãi sinh nhật"/>
                                        </span>
                                        <span className="title">
                                            Ưu đãi
                                            <br/>
                                            Sinh nhật
                                        </span>
                                        <div className="line">

                                        </div>
                                    </a>
                                </div>
                                <div className="new-index-policy-item">
                                    <a href="https://pandora.norbreeze.vn/pages/gia-tot-hon" className="box">
                                        <span className="icon">
                                            <img src="/img/voucher.webp" alt="Giá tốt hơn"/>
                                        </span>
                                        <span className="title">
                                            Giá
                                            <br/>
                                            tốt hơn
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
            <Footer/>
        </Fragment>
    );
}

export default Home;
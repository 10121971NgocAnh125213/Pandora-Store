import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Promotion from '../component/promotion';
import Header from '../component/header';
import Footer from '../component/footer';
import AddProduct from '../until/cart';

function Detail() {
    AddProduct();

    const [sanpham, setData] = useState({});

    const { MaSanPham } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/getProd/${MaSanPham}`)
            .then((resq) => setData({ ...resq.data[0] }));
    }, [MaSanPham]);

    // Format currency
    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };



    return (
        <Fragment>
            <Promotion />
            <Header />
            <main id="new-main">
                <div id="new-product">
                    <div className="new-procduct-topbar" style={{ backgroundColor: '#ffcad4' }}>
                        <div className="new-product-topbar-content">
                            <div>
                                <b> </b>
                            </div>
                        </div>
                    </div>
                    <div className="new-product-breadcrumb">
                        <div className="new-container" style={{ marginLeft: '35px' }}>
                            <div classNameName>
                                <ol className="breadcrumb-arrows">
                                    <li itemProp="itemListElement">
                                        <a href="#">
                                            <span>Trang chủ</span>
                                        </a>
                                        <meta itemProp="position" content="1" />
                                    </li>
                                    <li itemProp="itemListElement">
                                        <a href="#">
                                            <span>/ Tất cả sản phẩm nguyên giá</span>
                                        </a>
                                        <meta itemProp="position" content="2" />
                                    </li>
                                    <li className="active" itemProp="itemListElement">
                                        <a href="#">
                                            <span>/ {sanpham.TenSanPham}</span>
                                        </a>
                                        <meta itemProp="position" content="3" />
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="new-product-head">
                        <div className="new-container1">
                            <div className="new-product-head-wrap">
                                <div className="new-product-images">
                                    <div className="swiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <a href="#" className="zoom" style={{ position: 'relative', overflow: 'hidden' }}>
                                                    <img className="dt-width-100" src={sanpham.HinhAnh} width="480" height="480" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="new-product-img-info">
                                        <ul>
                                            <li>Chính sách áp dụng một đổi một trong vòng 15 ngày kể từ ngày nhận hàng và chỉ đổi duy nhất 01 lần.</li>
                                            <li>Miễn phí vận chuyển</li>
                                            <li>Vệ sinh, làm sạch sản phẩm miễn phí</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="new-product-info">
                                    <div className="id-product">{sanpham.MaSanPham}</div>
                                    <div style={{ display: 'none' }} className="product-content__option ">
                                        <div className="product-content__option-item-wrap active">
                                            <span data={sanpham.SoLuong}></span>
                                        </div>
                                    </div>
                                    <div className="new-product-info-label"><span>New</span></div>
                                    <h1 className="new-product-title">{sanpham.TenSanPham}</h1>
                                    <div className="new-product-info-prices">
                                        <b>{formatCurrency(sanpham.Gia)}</b>
                                    </div>
                                    <div className="new-product-swatch">
                                        <form id="add-item-form">
                                            <div className="select-swatch">
                                                <div id="variant-swatch-0" className="swatch" data-option="option1">
                                                    <div className="header">
                                                        <span>Chất liệu</span>
                                                    </div>
                                                    <div className="select-swap">
                                                        <div data-value="Bạc" className="swatch-material">
                                                            <input className="variant-0" type="radio" value="Bạc" checked />
                                                            <label for="swatch-bac" className="sd">
                                                                <span>{sanpham.ChatLieu}</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="variant-swatch-1" className="swatch" data-option="option2">
                                                    <div className="header">
                                                        <span>Màu sắc</span>
                                                    </div>
                                                    <div className="select-swap">
                                                        <div data-value="Xanh Dương" className="swatch-color">
                                                            <input className="variant-1" type="radio" value="Xanh Dương" checked />
                                                            <label for="swatch-bac" className="sd">
                                                                <span>{sanpham.MauSac}</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="line"></div>
                                    <div className="new-product-action">
                                        <button className="addcart" >Thêm vào giỏ</button>
                                    </div>
                                    <div className="new-product-wishlist">
                                        <span className="wishlist-btn">
                                            <button id="onAppWishList-btn-add">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" style={{ paddingRight: '5px' }} viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                                <span>Thêm vào yêu thích</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script>

                        </script>
                        <div className="new-product-body">
                            <div className="new-container1">
                                <div className="new-product-contents">
                                    <div className=" new-product-content">
                                        <h3>Thông tin sản phẩm</h3>
                                        <div className="new-product-content-wrap">
                                            <div style={{ padding: '0 0 25px' }}>
                                                "Hãy đeo những món yêu thích của bạn với Murano Màu Xanh Disney Mickey Mouse & Minnie Mouse. Cặp đôi được yêu thích nhất của Disney trở lại trong bộ sưu tập mới Disney x Pandora. Charm đặc biệt này có hiệu ứng lấp lánh được lấy cảm hứng từ bộ phim yêu thích của Disney, Fantasia. Móc khoá có lõi bạc sterling được bao quanh bởi kính Murano hai màu xanh lấp lánh với bốn viên cubic zirconia tròn trong đó. Hãy đeo Mickey Mouse và Minnie Mouse mỗi ngày trên dây xích hoặc vòng cổ bạc yêu thích của bạn."
                                                <div>&nbsp;</div>
                                                <div>
                                                    <strong>Bộ sưu tập:</strong>
                                                    &nbsp;Disney x Pandora
                                                    <br />
                                                    <strong>Mã sản phẩm:</strong>
                                                    792958C01
                                                    <br />
                                                    <strong>Phân loại sản phẩm:</strong>
                                                    &nbsp;Charm
                                                    <br />
                                                    <strong>Kim loại:</strong>
                                                    &nbsp;Bạc
                                                    <br />
                                                    <strong>Màu sắc:</strong>
                                                    &nbsp;{sanpham.MauSac}
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" new-product-content">
                                        <h3>Gợi ý kết hợp</h3>
                                    </div>
                                </div>
                                <div className="new-product-ps">
                                    <ul className="new-product-ps-list">
                                        <li>
                                            <h4>Chính sách đổi trả hàng</h4>
                                            <p>Chính sách đổi hàng chỉ áp dụng cho các sản phẩm bị lỗi kĩ thuật và là hàng nguyên giá hoặc giảm giá dưới 20%. Chính sách áp dụng một đổi một trong vòng 15 ngày kể từ ngày nhận hàng và chỉ đổi duy nhất 01 lần.</p>
                                        </li>
                                        <li>
                                            <h4>Tặng quà</h4>
                                            <p>Bạn muốn gửi tặng trang sức Pandora đến người đặc biệt? Chỉ cần chọn sản phẩm bạn muốn tặng, nhân viên CSKH của chúng tôi sẽ tự tay gói quà và viết thông điệp bạn muốn gửi đến người nhận quà. Chỉ cần ghi chú lên đơn hàng khi đặt hàng bạn nhé! Pandora sẽ liên hệ bạn ngay!</p>
                                        </li>
                                        <li>
                                            <h4>Miễn phí vận chuyển</h4>
                                            <p>Pandora miễn phí giao hàng trên toàn quốc với mọi giá trị đơn hàng.</p>
                                        </li>
                                        <li>
                                            <h4>Cách thức bảo quản</h4>
                                            <p>Nên vệ sinh sản phẩm bằng bộ vệ sinh sản phẩm chuyên dụng của Pandora và sau khi sử dụng vui lòng vệ sinh, bảo quản trong hộp kín để tránh tiếp xúc với không khí và tránh bị oxi hóa.</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Detail;
import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import Promotion from '../component/promotion';
import Header from '../component/header';


function Collection() {
    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/getAllProd");
        setData(response.data);
    };

    const handleSearch = async (e) => {
        const searchTerm = e.target.value;
        try {
            const response = await axios.get(`http://localhost:5000/api/searchsp/${searchTerm}`);
            setData(response.data);
        } catch (error) {
            console.error("Error searching data", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <Fragment>
            <Promotion />
            <Header />
            <main id="new-main">
                <div id="new-collection" >
                    <div className="new-collection-head">
                        <div className="new-collection-head-bg">
                            <picture>
                                <img src="img/new-collection-head.webp" alt="" />
                            </picture>
                        </div>
                        <div className="new-container">
                            <div className="new-collection-head-wrap">
                                <div className="breadcrumb">
                                    <div class>
                                        <ol className="breadcrumb-arrows">
                                            <li>
                                                <a href="#"> <span>Trang chủ</span> </a>
                                            </li>
                                            <li className="active">
                                                <span>/ THỨC ĂN CHO MÈO</span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <h1>
                                    <b>BỘ SƯU TẬP MỚI</b>
                                    <span>(33)</span>
                                </h1>
                                <div className="new-collection-desc">
                                    <p>
                                        <span style={{ fontSize: '11px' }}>
                                            <strong>THIẾT KẾ TINH XẢO - TÔN NÉT ĐẸP PHÁI ĐẸP</strong>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '11px' }}>
                                            BST "BE LOVE" tiếp tục ra mắt loại trang sức đượct hiết kế tỉ mỉ qua từng giai đoạn với các
                                            hoạ tiết đính đá, pha lê đen, bạc sterling cao cấp, vàng 14K, Murano...&nbsp
                                            <br />
                                            Tât cả đều mang ý nghĩa độc nhất và là món quà quý giá thay bạn tỏ bày cảm xúc thiêng
                                            liêng đến với những người phụ nữ bạn yêu thương. Cùng Pandora khám phá BST "BE LOVE" bạn nhé!
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="new-container">
                        <div className="new-collection-cates">
                            <ul>
                                <li>
                                    <a href="#" className="new-collection-cate-item">
                                        <span className="new-collection-cate-item-head">
                                            <img className="img-fluid dt-width-auto" width="98" height="98" src="img/giadinh.webp" alt="" />
                                        </span>
                                        <span className="new-collection-cate-item-title">Gia đình</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="new-collection-cate-item">
                                        <span className="new-collection-cate-item-head">
                                            <img className="img-fluid dt-width-auto" width="98" height="98" src="img/tinhyeu.webp" alt="" />
                                        </span>
                                        <span className="new-collection-cate-item-title">Tình yêu</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="new-collection-cate-item">
                                        <span className="new-collection-cate-item-head">
                                            <img className="img-fluid dt-width-auto" width="98" height="98" src="img/vongtay.webp" alt="" />
                                        </span>
                                        <span className="new-collection-cate-item-title">Vòng tay</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="new-collection-cate-item">
                                        <span className="new-collection-cate-item-head">
                                            <img className="img-fluid dt-width-auto" width="98" height="98" src="img/quatang.webp" alt="" />
                                        </span>
                                        <span className="new-collection-cate-item-title">Quà tặng</span>
                                    </a>
                                </li>
                                <div className="new-header-search">
                                    <form action="/search">
                                        <input type="hidden" name="type" value="product"/>
                                        <div className="search-input-wrap">
                                            <input type="text" onChange={handleSearch} className="search-input" name="q" placeholder="Tìm sản phẩm..."/>
                                            <button type="submit" className="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                                            </button>
                                        </div>
                                    </form>
                                    <a href="#" className="new-header-search-ovl"> </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="sticky-stack-wrapper">
                        <div className="new-collection-filter-section">
                            <div className="">
                                <div className="new-collection-filter-wrap">
                                    <div className="new-collection-filter">
                                        <div className="new-collection-filter-list">
                                            <div className="new-collection-filter-item-color">
                                                <button>
                                                    <span>MÀU SẮC</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                                </button>
                                            </div>
                                            <div className="new-collection-filter-item-material">
                                                <button>
                                                    <span>CHẤT LIỆU</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                                </button>
                                            </div>
                                            <div className="new-collection-filter-item-price">
                                                <button>
                                                    <span>GIÁ</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="new-collection-sort">
                                        <label for="new-collection-sort-select">Sắp xếp |</label>
                                        <select id="new-collecttion-sort-select">
                                            <option value="best-selling">Bán chạy nhất</option>
                                            <option value="price-acsending">Giá: Tăng dần</option>
                                            <option value="price-descending">Giá: Giảm dần</option>
                                            <option value="title-acsending">Tên: A-Z</option>
                                            <option value="title-descending">Tên Z-A</option>
                                            <option value="created-acsending">Cũ nhất</option>
                                            <option value="created-descending">Mới nhất</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="new-collection-fluid">
                        <div className="new-collection-list">
                            {data.map((item) => {
                                return (
                                    <div className="new-product-loop">
                                        <a href="#" className="new-product-loop-wrap">
                                            <span className="new-product-loop-head">
                                                <span className="new-product-loop-head-hidden">
                                                </span>
                                                <button className="new-product-loop-btn" ><Link to={`/detail/${item.MaSanPham}`} style={{ color: 'white' }}>MUA NGAY</Link></button>
                                                <span className="new-product-loop-head">
                                                    <span className="new-product-loop-img">
                                                        <img src={item.HinhAnh} style={{ width: '100%', height: '100%' }} width="480" height="480" />
                                                    </span>
                                                    <span className="new-product-loop-label-discount">NEW</span>
                                                </span>
                                                <span className="new-product-loop-body">
                                                    <span className="new-product-loop-title">{item.TenSanPham}</span>
                                                    <span className="new-product-loop-prices">
                                                        <b>{formatCurrency(item.Gia)}</b>
                                                    </span>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Collection;
import React, { Fragment, useEffect, useState } from 'react';

import Footer from '../component/footer';
import Promotion from '../component/promotion';
import Header from '../component/header';
import ActiveCart, { LoadData } from '../until/cartload';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cart() {
    
    ActiveCart();

    var list = JSON.parse(localStorage.getItem("cart")) || [];
    const [state, setState] = useState({        //Quản lý state
        ten_khach_hang: '',
        so_dien_thoai: '',
        ngayban:'',
        tong_tien:0
    });
         
    const { ten_khach_hang, so_dien_thoai, tong_tien } = state;
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };

    const handlePayment = (e) =>{
        e.preventDefault();
        const orderData = {
            NgayBan: new Date().toISOString().slice(0, 10), // Lấy ngày hiện tại
            TongTien: tong_tien, 
            MaKhachHang:1,
            TenKhachHang: ten_khach_hang,
            Sdt: so_dien_thoai,
        
            ctHDB: list.map(item => ({
                MaSanPham: Number(item.id),     //MSP lấy từ bảng
                TenSanPham: item.name, 
                SoLuong: item.quantity,
                DonGia: item.price,
            }))
        }
        console.log(orderData)
        axios.post("http://localhost:5000/api/addOrder", orderData)
        .then( () => {setState({ten_khach_hang :"",so_dien_thoai:"",dia_chi:"",ngayban:""})
            list = [];
            localStorage.setItem("cart", JSON.stringify(list));
            LoadData()
                    alert("Bạn đã đặt hàng thành công");

        })
        .catch(error => {
          // Xử lý lỗi nếu có
          console.error(error); // In thông báo lỗi lên console
          // Hiển thị thông báo lỗi cho người dùng
          alert("Đã có lỗi xảy ra, vui lòng thử lại sau");
        });
        console.log(orderData)
    }

    // component render lần đầu tiên
    useEffect(() => {
        const tongTienElement = document.querySelector('.btn-pay--price');      //lấy phần tử đầu tiên
        if (tongTienElement) {
          const value = tongTienElement.innerText || tongTienElement.textContent;       //Lấy nội dung của phần tử tongTienElement.
          const numberValue = parseInt(value.replace(/[^\d]/g, ''), 10); // Loại bỏ các ký tự không phải số và chuyển đổi sang số nguyên
          setState((prevState) => ({ ...prevState, tong_tien: numberValue }));
        }
      }, []);
    return (
        <Fragment>
            <Promotion/>
            <Header/>
            <main id="new-main">
                <div className="cartPage-container">
                    <form className="info">
                        <div className="info-header">
                            <h2>Thông tin đặt hàng</h2>
                        </div>
                        <div className="row info-body">
                            <div className="col-p-6">
                                <input className="input-name" onChange={handleInputChange} name='ten_khach_hang' value={ten_khach_hang} placeholder="Họ tên" type="text" required/>
                                <input className="input-phone" onChange={handleInputChange}name='so_dien_thoai' value={so_dien_thoai} placeholder="Số điện thoại" type="text" required/>
                            </div>

                                                                                                    
                            <div className="adress col p-4">
                                <select name=""  required>
                                    <option value="">Chọn Tỉnh/Thành phố</option>
                                    <option value="hungyen">Hưng Yên</option>
                                    <option value="hanoi">Hà Nội</option>
                                    <option value="tphcm">Thành phố Hồ Chí Minh</option>
                                    <option value="haiphong">Hải Phòng</option>
                                </select>
                            </div>
                            <div className="adress col p-4">
                                <select name="" required>
                                    <option value="">Chọn Quận/Huyện</option>
                                    <option value="kimdong">Kim Động</option>
                                    <option value="khoaichau">Khoái Châu</option>
                                    <option value="myhao">Mỹ Hào</option>
                                </select>
                            </div>
                            <div className="adress col p-4">
                                <select name="" required>
                                    <option value="">Chọn Phường/Xã</option>
                                    <option value="toanthang">Toàn Thắng</option>
                                    <option value="vinhxa">Vĩnh Xá</option>
                                    <option value="nghiadan">Nghĩa Dân</option>
                                </select>
                            </div>
                            <div className="col p-12">
                                <input type="text" className="input-adress" placeholder="Địa chỉ" required/>
                            </div>  
                            <div className="col-p-12">
                                <p>Nhập ghi chú quà tặng hoặc hướng dẫn giao hàng đặc biệt dưới đây (nếu có):</p>
                                <input  type="text" className="input-note" placeholder="Ghi chú thêm"/>
                            </div>
                            
                        </div>
                        <div className="payments">
                            <h2 className="payments">Hình thức thanh toán</h2>
                            <div className="payments-item active">
                                <input type="radio" className="check" name="check" value="ZaloPay"/>
                                <img src="https://www.coolmate.me/images/logo-zalopay.svg" alt="" />
                                <p className="payments-item__text">Ví điện tử ZaloPay</p>
                            </div>
                            <div className="payments-item">
                                <input type="radio" className="check" name="check" value="COD"/>
                                <img src="https://www.coolmate.me/images/COD.svg" alt="" />
                                <div className="payments-item__text"><p>COD</p>
                                    <p>Thanh toán khi nhận hàng</p></div>
                            </div>
                            <div className="payments-item">
                                <input type="radio" className="check" name="check" value="MOMO"/>
                                <img style={{width:'35px', height:'35px'}} src="https://www.coolmate.me/images/momo-icon.png" alt="" />
                                <p className="payments-item__text">MOMO</p>
                            </div>
                            <div className="payments-item">
                                <input type="radio" className="check" name="check" value="ShopeePay"/>
                                <img style={{width:'35px', height:'35px'}} src="https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png" alt=""/>
                                <div className="payments-item__text">
                                <p>Ví ShopeePay</p>
                                <i style={{fontSize:'13px'}}>Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay</i>
                                </div>
                            </div>
                            <div className="payments-item">
                                <input type="radio" className="check" name="check" value="VNPay"/>
                                <img style={{width:'55px'}} src="https://www.coolmate.me/images/vnpay.png" alt="" />
                                <div className="payments-item__text">
                                    <p>Thẻ ATM / Internet Banking</p>
                                    <p>Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card) VNPay QR</p>
                                </div>
                            </div>
                            <p style={{paddingLeft:'5px'}}>Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm <a style={{fontWeight:'700'}} href="">tại đây</a>.</p>
                            
                        </div>
                    </form>
                    <div className="list-product">
                        <div className="list-product__inner">
                            <h2>Giỏ hàng</h2>
                            <div className="list-product__item">
                                <div className="list-product__item-img">
                                    <img src="images/bst2.webp" alt=""/>
                                </div>
                                
                                <div className="list-product__item-content">
                                    <div className="list-product__item-name">Bộ Vòng Charm Pandora Khóa Tròn Và Charm Trái Tim</div>
                                    <div className="list-product__item-type">Size: 19</div>
                                    <div style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}}>  
                                        <div className="quantity-product">
                                            <button>
                                                <svg data-v-0d8807a2="" width="20" height="16" xmlns="http://www.w3.org/2000/svg"><g data-v-0d8807a2=""><line data-v-0d8807a2="" stroke-width="1.5" id="svg_6" y2="8" x2="10" y1="8" x1="5" stroke="#000000" fill="none"></line></g></svg>
                                            </button>
                                            <span>1</span>
                                            <button>
                                                <svg data-v-0d8807a2="" style={{paddingLeft: '5px', width:'20', height:'16'}} xmlns="http://www.w3.org/2000/svg"><g data-v-0d8807a2=""><line data-v-0d8807a2="" stroke-width="1.5" y2="8" x2="12.9695" y1="8" x1="3.0305" stroke="#000000" fill="none"></line> <line data-v-0d8807a2="" stroke-width="1.5" transform="rotate(90, 8, 8)" y2="8" x2="13" y1="8" x1="3" stroke="#000000" fill="none"></line></g></svg>
                                            </button>
                                        </div>
                                        <div className="product-price">
                                            <div className="product-new-price"></div>
                                            <div className="product-old-price"></div>
                                        </div>
                                        <div className="list-product__close">
                                            <i class="fa-solid fa-xmark"></i>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>   

                        </div>
                        <div className="cost-detail">
                            <span>Tổng tiền</span>
                            <span className="tamTinh"></span>
                        </div>
                       
                        <div className="check-policy">
                            <input type="checkbox" className="checkbox"/>
                            <p>Khi bấm nút "Thanh toán" đồng nghĩa khách hàng đã hiểu và đồng ý các
                                <a href=""> Điều khoản dịch vụ</a>
                                của Pandora Việt Nam.
                            </p>
                        </div>
                        <button type="submit" onClick={handlePayment} className="btn-pay">Thanh toán <span className="btn-pay--price"></span></button>
                        <Link to="/collection">
                            <a className="cart-continue" href=""> 
                                Tiếp tục mua sắm 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </Fragment>   
    );
}

export default Cart;
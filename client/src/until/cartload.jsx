import  { useEffect } from "react";
const $ = window.$;
var list = JSON.parse(localStorage.getItem("cart")) || [];

export function LoadData() {
  var str = "";
  var total = 0;
  var tamtinh = 0;
  for (let x of list) {
    // Sửa 'x of list' thành 'let x of list'
    total += x.price * x.quantity - x.discount;
    tamtinh += x.price * x.quantity;
    str += `<div class="list-product__item">
      <div class="list-product__item-img">
        <img src="${x.img}" alt="">
      </div>
      <div class="list-product__item-content">
        <div class="list-product__item-name">${x.name}</div>
        <div class="list-product__item-type">${x.color}</div>
        <div class="list-product__item-type">${x.material}</div>
        <div style="display:flex;justify-content: flex-start; margin: 28px 0 6px;" class="">                         
        </div>
        <div style="display:flex;justify-content: space-between;align-items: center;">  
          <div class="quantity-product">
            <button onclick="Giam('${x.id}')">
              <svg data-v-0d8807a2="" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g data-v-0d8807a2=""><line data-v-0d8807a2="" stroke-width="1.5" id="svg_6" y2="8" x2="10" y1="8" x1="5" stroke="#000000" fill="none"></line></g></svg>
            </button>
            <span>${x.quantity}</span>
            <button onclick="Tang('${x.id}')">
              <svg data-v-0d8807a2="" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g data-v-0d8807a2=""><line data-v-0d8807a2="" stroke-width="1.5" y2="8" x2="12.9695" y1="8" x1="3.0305" stroke="#000000" fill="none"></line> <line data-v-0d8807a2="" stroke-width="1.5" transform="rotate(90, 8, 8)" y2="8" x2="13" y1="8" x1="3" stroke="#000000" fill="none"></line></g></svg>
            </button>
          </div>
          <div class="product-price">
            <div class="product-new-price">${convertVND(x.price)}</div>
          </div>
        </div>
        <div class="list-product__close" onclick="Xoa('${x.id}','${x.material}','${x.color}')">
          <i class="fa-solid fa-xmark">X</i>
        </div>
      </div>
    </div>`;
  }
  
  $(".list-product__inner").html(str);  //Thay đổi nội dung bên trong phần tử thành chuỗi HTML
  $(".total__price").text(convertVND(total));
  $(".tamTinh").text(convertVND(tamtinh));
  $(".btn-pay--price").text(convertVND(tamtinh));
  if (list.length === 0) {
    $(".btn-pay").css({ opacity: "0.5", "pointer-events": "none" });
  }
}


export function convertVND(number) {
  if (number === 0) {
    return "0đ";
  }
  // Chuyển dạng số thành chuỗi
  var str = JSON.stringify(number);
  var result = "";
  var length = str.length;
  var count = 0;
  for (var i = length - 1; i >= 0; --i) {
    if (count % 3 === 0 && count !== 0) {
      result = str[i] + "." + result;
    } else {
      result = str[i] + result;
    }
    count++;
  }
  return result + "đ";
}

function ActiveCart() {
  useEffect(() => {
    
    LoadData();

 
        // Cập nhật giỏ hàng
        function updateCart() {
            localStorage.setItem("cart", JSON.stringify(list));
          }
      
          // xóa sản phẩm dựa trên id
          function Xoa(id) {
            var index = list.findIndex(
              (x) => x.id === id 
            );
            if (index >= 0) {
              // Nếu sp tồn tại thì xóa
              list.splice(index, 1);
            }
            updateCart();
            LoadData();
          }
      
          /*Tăng số lượng sản phẩm*/
          function Tang(id) {
            var index = list.findIndex((x) => x.id === id);
            if (index >= 0) {
              list[index].quantity += 1;
            }
            updateCart();
            LoadData();

          }
      
          /*Giảm số lượng sản phẩm*/
          function Giam(id) {
            var index = list.findIndex((x) => x.id === id);
            if (index >= 0 && list[index].quantity > 1) {
              list[index].quantity -= 1;
            }
            updateCart();
            LoadData();

          }
      
          window.Xoa = Xoa;
          window.Tang = Tang;
          window.Giam = Giam;

  }, []);
}

export default ActiveCart;

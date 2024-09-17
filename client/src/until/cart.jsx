import React, { useEffect } from "react";
function AddProduct() {
  useEffect(() => {

    const $ = window.$;

    function addToCart(item) {
      var list;
      if (localStorage.getItem("cart") == null) {
        list = [item];
      } else {
        list = JSON.parse(localStorage.getItem("cart")) || [];    //chuyển đổi chuỗi JSON thành mảng JavaScript
        let check = true;
        for (let x of list) {
          if (x.id === item.id && x.color === item.color && x.material === item.material) {
            x.quantity += 1;
            check = false;
            break;
          }
        }
        if (check) {
          list.push(item);
        }
      }
      localStorage.setItem("cart", JSON.stringify(list));
    }

    $(document).ready(function () {
      // Click event handler for adding to cart
      $('.addcart').click(function () {
        // Retrieve item details from the DOM
        var id = $(".id-product").text();
        var name = $(".new-product-title").text() || "Unknown Product";
        var img = $(".swiper-slide img").attr("src") || "default.jpg";
        var material = $(".swatch-material").text() || "No Material Specified";
        var color = $(".swatch-color").text() || "No Color Specified";
        var price = convertToNumber($(".new-product-info-prices").text()) || 0;

         // Retrieve the quantity from the hidden span element
         var quantity = parseInt($(".product-content__option-item-wrap.active span").attr("data")) || 0;

         // Check if the product is out of stock
         if (quantity === 0) {
             alert("Sản phẩm đã hết hàng");
             return; // Exit the function early
         }

        // Define the item object
        var item = {
          id: id, // You might want to generate unique IDs for different products
          name: name,
          img: img,
          material: material,
          color: color,
          price: price,
          quantity: 1
        };
        console.log(item)

        // Function to add the item to the cart (local storage)
        addToCart(item);
        alert("Sản phẩm đã được thêm vào giỏ hàng");
      });
    });

    function convertToNumber(price) {
      let result = "";
      for (let i = 0; i < price.length; i++) {
        if (price[i] !== "." && price[i] !== "đ") {
          result += price[i];
        }
      }
      return parseInt(result, 10);
    }
  }, []);
}

export default AddProduct;

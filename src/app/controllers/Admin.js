import Product from "../models/productModels.js";
import { productServices } from "../services/productServices.js";
import { getEle } from "../util/util.js";

function show_AddProduct() {
  document.getElementById("addSPModal").classList.remove("hidden");
}
window.show_AddProduct = show_AddProduct;

function closeFormAdd() {
  document.getElementById("addSPModal").classList.add("hidden");
}
window.closeFormAdd = closeFormAdd;

const renderProducts = (arrProducts) => {
  const content = arrProducts
    .map(
      ({
        id,
        name,
        price,
        screen,
        backCamera,
        frontCamera,
        img,
        type,
        desc,
      }) => `
    <tr>
      <td class="py-1 px-2 border text-center">${id}</td>
      <td class="py-1 px-2  border">${name}</td>
      <td class="py-1 px-2  border">
        <img width="200" src="${img}">
      </td>
      <td class="py-1 px-2  border">${price} VNĐ</td>
      <td class="py-1 px-2  border">${desc}</td>
      <td class="py-1 px-2  border text-center">
        <button onclick="editProduct(${id})" class="bg-yellow-500 text-white px-2 py-1 m-4 rounded">Sửa</button>
        <button onclick="delProduct(${id})" class="bg-red-500 text-white px-2 py-1 m-4 rounded">Xóa</button>
      </td>
    </tr>
`
    )
    .join("");
  document.querySelector("#product_table").innerHTML = content;
};

const getInfo = () => {
  let id = getEle("#IdSP").value;
  let name = getEle("#NameSP").value;
  let price = getEle("#PriceSP").value;
  let screen = getEle("#Screen").value;
  let backCamera = getEle("#BackCamera").value;
  let frontCamera = getEle("#FrontCamera").value;
  let img = getEle("#imgSP").value;
  let type = getEle("#Type").value;
  let desc = getEle("#node").value;
  return new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    type,
    desc
  );
};

const fetchProducts = () => {
  productServices
    .getProduct()
    .then((response) => {
      renderProducts(response.data);
    })
    .catch((error) => {});
};
fetchProducts();

const delProduct = (id) => {
  productServices
    .delProduct(id)
    .then((response) => {
      fetchProducts();
    })
    .catch((error) => {});
};
window.delProduct = delProduct;

const btn_addProduct = () => {
  const product = getInfo();
  productServices
    .addProduct(product)
    .then((response) => {
      fetchProducts();
      closeFormAdd();
    })
    .catch((error) => {});
};
window.btn_addProduct = btn_addProduct;

import { app } from "./firebase.js";
import {
  getFirestore,
  updateDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Initialize Cloud Firestore and get a reference to the service
console.log();
const db = getFirestore(app);

let userdata = localStorage.getItem("user-email");
let name;
const docRef = doc(db, "users", userdata);
const docSnap = await getDoc(docRef);

let items = [];
let addCart = () => {
  let carts = document.querySelectorAll(".add-cart");
  console.log(carts);

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
      let pdName = document.querySelectorAll(".product-name");
      let pdPrice = document.querySelectorAll(".price");

      let product = {
        name: pdName[i].innerText,
        price: pdPrice[i].innerText,
      };
      items.push(product);

      updateCart(items);

      carts[i].innerText = "Already Added";
      carts[i].disabled = true;

      console.log(items);

      localStorage.setItem("cart", JSON.stringify(items));
      localStorage.setItem("count", items.length);
      let count = localStorage.getItem("count");
      console.log(count);
      if (count == null) {
        count = 0;
      }
      document.querySelector(".total").innerText = count;
    });
  }
};

if (docSnap.exists()) {
  name = docSnap.data();
  console.log("Document data:", name);
  try {
    document.querySelector(
      "#user_name"
    ).textContent = `Welcome ${name.name} 👋`;
  } catch (e) {}
  try {
    document.querySelector(
      "#my_cart"
    ).textContent = `${name.name}'s Shopping Cart 😎`;
  } catch (e) {}

  items = name.cart;
  localStorage.setItem("cart", JSON.stringify(items));
  localStorage.setItem("count", items.length);
  // document.getElementById('ok').addEventListener('click',async()=>{
  //  await updateData()
  // })
  let count = localStorage.getItem("count");
  if (count == null) {
    count = 0;
  }
  document.querySelector(".total").innerText = count;
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

addCart();

let updateCart = async (data) => {
  await updateDoc(docRef, {
    cart: data,
  });
  console.log("done");
};

console.log(window.location.pathname);

if (
  window.location.pathname == "/cart.html" ||
  window.location.pathname == "/y/cart.html"
) {
  let count = localStorage.getItem("count");
  // console.log(count)
  if (count == null) {
    count = 0;
  }
  document.querySelector(".total").innerText = count;

  let lol = document.querySelector("#contents");
  let ans = document.querySelector("#ans");
  let items = localStorage.getItem("cart");
  items = JSON.parse(items);
  //  console.log(items)
  items.map((e) => {
    console.log(e);
    lol.innerHTML += `
    <tr>
    <td>${e.name}</td>
    <td>Rs : ${e.price}</td>
    <td ><button class="delete-item">Remove</button></td>
</tr>`;
  });
  let totalCost = 0;
  for (let t of items) {
    totalCost += parseFloat(t.price.replace(/,/g, ""));
  }
  console.log(totalCost);
  ans.innerText = totalCost;

  let allitems = document.querySelectorAll(".delete-item");

  for (let i = 0; i < allitems.length; i++) {
    allitems[i].addEventListener("click", async () => {
      console.log("deleete");
      items.splice(i, 1);
      await updateCart(items);

      localStorage.setItem("cart", JSON.stringify(items));
      localStorage.setItem("count", JSON.stringify(items.length));
      location.reload();
    });
  }
}

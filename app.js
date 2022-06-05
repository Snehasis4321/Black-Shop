//fetch laptop api

const fetchEcommerceApi = async (link) => {
    try {
        const res = await fetch(link)
        const data = await res.json()
        console.log(data)
        return data
    }
    catch (e) {
        console.log("error !", e)
    }
}

// const fetchLaptopData = async () => {

//     try {
//         const res = await fetch("https://noobgamer75.github.io/ecommerceApi/laptops.json")
//         const data = await res.json()
//         // console.log(data)
//         return data
//     }
//     catch (e) {
//         console.log("error !", e)
//     }
// }
// //fetch mobile api
// const fetchMobileData = async () => {

//     try {
//         const res = await fetch("https://noobgamer75.github.io/ecommerceApi/mobiles.json")
//         const data = await res.json()
//         // console.log(data)
//         return data
//     }
//     catch (e) {
//         console.log("error !", e)
//     }
// }

// create laptops 


const buildProducts = async (name, link) => {
    const productSection = document.querySelector(`.${name}`)
    let data = await fetchEcommerceApi(link)
    for (d of data) {
        // console.log(d.name)
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        let newImg = document.createElement('img')
        newImg.src = d.image
        let productName = document.createElement('h3')
        productName.classList.add('product-name')
        productName.innerText = d.name
        let price = document.createElement('h4')
        price.innerHTML = `Rs : <strike style='color:red'><span class="strike">${d.original}</span></strike><span class="price"> ${d.cost}</span>`
        // let hiddenCount = document.createElement('span')
        // hiddenCount.classList.add('item-count')
        // hiddenCount.innerText = 0
        let addButton = document.createElement('button')
        addButton.classList.add('add-cart')
        addButton.innerText = 'Add To Cart'
        let rating = document.createElement('h4')
        rating.innerText = `${d.rating} ⭐`
        // console.log(d.image)
        productSection.append(newDiv)
        newDiv.appendChild(newImg)
        newDiv.appendChild(productName)
        newDiv.appendChild(price)
        newDiv.appendChild(rating)
        // newDiv.appendChild(hiddenCount)
        newDiv.appendChild(addButton)
    }
}


// onLoadCart = () => {
//     let productNumbers = localStorage.getItem('cartNumbers')
//     if (productNumbers) {
//         document.querySelector(".total").textContent = productNumbers
//     }
// }
let items=[]
let addCart = () => {
    let carts = document.querySelectorAll('.add-cart')
    console.log(carts)


 for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
        
            let pdName = document.querySelectorAll('.product-name')
            let pdPrice = document.querySelectorAll('.price')
            // let pdCount = document.querySelectorAll('.item-count')
            // console.log(pdName[i].innerText)
            // console.log(pdPrice[i].innerText)
           
               
            let product = {
                name: pdName[i].innerText,
                price: pdPrice[i].innerText,
                
            }
            items.push(product)
            carts[i].innerText="Already Added"
            carts[i].disabled = true;
            
            console.log(items)
         
            localStorage.setItem('cart',JSON.stringify(items))
            localStorage.setItem('count',items.length)
            settotal()
            // totalCost(product)
            // cartNumbers(product)
            // onLoadCart()
        }
        )
    }
}

settotal=()=>{
   let count= localStorage.getItem('count')
   console.log(count)
   if(count==null){
       count=0
   }
   document.querySelector(".total").innerText=count
}

// cartNumbers = (product) => {
//     let productNumbers = localStorage.getItem('cartNumbers')
//     productNumbers = parseInt(productNumbers)
//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1)
//     }
//     else {
//         localStorage.setItem('cartNumbers', 1)
//     }
//     setItem(product)

// }

// setItem = (product) => {

//     let cartItems = localStorage.getItem('productInCart')
//     cartItems = JSON.parse(cartItems)
//     console.log(cartItems)

//     if (cartItems != null) {
//         if (cartItems[product.name] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.name]: product
//             }
//         }
//         cartItems[product.name].count = parseInt(cartItems[product.name].count) + 1
//     }
//     else {
//         console.log("inside produce")
//         console.log(product)
//         product.count = 1
//         cartItems = {
//             [product.name]: product
//         }
//     }

//     localStorage.setItem('productInCart', JSON.stringify(cartItems))
// }

// totalCost = (product) => {
//     let cartCost = localStorage.getItem('totalCost')

//     if (cartCost != null) {
//         cartCost = parseInt(cartCost)
//         localStorage.setItem('totalCost', cartCost = product.cost)
//     }
//     else {
//         localStorage.setItem('totalCost', product.cost)
//     }
// }

// function displayCart(){
//     let cartItems=localStorage.getItem('productInCart')
//     cartItems=JSON.parse(cartItems)
//     let productContainer=document.queryelector('#customers')
//     if(cartItems&&productContainer){
//         productContainer.innerHTML=''

//         Object.values(cartItems).map(e=>{
//             productContainer.innerHTML+=
//             `
//             <th>Name</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Delete</th>
//         </tr>
//         <tr>
//         <td>${e.name}</td>
//         <td>Rs : ${e.price}</td>
//         <td>${e.count}</td>
//         <td>Delete</td>
//     </tr>
//             `

//         })

//     }
// }



document.addEventListener('DOMContentLoaded', async () => {
    await buildProducts('laptop', 'https://noobgamer75.github.io/ecommerceApi/laptops.json')
    await buildProducts('mobile', 'https://noobgamer75.github.io/ecommerceApi/mobiles.json')
    addCart()
    settotal()
    // onLoadCart()
    // displayCart()
})

// document.addEventListener('DOMContentLoaded', async () => {
//     const laptopSection = document.querySelector('.laptop')
//     let data = await fetchEcommerceApi("https://noobgamer75.github.io/ecommerceApi/laptops.json")
//     for (d of data) {
//         // console.log(d.name)
//         let newDiv = document.createElement('div')
//         newDiv.classList.add('item')
//         let newImg = document.createElement('img')
//         newImg.src = d.image
//         let productName = document.createElement('h3')
//         productName.innerText = d.name
//         let price = document.createElement('h4')
//         price.innerHTML = `Rs : <strike style='color:red'><span class="strike">${d.original}</span></strike><span> ${d.cost}</span>`
//         let addButton = document.createElement('button')
//         addButton.classList.add('add-cart')
//         addButton.innerText = 'Add To Cart'
//         let rating = document.createElement('h4')
//         rating.innerText = `${d.rating} ⭐`
//         // console.log(d.image)
//         laptopSection.append(newDiv)
//         newDiv.appendChild(newImg)
//         newDiv.appendChild(productName)
//         newDiv.appendChild(price)
//         newDiv.appendChild(rating)
//         newDiv.appendChild(addButton)

//     }

// }
// )

// // create mobiles 

// document.addEventListener('DOMContentLoaded', async () => {
//     const mobileSection = document.querySelector('.mobile')
//     let data = await fetchEcommerceApi("https://noobgamer75.github.io/ecommerceApi/mobiles.json")
//     for (d of data) {
//         // console.log(d.name)
//         let newDiv = document.createElement('div')
//         newDiv.classList.add('item')
//         let newImg = document.createElement('img')
//         newImg.src = d.image
//         let productName = document.createElement('h3')
//         productName.innerText = d.name
//         let price = document.createElement('h4')
//         price.innerHTML = `Rs : <strike style='color:red'><span class="strike">${d.original}</span></strike><span> ${d.cost}</span>`
//         let addButton = document.createElement('button')
//         addButton.classList.add('add-cart')
//         addButton.innerText = 'Add To Cart'
//         let rating = document.createElement('h4')
//         rating.innerText = `${d.rating} ⭐`
//         // console.log(d.image)
//         mobileSection.append(newDiv)
//         newDiv.appendChild(newImg)
//         newDiv.appendChild(productName)
//         newDiv.appendChild(price)
//         newDiv.appendChild(rating)
//         newDiv.appendChild(addButton)



//     }
// }
// )


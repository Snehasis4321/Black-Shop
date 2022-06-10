


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



// let items=[]
// let addCart = () => {
//     let carts = document.querySelectorAll('.add-cart')
//     console.log(carts)


//  for (let i = 0; i < carts.length; i++) {
//         carts[i].addEventListener('click', () => {
        
//             let pdName = document.querySelectorAll('.product-name')
//             let pdPrice = document.querySelectorAll('.price')
           
               
//             let product = {
//                 name: pdName[i].innerText,
//                 price: pdPrice[i].innerText,
                
//             }
//             items.push(product)


//             carts[i].innerText="Already Added"
//             carts[i].disabled = true;
            
//             console.log(items)
         
//             localStorage.setItem('cart',JSON.stringify(items))
//             localStorage.setItem('count',items.length)
//             settotal()
//         }
//         )
//     }
// }

// settotal=()=>{
//    let count= localStorage.getItem('count')
//    console.log(count)
//    if(count==null){
//        count=0
//    }
//    document.querySelector(".total").innerText=count
// }


document.addEventListener('DOMContentLoaded', async () => {
    await buildProducts('laptop', 'https://noobgamer75.github.io/ecommerceApi/laptops.json')
    await buildProducts('mobile', 'https://noobgamer75.github.io/ecommerceApi/mobiles.json')
    // addCart()
    // settotal()


})



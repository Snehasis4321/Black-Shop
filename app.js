// const laptopSection = document.querySelector('.laptop')
// const dataSection =document.querySelector('.items')


const fetchLaptopData = async () => {

    try {
        const res = await fetch("https://noobgamer75.github.io/ecommerceApi/laptops.json")
        const data = await res.json()
        console.log(data)
        return data
    }
    catch (e) {
        console.log("error !", e)
    }
}

const fetchMobileData = async () => {

    try {
        const res = await fetch("https://noobgamer75.github.io/ecommerceApi/mobiles.json")
        const data = await res.json()
        console.log(data)
        return data
    }
    catch (e) {
        console.log("error !", e)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const laptopSection = document.querySelector('.laptop')
    let data = await fetchLaptopData()
    for (d of data) {
        console.log(d.name)
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        let newImg = document.createElement('img')
        newImg.src = d.image
        let productName = document.createElement('h3')
        productName.innerText = d.name
        let price = document.createElement('h4')
        price.innerHTML = `Rs : <strike style='color:red'><span class="strike">${d.original}</span></strike><span> ${d.cost}</span>`
        let addButton = document.createElement('button')
        addButton.innerText = 'Add To Cart'
        let rating = document.createElement('h4')
        rating.innerText = `${d.rating} ⭐`
        console.log(d.image)
        laptopSection.append(newDiv)
        newDiv.appendChild(newImg)
        newDiv.appendChild(productName)
        newDiv.appendChild(price)
        newDiv.appendChild(rating)
        newDiv.appendChild(addButton)

    }
}
)

document.addEventListener('DOMContentLoaded', async () => {
    const mobileSection = document.querySelector('.mobile')
    let data = await fetchMobileData()
    for (d of data) {
        console.log(d.name)
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        let newImg = document.createElement('img')
        newImg.src = d.image
        let productName = document.createElement('h3')
        productName.innerText = d.name
        let price = document.createElement('h4')
        price.innerHTML = `Rs : <strike style='color:red'><span class="strike">${d.original}</span></strike><span> ${d.cost}</span>`
        let addButton = document.createElement('button')
        addButton.innerText = 'Add To Cart'
        let rating = document.createElement('h4')
        rating.innerText = `${d.rating} ⭐`
        console.log(d.image)
        mobileSection.append(newDiv)
        newDiv.appendChild(newImg)
        newDiv.appendChild(productName)
        newDiv.appendChild(price)
        newDiv.appendChild(rating)
        newDiv.appendChild(addButton)

    }
}
)

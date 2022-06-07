settotal = () => {
    let count = localStorage.getItem('count')
    // console.log(count)
    if (count == null) {
        count = 0
    }
    document.querySelector(".total").innerText = count
    displayCart()
}




displayCart = () => {
    let lol = document.querySelector('#contents')
    let ans = document.querySelector('#ans')
    let items = localStorage.getItem('cart')
    items = JSON.parse(items)
    //  console.log(items)
    items.map(e => {
        console.log(e)
        lol.innerHTML += `
    <tr>
    <td>${e.name}</td>
    <td>Rs : ${e.price}</td>
    <td ><button class="delete-item">Remove</button></td>
</tr>`;


    })
    let totalCost = 0;
    for (let t of items) {
        totalCost += parseFloat(t.price.replace(/,/g, ''))
    }
    console.log(totalCost)
    ans.innerText = totalCost

}




let deleteItem = () => {
    let items = localStorage.getItem('cart')
    items = JSON.parse(items)
    let allitems = document.querySelectorAll('.delete-item')

    for (let i = 0; i < allitems.length; i++) {
        allitems[i].addEventListener('click', () => {
            console.log('deleete')
            items.splice(i, 1);

            localStorage.setItem('cart', JSON.stringify(items))
            localStorage.setItem('count', JSON.stringify(items.length))
            location.reload()
        }
        )


    }

}


document.addEventListener('DOMContentLoaded', () => {
    settotal()
    deleteItem()
})
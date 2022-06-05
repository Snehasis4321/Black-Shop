settotal = () => {
    let count = localStorage.getItem('count')
    // console.log(count)
    if (count == null) {
        count = 0
    }
    document.querySelector(".total").innerText = count
}




displayCart = () => {
    let lol = document.querySelector('#customers')
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


        // ans.innerText=totalCost

    })
    let totalCost = 0;
    for (let t of items) {
        totalCost += parseFloat(t.price.replace(/,/g, ''))
    }
    console.log(totalCost)
    ans.innerText = totalCost

}




deleteItem = () => {
    let items = localStorage.getItem('cart')
    items = JSON.parse(items)
    let allitems = document.querySelectorAll('.delete-item')

    for (let i = 0; i < allitems.length; i++) {
        allitems[i].addEventListener('click', () => {
            console.log('deleete')
          let arr=items.filter(function(e){
                return( e.name!=allitems[i].name)
            })
            console.log(arr)
           
        }
        )

    }
    localStorage.setItem('cart',JSON.stringify(arr))
    displayCart()

}


document.addEventListener('DOMContentLoaded', async () => {
    settotal()
    displayCart()
    deleteItem()

})
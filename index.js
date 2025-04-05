let number = document.querySelector(".count")
let symbol = document.querySelectorAll(".add-cart-btn")
symbol.forEach((text) => {
    text.addEventListener("click", () => {
        number.innerHTML++
    })

})




let offcanvasBody = document.querySelector(".offcanvas-body")

let totalPriceArr = []
let count = 0

document.addEventListener("DOMContentLoaded", () => {
    let addBtn = document.querySelectorAll(".add-cart-btn")


    addBtn.forEach((item) => {
        item.addEventListener("click", (event) => {

            let cardParent = event.target.parentElement.parentElement.parentElement.parentElement;

            let cardImg = cardParent.querySelector(".card-img-top").src;
            let cardTitle = cardParent.querySelector(".card-title").innerHTML;
            let cardPrice = cardParent.querySelector("h4 span").innerHTML;

            updateCart(cardImg, cardTitle, cardPrice)

            calculateTotal()

            let deleteimg = document.querySelectorAll(".deleteimg")
            deleteimg.forEach((icon) => {
                icon.addEventListener('click', function (event) {
                   let addCartParent = event.target.parentElement.parentElement.parentElement;
                   addCartParent.remove()

                })
            })

            
            let deleteicon = document.querySelectorAll(".deleteimg")
            deleteicon.forEach((icon) =>{
                icon.addEventListener('click',function(event){
                    let decrease = event.target.parentElement.parentElement.parentElement;
                     let price = Number( decrease.querySelector(".pr").innerHTML)
                     totalPriceArr=totalPriceArr.filter((item)=>{
                        return item !== price
                    })
                    calculateTotal()
                })
            })

            let inputbox = document.querySelectorAll(".input")
            inputbox.forEach((box)=>{
                box.addEventListener('click',function(event){
                    console.log(event.target.parentElement.parentElement.parentElement);
                     
                })
            })
            
        })
    })

    function updateCart(cardImg, cardTitle, cardPrice) {

        let template = ` <div class="d-flex p-3 align-items-center " style="width: 500px">
            <div>
                <img src=${cardImg} alt="" width="130px">
            </div>
            <div class="mx-3">
                <h5>${cardTitle}</h5>
                <h6>price = <span class ="pr">${cardPrice}</span></h6>
                <button type="button" class="btn btn-outline-success mx-2">Buy</button>
                <input class = "input" type="number" style="width: 50px;">
            </div>
            <div class=" deleteimg mx-4">
                <img src="images/delete image.png" alt="delete img" style="height: 30px; width: 30px;">
            </div>
        </div>`

        let card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("my-3")

        card.innerHTML = template;

        offcanvasBody.append(card)

        totalPriceArr.push(Number(cardPrice))
        
    }

    function calculateTotal(){
        count=0
       totalPriceArr.forEach((val)=>{
        count += val
       })
       let total = document.querySelector(".total-price");
       total.innerHTML = count
    }

})











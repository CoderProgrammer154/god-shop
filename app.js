var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons=document.getElementsByClassName("button");

var items=[{
    name: "Helmet of Mars",
    quantity: 0,
    dollar: 700,
    cents: 99,
},
{
    name: "Badge of Jupiter",
    quantity: 0,
    dollar: 350,
    cents: 0,
},{
    name: "Bracelet of Juno",
    quantity: 0,
    dollar: 6000,
    cents: 80,
},{
    name: "Comb of Minerva",
    quantity: 0,
    dollar: 4000,
    cents: 0,
}];

function updateCart(){
    let cart=0;
    for(index=0;index<items.length;index++){
        cart=cart+items[index].quantity;
    }

    cartValue.innerHTML=cart;
}

for(let i=0;i<addButtons.length;i++){
    addButtons[i].onclick=(e)=>{
        items[i].quantity++;
        updateCart();
    }
}

function updatePrice(){
    let totalPriceInCents=0;
    for(index=0;index<items.length;index++){
        totalPriceInCents=totalPriceInCents+items[index].quantity*(items[index].dollar*100+items[index].cents);
    }
        finalDollars=Math.floor(totalPriceInCents/100);
    finalCents=totalPriceInCents%100;

}

var whatsappLink="https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";


function updateWhatsappLink(){
    for(let index=0;index<items.length;index++){
            if(items[index].quantity!=0) {
        whatsappLink+="%0A"+items[index].name+"%20"+items[index].quantity;
    }

    }
        whatsappLink+="%0A"+"Total%20Price:%20$"+finalDollars+"%20"+finalCents+"c";

}

cartButton.onclick=()=>{
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink,"_blank");
};


  let data11=JSON.parse(localStorage.getItem("user"))
  sum= data11.wallet
  
  let x=document.querySelector("#wallet_balance")
  x.innerText=sum
  let data=JSON.parse(localStorage.getItem("purchase"))
  //console.log(data)
  data.forEach(element => {
    
        let div=document.createElement("div")
        div.class="voucher"
        let img=document.createElement("img")
  img.src=element.image;
  
  let h3=document.createElement("h3")
  h3.innerText=element.name;
  let price=document.createElement("p")
  price.innerText=element.price;
  
    
  
  div.append(img,h3,price)
  document.querySelector("#purchased_vouchers").append(div)
  
    });
  
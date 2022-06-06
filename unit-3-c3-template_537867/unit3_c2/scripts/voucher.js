
let getData = async() =>{
    try {
        let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
        let res = await fetch(url);
        let data = await res.json();
        append(data[0].vouchers)
    } catch (error) {
        console.log(error);
    }
}

getData();

let append = (data) =>{
    let container = document.getElementById("voucher_list");
    data.forEach((el) => {
        let div = document.createElement('div');
        div.classList = "voucher";

        let image = document.createElement('img')
        image.src = el.image;

        let h3 = document.createElement('h3');
        h3.innerText = el.name;

        let p = document.createElement('p');
        p.innerText = el.price;

        let button = document.createElement('button');
        button.innerText = "Buy"
        button.classList = "buy_voucher";
        button.addEventListener("click", function(){
            buyVoucher(el);
        })


        div.append(image, h3, p, button);
        container.append(div);
    });
}
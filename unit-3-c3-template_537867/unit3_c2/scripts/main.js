document.querySelector("#form").addEventListener("submit",getData);

var arr = [];

function getData(){
   event.preventDefault();



    var dataObj={
     nam:form.name.value,

     mail:document.querySelector("#email").value,

     address:document.querySelector("#address").value,

     num: document.querySelector("#amount").value,
    };

    //console.log(dataObj);
    arr.push(dataObj);
    localStorage.setItem("user",JSON.stringify(arr));
   
}


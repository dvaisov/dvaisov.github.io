const turarjoy = document.querySelector(".signupform");
const select = turarjoy.viloyat;
const tumanlar = turarjoy.tuman;
const address = turarjoy.manzil;


turarjoy.addEventListener("submit", event => {
        event.preventDefault();
        
        if(select.value == "------------------------" || tumanlar.value == "" || address.value == ""){
                alert("Please fill the form");
        }
        else{
            alert("Hammasi to'g'ri");
        }
})

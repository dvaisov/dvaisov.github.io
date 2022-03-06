const form = document.querySelector(".signup-form");
const fname = form.name;
const lname = form.fname;
const passport = form.passport;
const pnfl = form.pnfl;
const check = /^[0-9]{14}$/
const passport_check = /^[a-zA-Z]{2}[0-9]{7}$/


form.addEventListener("submit", e => {
        e.preventDefault();
        if ((fname.value === "" || lname.value === "") || (passport.value === "" || pnfl.value == "")) {
                alert("Please fill the form");
        }
        else {
                if (!check.test(pnfl.value)) {
                        alert("Shaxsiy raqam noto'g'ri terilgan");
                } else {
                        if (!passport_check.test(passport.value)) {
                                alert("Passport  seriasi noto'g'ri terilgan");
                        } else {
                                alert("Hammasi to'g'ri");
                        }
                }
        }

});

// const joy = document.querySelector(".turarjoy");

// joy.addEventListener("submit", e => {
//         e.preventDefault();
//         if (joy.viloyat.selectedIndex == 0 || joy.tuman.value == "" || joy.manzil.value == ""){
//                 alert("Please fill the form");
//         }
//         else{
//                 alert("Hammasi to'g'ri");
//         }
// })

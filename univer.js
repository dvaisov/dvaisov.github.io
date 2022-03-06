var States = [{
        key: 13,
        name: "Milliy",
        cities: ["Matem", "Ona tili", "Adabiyot"]
}, {
        key: 2,
        name: "Texnika",
        cities: ["Fizika", "Muhandislik", "City8", "San Diego"]
}, {
        key: 1,
        name: "Jahon",
        cities: ["Ingliz tili", "Nemis", "Fransuz"]
}];
//populate states
for (var i = 0; i < States.length; i++) {
        var opt = States[i];
        var el = document.createElement("option");
        el.textContent = opt.name;
        el.value = opt.key;
        StatesList.appendChild(el);
}
//Populate initial cities
populateCities();


//populate cities
function populateCities() {
        //clear the cities list
        document.getElementById('CitiesList').options.length = 0;
        var e = document.getElementById("StatesList");
        var selectedState = e.options[e.selectedIndex].value;
        var listOfCities;
        for (var i = 0; i < States.length; i++) {
                if (States[i].key == selectedState) {
                        listOfCities = States[i].cities;
                        break;
                }
        }
        //populate Cities DropDown menu
        for (var i = 0; i < listOfCities.length; i++) {
                var opt = listOfCities[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                CitiesList.appendChild(el);
        }
}

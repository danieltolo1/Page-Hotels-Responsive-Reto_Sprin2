
const sectionHotels = document.getElementById("main_card");
const filterCountries = document.getElementById("filtercountries");
const filterPrice = document.getElementById("filter-Price");
const filterSize = document.getElementById("filter-Sizes");


      
// FUNCION PARA RECORRER LA DATA FILTRADA 

function ForEachFiltrado (filtros1) {

    filtros1.forEach((element) => {

        let   cardHotel = document.createElement("div");
        cardHotel.setAttribute("class", "card");
        cardHotel.setAttribute("id", "cardid");
        sectionHotels.appendChild(cardHotel);
        const imageHotel = document.createElement("img");
        imageHotel.setAttribute("class", "card__image"); 
        imageHotel.setAttribute("src", element.photo);
        imageHotel.setAttribute("alt", "imagen del hotel " + element.name);
        cardHotel.appendChild(imageHotel);
});
}

// FUNCION PARA RECORRER LA DATA COMPLETA

function ForEachCompleta (data) {

    data.forEach((element) => {
        let   cardHotel = document.createElement("div");
        cardHotel.setAttribute("class", "card");
        cardHotel.setAttribute("id", "cardid");
        sectionHotels.appendChild(cardHotel);
        const imageHotel = document.createElement("img");
        imageHotel.setAttribute("class", "card__image"); 
        imageHotel.setAttribute("src", element.photo);
        imageHotel.setAttribute("alt", "imagen del hotel " + element.name);
        cardHotel.appendChild(imageHotel);
});

}



// LLAMADO DE LA API, FILTRADO DE LA MISMA GRACIAS AL .FILTER Y COMPARACION CON RESPECTO A LOS SELECTS

async function llamarHoteles (){
    const response = await fetch('https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels');
    const data = await response.json();
    
    sectionHotels.innerHTML="";
    ForEachCompleta (data);

    let filtros1 = data.filter((element, index) => {
               
        if (element.country === selectedCountry.value  &&  element.price === parseInt(selectedPrice.value)  ){
            return element ;
        }
        else{
          if(selectedPrice.value === "allPrice" && element.country === selectedCountry.value){
            console.log("paso este filtro" )
            return element ;
          }
        }
          
        
    });

    sectionHotels.innerHTML="";
    ForEachFiltrado(filtros1); 
      
}


//SE TOMA EL DATO DEL SELECT DEL PAIS

filterCountries.addEventListener('change',
  function(){
    
    window.selectedCountry = this.options[filterCountries.selectedIndex];
    console.log(selectedCountry.value);
    llamarHoteles()
  });



//SE TOMA EL DATO DEL SELECT DEL PRECIO

filterPrice.addEventListener('change',
  function(){
      
      window.selectedPrice = this.options[filterPrice.selectedIndex];
      //console.log(typeof(selectedPrice.value));
      llamarHoteles()
  });




  llamarHoteles()

const sectionHotels = document.getElementById("main_card");
const filterCountries = document.getElementById("filtercountries");





const elementoLimpieza = document.querySelector("main_card");
      


async function llamarHoteles (){
    const response = await fetch('https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels');
    const data = await response.json();
    
    
   
    let filtros1 = data.filter((element) => {
         

        if (element.country === selectedOption.text){
            //console.log("los paises son", element.name)
            return element ;
        } 

    });


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
            
            console.log(element)
            
        
            //sectionHotels.removeChild(cardHotel);
    });
    
    
}




filterCountries.addEventListener('change',
  function(){
    window.selectedOption = this.options[filterCountries.selectedIndex];
    //console.log(selectedOption.text);
    llamarHoteles()
    
  });



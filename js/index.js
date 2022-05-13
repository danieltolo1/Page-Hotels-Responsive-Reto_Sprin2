
const sectionHotels = document.getElementById("main_card");
var filterCountries = document.getElementById("filtercountries");


filterCountries.addEventListener('change',
  function(){
    var selectedOption = this.options[filterCountries.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
  });


  console.log(selectedOption)



    






async function llamarHoteles (){
    const response = await fetch('https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels');
    const data = await response.json();
   
    const filtros = data.filter((element)=>{  
        return  element.country == selectedOption.text;
       
});

    data.forEach((element) => {
       // console.log(element.name)
        

        
        const cardHotel = document.createElement("div");
        cardHotel.setAttribute("class", "card");

        const imageHotel = document.createElement("img");
        imageHotel.setAttribute("class", "card__image");
        imageHotel.setAttribute("src", element.photo);
        imageHotel.setAttribute("alt", "imagen del hotel " + element.name);

        sectionHotels.appendChild(cardHotel);
        cardHotel.appendChild(imageHotel);

    });



}

llamarHoteles()

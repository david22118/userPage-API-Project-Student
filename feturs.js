
const fetch = function () {
    $.ajax({
        method: "GET",
        url: `https://randomuser.me/api`,
        success: function (data) {
           const img= $(`<img  id="profile-pic" src =${data.results[0].picture.medium}>
           <div class="user-info"><p>${data.results[0].name.first} ${data.results[0].name.last}</p>
           <p>${data.results[0].location.country},${data.results[0].location.city}</p></div`)
           $(".user-container").append(img)
          /*  const name = $(``)
            $('.ss').empty()        
            $(".user-container").append(name)  */
        },

        error: function (xhr, text, error) {
            console.log(text)
        }

    })
}

fetch()

const quote  = function () {
    $.ajax({
        method: "GET",
        url: `
        https://api.kanye.rest`,
        success: function (data) {
        const showQuote=$(`<label id="headquote">Favorite quote:</label><p>${data.quote}</p>`) 
        $(".quote-container").append(showQuote)
       
        },

        error: function (xhr, text, error) {
            console.log(text)
        }

    })
}

quote()


const pokemon  = function () {
    $.ajax({
        method: "GET",
        url: `
        https://pokeapi.co/api/v2/pokemon-form/${Math.floor(Math.random()*150)+1}`,
        success: function (data) {
        const pokemonImage=$(`<img id="pokemon-image" src="${data.sprites.back_default}">`) 
        $(".pokemon-container").append(pokemonImage)
        const pokemonName=$(`<p id="pokemon-text ">Favorite Pokemon:${(data.name).charAt(0).toUpperCase()+(data.name).slice(1)}</p>`) 
        $(".pokemon-container").append(pokemonName)
        },

        error: function (xhr, text, error) {
            console.log(text)
        }

    })
}


pokemon()


const aboutMe  = function () {
    $.ajax({
        method: "GET",
        url: `
        https://baconipsum.com/api/?type=meat-and-filler`,
        success: function (data) {
        const AboutmeLabel=$(`<label class="meat-text">Aboout me:</label>`)
        $(".meat-container").append(AboutmeLabel)
        const meatpharse =$(`<p class="meat-text">${data[0]}</p>`)
        $(".meat-container").append(meatpharse)},

        error: function (xhr, text, error) {
            console.log(text)
        }

    })
}
aboutMe()
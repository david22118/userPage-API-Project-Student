//This is the class that will manage all your APIs
Handlebars.registerHelper('loud', function (aString) {
    return (aString.charAt(0).toUpperCase()+(aString).slice(1))
})
class APIManager {
  constructor() {
    this.data = {};
  }

  users = function () {
    $.ajax({
      method: "GET",
      url: `https://randomuser.me/api?results=7`,
      success: (data) => {
        this.data.users = data.results;
        console.log(this.data.users[0].name)
      },

      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  };
  quote = function () {
    $.ajax({
      method: "GET",
      url: `
        https://api.kanye.rest`,
      success: (data) => {
        this.data.quote = data.quote;
      },

      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  };
  pokemon = function () {
    $.ajax({
      method: "GET",
      url: `
        https://pokeapi.co/api/v2/pokemon-form/${
          Math.floor(Math.random() * 150) + 1
        }`,
      success: (data) => {
        this.data.pokemon = data;
      },

      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  };

  aboutMe = function () {
    $.ajax({
      method: "GET",
      url: `
        https://baconipsum.com/api/?type=meat-and-filler`,
      success: (data) => {
        this.data.aboutMe = data[0];
        
      },

      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  };

  getData(){
   return this


  }


}





class Renderer {
constructor(apiManager){
    this.apiManager=apiManager
}


   rendUsers(){
    const source = $('#users-template').html()
    const template = Handlebars.compile(source)
    const users= this.apiManager.data.users[0]
    const newHTML = template(users)
    $('.user-container').append(newHTML)
   
      
   }

   renderquote(){
    const source = $('#quote-template').html()
    const template = Handlebars.compile(source)
    const quote= this.apiManager.data.quote
    const newHTML = template({quote:quote})
    $('.quote-container').append(newHTML)
   

   }
   
   renderpokemon(){
    const source = $('#pokemon-template').html()
    const template = Handlebars.compile(source)
    const pokemon= this.apiManager.data.pokemon
    const newHTML = template(pokemon)
    $('.pokemon-container').append(newHTML)
   }

   renderaboutMe(){
    const source = $('#aboutme-template').html()
    const template = Handlebars.compile(source)
    const aboutme= this.apiManager.data.aboutMe
    const newHTML = template({aboutme:aboutme})
    $('.meat-container').append(newHTML)
   }

   renderFriends(){
    const source = $('#friends-template').html()
    const template = Handlebars.compile(source)
    const users= this.apiManager.data.users
    const newHTML = template({users:users})
    $('.friends-container').append(newHTML)
}
}


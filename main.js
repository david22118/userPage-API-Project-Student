
let apimanager = new APIManager()
const render= new Renderer(apimanager)
let counter=0
$("#load").on('click',function(){
apimanager.users()
apimanager.quote()
apimanager.pokemon()
apimanager.aboutMe()
})


$("#display").on('click',function(){
$('.user-container').empty()
$('.quote-container').empty()
$('.pokemon-container').empty()
$('.meat-container').empty()
$('.friends-container').empty()

render.rendUsers()
render.renderquote()
render.renderpokemon()
render.renderaboutMe()
render.renderFriends()
/* console.log(apimanager.data.pokemon) */
})

    
$("#saveuser").on('click',function(){  
counter++
/* localStorage.clear() */
/* saveduser=apimanager.data */


/* const users = JSON.stringify(apimanager) */
/* const name= JSON.stringify(apimanager.data.users[0].name.first) */
 let objName=apimanager.data.users[0].name.first
console.log( objName) 

localStorage[objName]=JSON.stringify(apimanager.data)
const userName=$(`<option value="${objName}">${apimanager.data.users[0].name.first} ${apimanager.data.users[0].name.last}</option>`)
$('.loaduser').append(userName)
})

$('select.loaduser').on('click',function(){
   
 let saveduserval =$(this).children("option:selected").val()
 console.log(saveduserval) 
 apimanager.data=JSON.parse(localStorage[saveduserval])
/* console.log(apimanager.data.users[0].name.first) */
 /*  let storageData = JSON.parse(localStorage.counter)   
 console.log(storageData) */
 /* console.log(apimanager.data)    */
/* 
 let desirableObj=(storageData.data.users).find(u=> u.name.first==savedUser)
 let desirableObjIndex=(storageData.data.users).indexOf(desirableObj)
 console.log(desirableObjIndex)
 
     let temp = (storageData.data.users)[desirableObjIndex];
    (storageData.data.users)[desirableObjIndex] = (storageData.data.users)[0];
    (storageData.data.users)[0] = temp 
  console.log(desirableObjIndex)
 console.log( apimanager.data)
 console.log(storageData) */
 /* apimanager.data=storageData.data  */
/* ; */
/*  apimanager=users.data */

$('.user-container').empty()
$('.quote-container').empty()
$('.pokemon-container').empty()
$('.meat-container').empty()
$('.friends-container').empty()   
/* apimanager= susers */
/* console.log(.users[0].name.first) */
render.rendUsers()  
render.renderquote()
render.renderpokemon()
render.renderaboutMe()
render.renderFriends()   

    })
    
    



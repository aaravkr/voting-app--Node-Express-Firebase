function addrestaurant(){
    var database = firebase.database();
    var restaurantRef = database.ref('/restaurants');
     
    var restaurantInput = document.getElementById('addrestaurant');
    var restaurantName = restaurantInput.value;
    restaurantInput.value = ' ';
  restaurantRef.push({
      name: restaurantName,
      votes:0
    })
            .then(function(){
                window.location.reload();
               })
               .catch(function(error){
                   console.log(error);
               })
}

function upvote(key){
var database = firebase.database();
var user = firebase.auth().currentUser;
var userUid = user.uid;
var name = user.displayName;
var restaurantvotesRef = database.ref('/restaurants')
                                 .child(key)
                                 .child('/votes')
                                 .child(userUid);

restaurantvotesRef.set(name)      
                 .then(function(){
                  window.location.reload();
                  })
                  .catch(function(err){
                      console.log(err);
                  })

}

function downvote(key){
console.log('the key in the voting auth is', key)
var database = firebase.database();
var user = firebase.auth().currentUser;
var userUid = user.uid;
var name = user.displayName;

var restaurantvotesRef = database.ref('/restaurants')
                                 .child(key)
                                 .child('/votes')
                                 .child(userUid)
                                 .remove()
                                 .then(function(){
                                 window.location.reload();
                              })
                                 .catch(function(err){
                                 console.log(err);
                              })


}
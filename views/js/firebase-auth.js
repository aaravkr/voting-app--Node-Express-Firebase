/* ========================
  Variables
======================== */

const signInButton = document.getElementById('sign-in');
const signOutButton = document.getElementById('sign-out');

/* ========================
  Event Listeners
======================== */
signInButton.addEventListener('click',signIn);
signOutButton.addEventListener('click',signOut);
firebase.auth().onAuthStateChanged(handleAuthStateChanged);

/* ========================
  Functions
======================== */
function signIn(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
     }   
    function signOut(){
       firebase.auth().signOut();
     }

   function handleAuthStateChanged(user){
       if(user){
      console.log(user);
           signInButton.setAttribute("hidden","true");
           signOutButton.removeAttribute("hidden");
           var photo = user.photoURL;
           document.getElementById('google-pic')
                    .setAttribute('src', photo);
   }
       else{
           console.log("no user");
           signOutButton.setAttribute("hidden","true");
           signInButton.removeAttribute("hidden");
           document.getElementById('google-pic')
                    .setAttribute('src', '');
           
       }
   }




// function ischeckedIn(){
//     firebase.auth().onAuthStateChanged(function(user){
//         if(user){
//             console.log('user signed in'+ user.displayName);
//             var photoURl= user.photoURL;
//             document.getElementById('google-pic')
//                      .setAttribute('src', photoURl);
//             document.getElementById('signIn')
//                     .setAttribute('style', 'display:none')
//             document.getElementById('signOut')
//                     .setAttribute('style', 'display:inline-block')
        
//          }
//         else{
//             document.getElementById('signIn')
//             .setAttribute('style', 'display:Inline-block')
//     document.getElementById('signOut')
//             .setAttribute('style', 'display:none')

//         }
//     })

// }
// function signOut(){
//     firebase.auth().signOut();
//     document.getElementById('google-pic')
//     .setAttribute('src', '');
//     ischeckedIn();


// }
// function signInWithGoogle(){
//     var googleAuth = new firebase.auth.GoogleAuthProvider;
//     firebase.auth().signInWithPopup(googleAuth)
//      .then(function(data){  
//          console.log(data);  
//         //  var photo = data.user.photoURl;
//          var idtoken = data.credential.idToken;

//         //  var email = data.user.email;
//         //  var username = data.user.displayName;
//         //  console.log(email);
//         ischeckedIn();
//      })
//      .catch(function(error){
//          console.log(error); 
//          ischeckedIn();
//      })
 
     

// }
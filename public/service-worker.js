this.addEventListener('install', (evt) => {
    console.log(`sw installé à ta race de pute ${new Date().toLocaleTimeString()}`);
 
});
 
this.addEventListener('activate', (evt) => {
    console.log(`sw activé à ${new Date().toLocaleTimeString()}`); 
});


this.addEventListener('fetch', (evt) => {
    console.log("fetch blabla");
});


this.registration.showNotification("Notification du SW", {
    body:"je suis une notification dite persistante",
  
    // 7.4 Options de notifications grâce aux actions
    actions:[
        {action:"accept", title:"accepter"},
        {action: "refuse", title: "refuser"}
    ]
})
 
// 7.4 Options de notifications grâce aux actions
// Ecouteur au clic d'un des deux boutons de la notification
this.addEventListener("notificationclick", evt => {
    console.log("notificationclick evt", evt);
    if(evt.action === "accept"){
        console.log("vous avez accepté");
    } else if(evt.action === "refuse"){
        console.log("vous avez refusé");
    } else{
        console.log("vous avez cliqué sur la notification (pas sur un bouton)");
    }
})
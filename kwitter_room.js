user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";
      function addroom() {
        room_name = document.getElementById("room_name").value;

       localStorage.setItem("Roomname",room_name);
   
       window.location = "Kwitter_room.html";
 }
function set_username(destination){
    // Get input from user
    let username = prompt("Please enter a username");
    
    // Check if valid username
    if(username != null && username.length > 0){
        // Save username as cookie
        document.cookie = "username=" + username + ";path=/";
        // Change page to starting page
        location = destination;
    }else{
        // If no username entered end interaction
        alert("Invalid Username!");
    }
}

function get_username(){
    // Get decoded cookie string
    let cookie = decodeURIComponent(document.cookie);
    // Split cookie string into parts
    let parts = cookie.split(';');
    // Check each part for username
    for(let i = 0; i < parts.length; i++){
        let name = "username=";
        // Copy part
        let part = parts[i];
        // // Find start of variable
        // while(part.charAt(0) == ' '){
        //     part = part.substring(1);
        // }
        // Check if username
        if(part.indexOf(name) == 0){
            // Return value of username
            return part.substring(name.length, part.length);
        }
    }
    return "null";
}

function fill_username(id){
    // Get username
    let username;
    // Make sure user has username (edge case)
    while(true){
        // Get current username value
        username = get_username();
        if(username.length < 1 || username == "null"){
            username = set_username(location);
        }else{
            break;
        }
    }
    // Get array of elements of class
    const members = document.getElementsByClassName(id);
    // Set all elements of class to username
    for(let i = 0; i < members.length; i++){
        members[i].innerHTML = username;
    }
}
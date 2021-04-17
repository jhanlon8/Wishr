/**
 * loginScript
 * When this script is called on a "submit" event, the script will retrieve the
 * input username and password, and pass the credentials to background.js to be authenticated by the 
 * server.
 * 
 * If the data is authenticated successfully, send a login successful message to console.
 */
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password){
        chrome.runtime.sendMessage({message: 'login', payload: {username, password}}, function (response){
            if (response === 'success'){
                //Change to main user page here <- TO-DO
                console.log('Login Successful');
            }
            else {
                console.log("Login Failed");
            }
        });
        
    }
    else{
        console.log("Please Enter a Username and Password");
    }
})
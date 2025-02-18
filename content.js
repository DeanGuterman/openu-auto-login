window.addEventListener('load', function(){
    chrome.storage.sync.get('userId', function(data) {
        if (data.userId) {
            const userID = data.userId;

            const idField = document.querySelector("#p_mis_student");
            if (idField){
                idField.value = userID
                console.log("User ID autofilled.");
            } else{
                console.warn("User ID input field not found.");
            }

            const loginButton = document.querySelector("input[type='submit']");
            if (loginButton){
                loginButton.click();
                console.log("Login button clicked.");
            } else {
                console.warn("Login button not found.");
            }
        }
    });
});
window.addEventListener('load', function() {
    chrome.storage.sync.get('userId', function(data) {
        if (data.userId) {
            const userID = data.userId;

            // Autofill the user ID field
            const idField = document.querySelector("#p_mis_student");
            if (idField) {
                idField.value = userID;
                console.log("User ID autofilled.");
            } else {
                console.warn("User ID input field not found.");
            }

            // Autofill the username and password fields, then trigger the input event
            const userField = document.querySelector('#p_user');
            const passField = document.querySelector('#p_sisma');
            if (userField && passField) {

                // Trigger the 'input' event to notify the browser
                userField.dispatchEvent(new Event('focus', { bubbles: true }));
                userField.dispatchEvent(new Event('blur', { bubbles: true }));
                userField.dispatchEvent(new Event('input', { bubbles: true }));
                userField.dispatchEvent(new Event('change', { bubbles: true }));

                passField.dispatchEvent(new Event('focus', { bubbles: true }));
                passField.dispatchEvent(new Event('blur', { bubbles: true }));
                passField.dispatchEvent(new Event('input', { bubbles: true }));
                passField.dispatchEvent(new Event('change', { bubbles: true }));

                console.log("Input and change events triggered for username and password.");

                // Add a delay before clicking the login button
                const loginButton = document.querySelector("input[type='submit']");
                if (loginButton) {
                    setTimeout(function() {
                        loginButton.click();
                        console.log("Login button clicked.");
                    }, 3000); // 3 seconds delay
                } else {
                    console.warn("Login button not found.");
                }
            } else {
                console.warn("Username or password input field not found.");
            }
        }
    });
});

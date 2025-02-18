document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form fields and save button
    const usernameField = document.getElementById("userName");
    const passField = document.getElementById("userPass");
    const idField = document.getElementById("userId");
    const saveButton = document.getElementById("save");
    const formContainer = document.getElementById("form-container");
    const successMessage = document.getElementById("success-message");

    // Check if all elements exist
    if (!usernameField || !passField || !idField || !saveButton) {
        console.error("One or more elements not found");
        return;
    }

    // Load saved credentials from Chrome storage
    chrome.storage.sync.get(['userName', 'userPass', 'userId'], function(data) {
        if (data.userName) usernameField.value = data.userName;
        if (data.userPass) passField.value = data.userPass;
        if (data.userId) idField.value = data.userId;
    });

    // Save credentials when the save button is clicked
    saveButton.addEventListener("click", function() {
        const userName = usernameField.value;
        const userPass = passField.value;
        const userId = idField.value;

        // Store credentials in Chrome storage
        chrome.storage.sync.set({ userName, userPass, userId }, function() {
            formContainer.style.display = "none";
            successMessage.style.display = "block";
            successMessage.innerHTML = "Credentials saved successfully!";
            
            setTimeout(function() {
                window.close();
            }, 2000);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const usernameField = document.getElementById("userName");
    const passField = document.getElementById("userPass");
    const idField = document.getElementById("userId");
    const saveButton = document.getElementById("save");

    if (!usernameField || !passField || !idField || !saveButton) {
        console.error("One or more elements not found");
        return;
    }

    chrome.storage.sync.get(['userName', 'userPass', 'userId'], function(data) {
        if (data.userName) usernameField.value = data.userName;
        if (data.userPass) passField.value = data.userPass;
        if (data.userId) idField.value = data.userId;
    });

    saveButton.addEventListener("click", function() {
        console.log("save button clicked");
        const userName = usernameField.value;
        const userPass = passField.value;
        const userId = idField.value;

        chrome.storage.sync.set({ userName, userPass, userId }, function() {
            alert("Credentials saved successfully!");
        });
    });
});

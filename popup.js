document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById("userId");
    const saveButton = document.getElementById("save");

    if (!inputField) {
        console.error("Element with ID 'userId' not found");
        return;
    }

    if (!saveButton) {
        console.error("Element with ID 'save' not found");
        return;
    }

    chrome.storage.sync.get('userId', function(data) {
        if (data.userId) {
            inputField.value = data.userId;
        }
    });

    saveButton.addEventListener("click", function() {
        console.log("save button clicked");
        const userID = inputField.value;
        if (userID) {
            chrome.storage.sync.set({userId: userID}, function() {
                alert("User ID saved successfully!");
            });
        } else {
            console.log("no userID");
        }
    })
});

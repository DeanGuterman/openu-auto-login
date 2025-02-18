document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById("user-id");
    const saveButton = document.getElementById("save");

    chrome.storage.sync.get('userId', function(data) {
        if (data.userId) {
            inputField.value = data.userId;
        }
    });

    saveButton.addEventListener("click", function() {
        const userID = inputField.value.trim();
        if (userID) {
            chrome.storage.sync.set({ userId: userID }, function() {
                alert("User ID saved successfully!");
            });
        }
    })
});

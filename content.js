window.addEventListener("load", function () {
    // Retrieve saved credentials from Chrome storage
    chrome.storage.sync.get(["userName", "userPass", "userId"], function (data) {
      if (data.userName && data.userPass && data.userId) {
        const userName = data.userName;
        const userPass = data.userPass;
        const userID = data.userId;
  
        // Get references to the input fields
        const userField = document.querySelector("#p_user");
        const passField = document.querySelector("#p_sisma");
        const idField = document.querySelector("#p_mis_student");
  
        // Autofill fields if they exist
        if (userField) {
          userField.value = userName;
          console.log("Username autofilled.");
        } else {
          console.warn("Username input field not found.");
        }
        if (passField) {
          passField.value = userPass;
          console.log("Password autofilled.");
        } else {
          console.warn("Password input field not found.");
        }
        if (idField) {
          idField.value = userID;
          console.log("User ID autofilled.");
        } else {
          console.warn("User ID input field not found.");
        }
  
        // Trigger login by clicking the submit button
        const loginButton = document.querySelector("input[type='submit']");
        if (loginButton) {
          loginButton.click();
          console.log("Login button clicked.");
        } else {
          console.warn("Login button not found.");
        }
      } else {
        console.warn("Haven't received credentials from the extension.");
      }
    });
  });
  
window.addEventListener("load", function () {
  chrome.storage.sync.get(["userName", "userPass", "userId"], function (data) {
    if (data.userName && data.userPass && data.userId) {
      const userName = data.userName;
      const userPass = data.userPass;
      const userID = data.userId;

      const userField = document.querySelector("#p_user");
      const passField = document.querySelector("#p_sisma");
      const idField = document.querySelector("#p_mis_student");

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
        console.warn("Username input field not found.");
      }
      if (idField) {
        idField.value = userID;
        console.log("User ID autofilled.");
      } else {
        console.warn("User ID input field not found.");
      }

      // Autofill the username and password fields, then trigger the input event
      const loginButton = document.querySelector("input[type='submit']");
      if (loginButton) {
        loginButton.click();
        console.log("Login button clicked.");
      } else {
        console.warn("Login button not found.");
      }
    } else {
      console.warn("Haven't recieved credentials from the extension.");
    }
  });
});

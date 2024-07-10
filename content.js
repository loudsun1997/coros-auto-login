(function() {
	console.log("Content script loaded");
	const loginPageURL = "https://training.coros.com/login";
	const currentURL = window.location.href;
  
	console.log("Current URL:", currentURL);
  
	if (currentURL.startsWith(loginPageURL)) {
	  console.log("Coros Training Login Page Detected");
  
	  // Load the auto login setting
	  chrome.storage.sync.get(['autoLoginEnabled'], function(result) {
		const autoLoginEnabled = result.autoLoginEnabled || false;
		console.log("Auto login enabled:", autoLoginEnabled);
  
		function checkAndLogin(observer) {
		  console.log("Checking checkboxes...");
		  const checkboxes = document.querySelectorAll(".arco-checkbox-target");
		  if (checkboxes.length > 0) {
			console.log("Checkboxes found:", checkboxes.length);
			checkboxes.forEach((checkbox, index) => {
			  if (!checkbox.checked) {
				checkbox.checked = true;
				console.log(`Checkbox ${index + 1} checked`);
				// Trigger a change event if necessary
				const event = new Event('change', { bubbles: true });
				checkbox.dispatchEvent(event);
			  }
			});
			if (autoLoginEnabled) {
			  const loginButton = document.querySelector(".arco-btn[type='submit']");
			  if (loginButton) {
				console.log("Login button found, clicking...");
				observer.disconnect(); // Disconnect the observer before clicking the login button
				loginButton.click();
				console.log("Observer disconnected after clicking login");
				// Add a timeout or wait for some time to see if it gets redirected again
				setTimeout(() => {
				  console.log("Checking URL after login attempt: ", window.location.href);
				}, 3000); // 3 seconds delay
			  } else {
				console.log("Login button not found");
			  }
			}
		  } else {
			console.log("Checkboxes not found");
		  }
		}
  
		// Initial check
		const observer = new MutationObserver((mutations, observer) => {
		  console.log("Mutation observed");
		  checkAndLogin(observer);
		});
  
		console.log("Starting MutationObserver");
		observer.observe(document.body, {
		  childList: true,
		  subtree: true
		});
  
		// Initial check without observer
		checkAndLogin(observer);
	  });
	} else {
	  console.log("Not on the login URL");
	}
  })();
  
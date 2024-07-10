document.addEventListener('DOMContentLoaded', function() {
	const toggleLoginCheckbox = document.getElementById('toggle-login');
  
	// Load the stored value and set the checkbox state
	chrome.storage.sync.get(['autoLoginEnabled'], function(result) {
	  toggleLoginCheckbox.checked = result.autoLoginEnabled || false;
	});
  
	// Save the checkbox state when it's changed
	toggleLoginCheckbox.addEventListener('change', function() {
	  chrome.storage.sync.set({ autoLoginEnabled: toggleLoginCheckbox.checked });
	});
  });
  
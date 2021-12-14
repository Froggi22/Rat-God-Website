/* jshint esversion: 6 */

let collapsible = document.getElementsByClassName("collapsible"); // Fetch all collapsible quesion-buttons

for (let i = 0; i < collapsible.length; i++) { // Iterate through all collapsibles
	collapsible[i].addEventListener("click", function() { // Add click event listeners on each one
		this.classList.toggle("active");
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

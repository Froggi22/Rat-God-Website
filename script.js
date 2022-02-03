/* jshint esversion: 6 */ // For validation

/* ===== FAQ Collapsibles ===== */
const collapsible = document.getElementsByTagName("summary"); // Fetch all collapsible summaries
for (let elementnr = 0; elementnr < collapsible.length; elementnr++) { // Iterate through all collapsibles
	collapsible[elementnr].addEventListener("click", function() { // Add click event listeners on each one
		this.classList.toggle("faq-active"); // Add the class "faq-active" on clicked collapsable
	});
}

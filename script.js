"use strict"

/* ===== FAQ Collapsibles ===== */
const summary = document.getElementsByTagName("summary") // Fetch all summaries
for (let elementnum = 0; elementnum < summary.length; elementnum++) { // Iterate through all summaries
	summary[elementnum].addEventListener("click", function() { // Add click event listeners on each one
		this.classList.toggle("faq-active") // Add the class "faq-active" on the clicked summary
	});
}

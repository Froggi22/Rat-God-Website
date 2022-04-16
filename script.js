"use strict"

/* FAQ Collapsibles */
const summary = document.getElementsByTagName("summary")
for (let i = 0; i < summary.length; i++) {
	summary[i].addEventListener("click", () => {
		summary[i].classList.toggle("faq-active")
	})
}

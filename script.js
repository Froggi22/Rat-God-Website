/* jshint esversion: 6 */ // For validation

/* ===== Variables / Links ===== */
const discordInviteLink = "https://discord.com/invite/kg7VfRQ9Xw";
const botInviteLink = "https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=274877958208&scope=bot%20applications.commands";
const tarkovWikiLink = "https://escapefromtarkov.fandom.com/wiki/Escape_from_Tarkov_Wiki";
const githubRatGodLink = "https://github.com/Froggi22/Rat-God";

function insertHref (classname, URL, URLExtra="") {
	const classElements = document.getElementsByClassName(classname); // Find all elements with classname
	for (let elementnum = 0; elementnum < classElements.length; elementnum++) {
		classElements[elementnum].href = `${URL}${URLExtra}`.trim(); // Set each classElement with a href attribute with URL as link
	}
}

insertHref("discordInviteLink", discordInviteLink);
insertHref("bot-invite-link", botInviteLink);
insertHref("tarkovWikiLink", tarkovWikiLink);
insertHref("githubRatGodLink", githubRatGodLink);
insertHref("githubRatGodWebsiteLink", githubRatGodLink, "-Website");
insertHref("githubRatGodContributingLink", githubRatGodLink, "#contributing");
insertHref("githubRatGodWebsiteContributingLink", githubRatGodLink, "-Website#contributing");
// Oh god these class names are long

/* ===== FAQ Collapsibles ===== */
const collapsible = document.getElementsByTagName("summary"); // Fetch all collapsible summaries
for (let elementnr = 0; elementnr < collapsible.length; elementnr++) { // Iterate through all collapsibles
	collapsible[elementnr].addEventListener("click", function() { // Add click event listeners on each one
		this.classList.toggle("faq-active"); // Add the class "active" on clicked collapsable
	});
}

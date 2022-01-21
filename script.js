/* jshint esversion: 6 */

/* ===== Variables / links ===== */
const discordInviteLink = "https://discord.com/invite/kg7VfRQ9Xw";
const botInviteLink = "https://discord.com/api/oauth2/authorize?client_id=864572952275714059&permissions=2147600448&scope=bot%20applications.commands";

const discordInviteLinkElement = document.getElementsByClassName("discordInviteLink"); // Discord Invite Link
for (let element = 0; element < discordInviteLinkElement.length; element++) {
	discordInviteLinkElement[element].href = discordInviteLink;
};
const botInviteLinkElement = document.getElementsByClassName("botInviteLink"); // Bot Invite Link
for (let element = 0; element < botInviteLinkElement.length; element++) {
	botInviteLinkElement[element].href = botInviteLink;
};

/* ===== FAQ Collapsibles ===== */
const collapsible = document.getElementsByClassName("collapsible"); // Fetch all collapsible quesion-buttons
for (let element = 0; element < collapsible.length; element++) { // Iterate through all collapsibles
	collapsible[element].addEventListener("click", function() { // Add click event listeners on each one
		this.classList.toggle("active");
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

const adminCardModal = document.getElementById("admin-card-modal");
const adminCardModalBtn = document.getElementById("admin-card-modal-close-btn");
const adminCardModalContent = adminCardModal.querySelector(".admin-modal-wrapper");
const addNewCardBtn = document.getElementById("add-new-card-btn");

addNewCardBtn.addEventListener("click", () => {
	adminCardModal.classList.add("show");
	html.classList.add("_fixed");
	body.classList.add("_fixed");
});

adminCardModalBtn.addEventListener("click", (e) => {
	e.stopPropagation;
	adminCardModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

adminCardModal.addEventListener("click", (e) => {
	e.stopPropagation();
	adminCardModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

adminCardModalContent.addEventListener("click", (e) => e.stopPropagation());

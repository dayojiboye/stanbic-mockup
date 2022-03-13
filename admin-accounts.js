const adminAccountsModal = document.getElementById("admin-accounts-modal");
const adminAccountsModalBtn = document.getElementById("accounts-modal-close-btn");
const adminCardModalWrapper = document.getElementById("admin-accounts-modal-wrapper");
const addNewAccountBtn = document.getElementById("add-new-account-btn");

addNewAccountBtn.addEventListener("click", () => {
	adminAccountsModal.classList.add("show");
	html.classList.add("_fixed");
	body.classList.add("_fixed");
});

adminAccountsModalBtn.addEventListener("click", (e) => {
	e.stopPropagation;
	adminAccountsModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

adminAccountsModal.addEventListener("click", (e) => {
	e.stopPropagation();
	adminAccountsModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

adminCardModalWrapper.addEventListener("click", (e) => e.stopPropagation());

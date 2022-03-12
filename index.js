const registerForm = document.getElementById("register-form");
const transferBtn = document.getElementById("transfer-btn");
const confirmTransferModal = document.getElementById("confirm-transfer-modal");
const confirmTransferModalContent = confirmTransferModal.querySelector(".tm-content");
const confirmTransferModalCloseBtn = document.getElementById("tm-close-btn");
const transferSuccessModalCloseBtn = document.getElementById("tm-success-close-btn");
const body = document.body;
const html = document.documentElement;
const transferSuccessModal = document.getElementById("transfer-success-modal");
const transferSuccessModalContent = transferSuccessModal.querySelector(".tm-content");
const confirmTransferButton = document.getElementById("confirm-transfer-button");
const transferSuccessCloseBtn = document.getElementById("transfer-success-close");
const transactionForm = document.getElementById("tm-transaction-form");

registerForm.addEventListener("submit", (e) => e.preventDefault());

transactionForm.addEventListener("submit", (e) => e.preventDefault());

transferBtn.addEventListener("click", () => {
	confirmTransferModal.classList.add("show");
	html.classList.add("_fixed");
	body.classList.add("_fixed");
});

confirmTransferModal.addEventListener("click", (e) => {
	e.stopPropagation();
	confirmTransferModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

transferSuccessModal.addEventListener("click", (e) => {
	e.stopPropagation();
	transferSuccessModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

confirmTransferModalContent.addEventListener("click", (e) => e.stopPropagation());

transferSuccessModalContent.addEventListener("click", (e) => e.stopPropagation());

confirmTransferModalCloseBtn.addEventListener("click", (e) => {
	e.stopPropagation;
	confirmTransferModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

transferSuccessModalCloseBtn.addEventListener("click", (e) => {
	e.stopPropagation;
	transferSuccessModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

confirmTransferButton.addEventListener("click", () => {
	confirmTransferModal.classList.remove("show");
	transferSuccessModal.classList.add("show");
	html.classList.add("_fixed");
	body.classList.add("_fixed");
});

transferSuccessCloseBtn.addEventListener("click", (e) => {
	e.stopPropagation;
	transferSuccessModal.classList.remove("show");
	html.classList.remove("_fixed");
	body.classList.remove("_fixed");
});

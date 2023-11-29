const addParty = document.getElementById('add');
const modalContainer = document.getElementById('modalContainer');
const closeModal = document.getElementById('close');
const submit = document.getElementById('submit');

addParty.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});


//take data from form to create a new party element
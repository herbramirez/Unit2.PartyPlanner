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

const getEvents = async () => {
    
    const events = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-herbert/events');
    const jsonEventsResponse = await events.json();
    console.log("JSON RESPONSE:", jsonEventsResponse.data[1]); //returns first element of the array
}
getEvents();

const createEvent = (events) => {

    const eventList = [];
  

}
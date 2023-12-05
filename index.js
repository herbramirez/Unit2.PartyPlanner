const addParty = document.getElementById('add');
const modalContainer = document.getElementById('modalContainer');
const closeModal = document.getElementById('close');
const submit = document.getElementById('submit');

//Need to add Delete button to delete Party Element

addParty.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

submit.addEventListener('click', () => {
    //Add to the API
    console.log("Submit Button Clicked")

});


//Get LIST dom element
const eventList = document.getElementById('eventList');

eventList.innerHTML =
`<li>name<li>
<li>Date<li>
<li>Location<li>
<li>Description<li>`;
///

const updateContainer = (eventProperties) => {
    const container = document.getElementById("eventList");

    property.forEach((prop) => {
        const nameElement = `Name: ${event.name}`
    })

}

//take data from form to create a new party element


//update event to match api



const getEvents = async () => {
    
    const events = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-herbert/events');
    const jsonData = await events.json();
    const eventData = jsonData.data

   // console.log("JSON Event Objects:", eventData);

    const event = []; //Store data locally

    
    for(i = 0; i < eventData.length; i++) {
        const property = eventData[i];
        console.log("GET NAME:", property.name);
        console.log("GET DATE:", property.date);
        console.log("GET LOCATION:", property.location);
        console.log("GET DESCRIPTION:", property.description);


        //push api properties into a the event object
        event.push({
            name: property.name,
            date: property.date,
            location: property.location,
            description: property.description
        });

       
     }
     
     console.log("LOCAL EVENT ARRAY:", event)
 }
getEvents();


//create a party
const createEvent = (events) => {

    const eventList = [];
  

}


//Delete a party
const deleteParty = () => {

}
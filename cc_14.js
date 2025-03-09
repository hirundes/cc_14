//Task 1 - Base Structure Created
//HTML Content - Setting up ticketContainer

//Task 2 - Support Tickets Dynamic Addition
function createTicketCard(name, issue, priority) {
    const ticketContainer = document.getElementById("ticketContainer"); 
    const ticketCard = document.createElement("div");
    ticketCard.setAttribute("class", "ticket-card");
    ticketCard.setAttribute("data-priority", priority); //For Task 3 updateTicketCards

    const customerName = document.createElement("h3"); //Creating customerName and Appending it to the card
    customerName.textContent = name;
    ticketCard.appendChild(customerName);

    const issueDescription = document.createElement("p"); //Creating issueDescription and Appending it to the card
    issueDescription.textContent = issue;
    ticketCard.appendChild(issueDescription);

    const priorityDescription = document.createElement("p"); //Creating priorityDescription and Appending it to the card
    priorityDescription.textContent = priority;
    ticketCard.appendChild(priorityDescription);

    const resolveButton = document.createElement("button"); //Creating resolve button and making it work
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", (event) => { 
        event.stopPropagation();  //Task 4 - Child is only getting triggered not the parent so the message does not show    
        
        ticketContainer.removeChild(ticketCard); });
 
    ticketCard.appendChild(resolveButton); //Appending remove button


ticketContainer.appendChild(ticketCard); //Appending ticketCard to the ticket container
enableInlineEditing(ticketCard); //Calling Task 5 code
};

createTicketCard("Michael Smith", "Issue Description 1", "High") //Test Case 1
createTicketCard("John Smith", "Issue Description 2", "Low") //Test Case 1

//Task 3 - Highlighting High Priority Tickets
function updatedTicketCards() {
    const ticketCardsNodeList = document.querySelectorAll("[data-priority='High']");//Using document.querySelectorAll to select all cards with High Priority
    const ticketCardArray = Array.from(ticketCardsNodeList)
    ticketCardArray.forEach(ticket => {
        ticket.style.backgroundColor = "red";
        ticket.style.color = "white";
    });
};

updatedTicketCards();

//Task 4 - Support Ticket Resolution with Event Bubbling
function eventListenerResolve() {  //Created function eventListenerResolve so it can be called at the end
    const ticketContainer = document.getElementById("ticketContainer")  //
    ticketContainer.addEventListener("click", function(event) {   //Attaching event listeners to ticket container
        console.log("Ticket Card Clicked"); //Logged when card is clicked
    })
}

eventListenerResolve(); //Calling for eventListenerResolve

//Task 5 - Inline Editing for Support Tickets
function enableInlineEditing (card) {
    const nameHeading = card.querySelector("h3") //Selecting where the card is 
    const positionPara = card.querySelector("p")
    let resolveBtn = card.querySelector("button.resolve-btn") //Remove button function is not getting effected

card.addEventListener("dblclick", function() { //Detecting double clicking of card and creating inputs and save button
        const nameInput = document.createElement("input");        
        nameInput.type = "text";        
        nameInput.value = nameHeading.textContent;   

        const positionInput = document.createElement("input");        
        positionInput.type = "text";       
        positionInput.value = positionPara.textContent; 
           
        const priorityInput = document.createElement("input"); 
        priorityInput.type = "text";
        priorityInput.value = "Priority:";
        
        const saveBtn = document.createElement("button"); 
        saveBtn.textContent = "Save";

        card.innerHTML = "";    //Adding it to the card.
        card.appendChild(nameInput);     
        card.appendChild(positionInput);
        card.appendChild(priorityInput);
        card.appendChild(saveBtn);

        saveBtn.addEventListener("click", function() { //Clicking save button adds the details and saves    
            nameHeading.textContent = nameInput.value;       
            positionPara.textContent = positionInput.value;
            const priorityPara = document.createElement("p");
            priorityPara.textContent = priorityInput.value

            card.innerHTML = "";           
              card.appendChild(nameHeading);      
              card.appendChild(positionPara);
              card.appendChild(priorityPara);

                removeBtn = document.createElement("button");   //Making sure remove function is not disturbed.
                removeBtn.textContent = "Remove";
                removeBtn.classList.add("remove-btn");
                removeBtn.addEventListener("click", (event) => {    
                    event.stopPropagation();  
                    card.remove();
                });
                card.appendChild(removeBtn);
        });
    });
};







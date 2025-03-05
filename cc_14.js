//Task 1 - Base Structure Created
//HTML Content - Setting up ticketContainer

//Task 2 - Support Tickets Dynamic Addition
function createTicketCard(name, position) {
    const ticketContainer = document.getElementById("ticketContainer"); 
    const ticketCard = document.createElement("div");
    ticketCard.setAttribute("class", "ticket-card");

    const customerName = document.createElement("h3"); //Creating employeeName and Appending it to the card
    customerName.textContent = name;
    ticketCard.appendChild(customerName);

    const issueDescription = document.createElement("p"); //Creating employeePosition and Appending it to the card
    issueDescription.textContent = position;
    ticketCard.appendChild(issueDescription);

    const resolveButton = document.createElement("button"); //Creating remove button and making it work
    resolveButton.textContent = "Remove";
    resolveButton.addEventListener("click", (event) => {     
        event.stopPropagation();  //Child is only getting triggered not the parent so the message does not show
        ticketCard.remove(); });
 
    ticketCard.appendChild(resolveButton); //Appending remove button

    ticketContainer.appendChild(ticketCard); //Appending employee card to the employee container
}




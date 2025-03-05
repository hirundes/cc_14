//Task 1 - Base Structure Created
//HTML Content - Setting up ticketContainer

//Task 2 - Support Tickets Dynamic Addition
function createTicketCard(name, issue, priority) {
    const ticketContainer = document.getElementById("ticketContainer"); 
    const ticketCard = document.createElement("div");
    ticketCard.setAttribute("class", "ticket-card");

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
        ticketCard.remove(); });
 
    ticketCard.appendChild(resolveButton); //Appending remove button

    ticketContainer.appendChild(ticketCard); //Appending ticketCard to the ticket container
}
createTicketCard("Michael Smith", "Issue Description 1", "High Priority") //Test Case 1
createTicketCard("John Smith", "Issue Description 2", "Low Priority") //Test Case 1




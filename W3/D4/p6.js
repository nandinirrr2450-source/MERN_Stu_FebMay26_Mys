//Assignment 1: Support Ticket Queue Processor
// Initial 5 tickets
let tickets = [
    { id: "T101", priority: "LOW", resolved: false },
    { id: "T102", priority: "HIGH", resolved: false },
    { id: "T103", priority: "MEDIUM", resolved: true },
    { id: "T104", priority: "LOW", resolved: false },
    { id: "T105", priority: "HIGH", resolved: true }
];

console.log("Initial Tickets:", tickets);


// Adding new urgent ticket to the front
let urgentTicket = { id: "T106", priority: "HIGH", resolved: false };
tickets.unshift(urgentTicket);


//adding two normal tickets to the end
tickets.push(
    { id: "T107", priority: "MEDIUM", resolved: false },
    { id: "T108", priority: "LOW", resolved: false }
);

console.log("After Adding Tickets:", tickets);


// Remove first ticket 
let currentTicket = tickets.shift();


//Remove last ticket
let droppedTicket = tickets.pop();


//pending array (unresolved tickets)
let pending = tickets.filter(ticket =>ticket.resolved === false);


//pendingIds array (only ticket IDs)
let pendingIds = pending.map(ticket =>ticket.id);



console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending Ticket IDs:", pendingIds);
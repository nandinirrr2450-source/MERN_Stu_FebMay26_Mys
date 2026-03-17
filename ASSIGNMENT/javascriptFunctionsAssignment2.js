//Assignment 2: Build a Compact Invoice Using Rest + Default
function invoice(gstRate = 0.18, ...items) {
    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Stop if name is "STOP"
        if (item.name === "STOP") {
            break;
        }

        // Ignore invalid items
        if (!item.price || !item.qty || item.price <= 0 || item.qty <= 0) {
            continue; 
        }

        subtotal += item.price * item.qty;
    }

    let gst = subtotal * gstRate;
    let total = subtotal + gst;
    console.log("subtotal = ",subtotal," gst =",gst," total = ",total)

}

let result = invoice(
    0.18,
    { name: "Pen", price: 10, qty: 3 },
    { name: "Book", price: 50, qty: 2 },
    { name: "Invalid", price: -5, qty: 2 }, // ignored because price is negative here
    { name: "STOP", price: 100, qty: 1 },   // stops here because name is stop here
    { name: "Pencil", price: 5, qty: 5 }    // never processed because said stop previosly
);

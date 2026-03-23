//ES module exports

//Named exports or shared constant
export const taxrate=0.18

//Named export for a reusable function
export function calculateTotal(subTotal){
    return subTotal+subTotal*taxrate
}

//Default export //only one should be per file //we consider main feature of module as default export
export default function createInvoiceLabel(invoiceNumber){
    return "Invoice: "+invoiceNumber;
}

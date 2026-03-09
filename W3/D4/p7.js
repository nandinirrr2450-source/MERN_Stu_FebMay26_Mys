//Payroll Cleanup and Net Pay Report
//Initial payroll records
let payroll = [
    { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
    { name: "Ravi", basePay: 25000, bonus: 1500, taxRate: 0.08 },
    { name: "Meena", basePay: -20000, bonus: 1000, taxRate: 0.05 },   // Invalid (basePay < 0)
    { name: "Kiran", basePay: 28000, bonus: -500, taxRate: 0.07 },   // Invalid (bonus < 0)
    { name: "Anil", basePay: 35000, bonus: 3000, taxRate: 1.2 }      // Invalid (taxRate > 1)
];


// Filter valid records
let validRecords = payroll.filter(emp => emp.basePay > 0 && emp.bonus >= 0 && emp.taxRate >= 0 && emp.taxRate <= 1);


//Creation of netPayReport using map
let netPayReport = validRecords.map(emp => ({
    name: emp.name,
    netPay: (emp.basePay + emp.bonus) - ((emp.basePay + emp.bonus) * emp.taxRate)
}));

//totalNetPayout using reduce
let totalNetPayout = netPayReport.reduce((total, emp)=>total + emp.netPay, 0);


//results
console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);
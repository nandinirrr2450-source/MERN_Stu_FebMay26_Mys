//Permission Rules Engine Summary
//Initial permission rules
let rules = [
    { role: "admin", action: "READ", allowed: true },
    { role: "admin", action: "WRITE", allowed: true },
    { role: "student", action: "READ", allowed: true },
    { role: "student", action: "WRITE", allowed: false },
    { role: "guest", action: "READ", allowed: false }
];


//Filter only allowed rules
let allowedRules = rules.filter(function(rule) {
    return rule.allowed === true;
});


//Create allowedPairs array ("role:action")
let allowedPairs = allowedRules.map(function(rule) {
    return rule.role + ":" + rule.action;
});


//summary object using reduce
let summary = rules.reduce(function(result, rule) {

    // Initialize role count if not present
    if (!result[rule.role]) {
        result[rule.role] = 0;
    }

    // Count only allowed rules
    if (rule.allowed === true) {
        result[rule.role]++;
    }

    return result;

}, {});


//results
console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);
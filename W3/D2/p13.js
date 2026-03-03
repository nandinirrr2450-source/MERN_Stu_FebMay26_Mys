//Function scope
function scope(){
    var insideVar = 10;
    let insideLet = 20;
    const insideConst = 30;
    console.log(insideVar);
    console.log(insideLet);
    console.log(insideConst);

}
scope();
//console.log(insideVar); //function scope
//console.log(insideLet); //block scope
//console.log(insideConst); //block scope

function varfunctionscoped(){
    if(true){
        var x=100
        let y=200
        const z=300
    }
    console.log(x)
    console.log(y)
    console.log(z)
}
varfunctionscoped()

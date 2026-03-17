//Assignment 1: Password Strength Tagger
function tagPassword(Password){
    let count = Password.length

    //to check for letter and numbers in entered password
    let hasletter=false
    let hasnumber=false
    for(let i=0;i<count;i++){
        let ch=Password[i]
        if(ch>='0' && ch<='9'){
            hasnumber=true
        }
        if((ch>='a' && ch<='z')||(ch>='A' && ch<='Z')){
            hasletter=true
        }

    }
    if(count>=12 && hasletter==true && hasnumber==true){
        console.log("STRONG Password")
        }
    else if(count>=8 && hasletter==true && hasnumber==true){
        console.log("MEDIUM Password")
        }
    else if(hasletter==false){
        console.log("INVALID Password")
        }
    else{
        console.log("WEAK Password")
        }


    


}
tagPassword(123456)
//tagPassword("abC123s4")
//tagPassword("abC1234")
//tagPassword("abC123s4djf4DFG345")
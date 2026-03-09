const onceBtn=document.getElementById("onceBtn");
onceBtn.addEventListener("click",function(){
    console.log("This click listener works only onces.");
},{once:true});

//Global keyboard shortcut creation
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key.toLowerCase()==="s"){
        event.preventDefault();
        console.log("Custom ctrl+s shortcut triggered")
    }
})
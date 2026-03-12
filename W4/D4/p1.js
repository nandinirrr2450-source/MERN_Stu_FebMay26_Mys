const out=document.getElementById("out");
const inspectBtn=document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",
    function(){
    const info={
        htmlLang: document.documentElement.lang,
        charset: document.characterSet,
        browserLanguage: navigator.language,//browsers primary preffered language
        browserLanguages: navigator.languages,//Array of all browser language
        sampleText : document.getElementById("sampleText").textContent 

    }
    console.log(info)
    out.textContent=JSON.stringify(info,null,2)
})
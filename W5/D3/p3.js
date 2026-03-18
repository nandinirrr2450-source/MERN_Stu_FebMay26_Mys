//Handling error using try/catch
function loadCustomerProfile() {
    return new Promise(function (resolve, reject) {
        const isServiceAvailable = true

        if (isServiceAvailable) {
            resolve("Success!! Customer Profile Loaded.")
        }
        else {
            reject("Unsuccessfull!! Customer Profile Unavailable.")
        }

    })
}
async function showCustomerProfile() {
    try {
        const message = await loadCustomerProfile()
        console.log(message)
    }
    catch(error){
        console.error("Error:",error)
    }
    
}
showCustomerProfile()

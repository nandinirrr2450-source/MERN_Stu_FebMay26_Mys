// Assignment 3: JSON Settings Merge
function mergeSettings(savedSettingsJSON, defaultSettings) {
    
    let savedSettings = JSON.parse(savedSettingsJSON);
    let mergedSettings = {};

    for (let key in defaultSettings) {
        mergedSettings[key] = defaultSettings[key];
    }

    for (let key in savedSettings) {
        mergedSettings[key] = savedSettings[key];
    }

    let mergedJSON = JSON.stringify(mergedSettings);
    return {
        mergedObject: mergedSettings,
        mergedJSON: mergedJSON
    };
}

let defaultSettings = {
    theme: "light",
    notifications: true,
    language: "en"
};

let savedSettingsJSON = '{"theme":"dark"}';
let result = mergeSettings(savedSettingsJSON, defaultSettings);

console.log("Merged Object:", result.mergedObject);
console.log("Merged JSON:", result.mergedJSON);
const usedKeys = ['enableHACS', 'intervalHACS']
var enabled = document.getElementById("enableHACS");
var interval = document.getElementById("intervalHACS");

// Saves options to local storage
function save_options() {
    
    if (interval.value > 60) {
        interval.value = 60;
    }
    else if (interval.value < 1) {
        interval.value = 1;
    }

    chrome.storage.local.set(
        {
            'enableHACS': enabled.checked,
            'intervalHACS': interval.value
        },
        function () {
            // Update status to let user know options were saved.
            chrome.storage.local.get(usedKeys, function (result) {
                console.log("Saved value " + result[usedKeys[0]]);
                console.log("Saved value " + result[usedKeys[1]]);
            });
        }
    );
}

// Load saved settings and display them on popup (options)
function load_settings() {
    chrome.storage.local.get(usedKeys, function (result) {
        enabled.checked = result[usedKeys[0]];
        interval.value = result[usedKeys[1]];
    });
}

// Listen to changes or clicks on the options to save them
document.getElementById('enableHACS').addEventListener('click',
    save_options);
document.getElementById('intervalHACS').addEventListener("change", save_options)

document.addEventListener("load", load_settings());
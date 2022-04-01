
//background colors for switches
var inactiveColor = "#bdb9a6"
var activeColor = "green"

function setToggles(){
    // Read it using the storage API
    chrome.storage.sync.get(['library', 'plant'], function(items) {
        console.log(items);
        if(items.library == true){
            document.getElementById("libraryCheckBackground").style.background = activeColor
            document.getElementById("libraryCheck").checked = true;
        }
        if(items.plant == true){
            document.getElementById("plantCheckBackground").style.background = activeColor
            document.getElementById("plantCheck").checked = true;
        }
    });
}
setToggles()

function updateToggles(){
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'library': document.getElementById("libraryCheck").checked, 'plant': document.getElementById("plantCheck").checked}, function() {
        console.log('Settings saved');
    });
    if(document.getElementById("libraryCheck").checked == true){
        document.getElementById("libraryCheckBackground").style.background = activeColor
    }else{
        document.getElementById("libraryCheckBackground").style.background = inactiveColor
    }
    if(document.getElementById("plantCheck").checked == true){
        document.getElementById("plantCheckBackground").style.background = activeColor
    }else{
        document.getElementById("plantCheckBackground").style.background = inactiveColor
    }
}

window.onload = function () {
    document.getElementById("libraryCheck").onclick = updateToggles;
    document.getElementById("plantCheck").onclick = updateToggles;
}
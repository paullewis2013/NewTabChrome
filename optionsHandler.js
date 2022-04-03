
//background colors for switches
var inactiveColor = "#bdb9a6"
var activeColor = "green"

function setToggles(){
    // Read it using the storage API
    chrome.storage.sync.get(['library', 'plant', 'green_arch', 'clock'], function(items) {
        console.log(items);
        if(items.library == true){
            document.getElementById("libraryCheckBackground").style.background = activeColor
            document.getElementById("libraryCheck").checked = true;
        }
        if(items.plant == true){
            document.getElementById("plantCheckBackground").style.background = activeColor
            document.getElementById("plantCheck").checked = true;
        }
        if(items.green_arch == true){
            document.getElementById("greenarchCheckBackground").style.background = activeColor
            document.getElementById("greenarchCheck").checked = true;
        }
        if(items.clock == true){
            document.getElementById("clockCheckBackground").style.background = activeColor
            document.getElementById("clockCheck").checked = true;
        }
    });
}
setToggles()

function updateToggles(){
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({
                                'library': document.getElementById("libraryCheck").checked,
                                'plant': document.getElementById("plantCheck").checked,
                                'green_arch': document.getElementById("greenarchCheck").checked,
                                'clock': document.getElementById("clockCheck").checked,
                            }, function() {
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
    if(document.getElementById("greenarchCheck").checked == true){
        document.getElementById("greenarchCheckBackground").style.background = activeColor
    }else{
        document.getElementById("greenarchCheckBackground").style.background = inactiveColor
    }
    if(document.getElementById("clockCheck").checked == true){
        document.getElementById("clockCheckBackground").style.background = activeColor
    }else{
        document.getElementById("clockCheckBackground").style.background = inactiveColor
    }
}

window.onload = function () {
    document.getElementById("libraryCheck").onclick = updateToggles;
    document.getElementById("plantCheck").onclick = updateToggles;
    document.getElementById("greenarchCheck").onclick = updateToggles;
    document.getElementById("clockCheck").onclick = updateToggles;
}
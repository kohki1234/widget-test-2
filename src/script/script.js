

function clickEvent(){
    console.log("TEST");

    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };

    var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
    var data = {text: "This is widget test for launcing text from widget"};

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
};


function initEvent() {
    var notificationHandler = function(data) {
        // Do something with the notifications
    };

    lpTag.agentSDK.init({notificationCallback: notificationHandler});
    console.log("The init() fuction was called here and cleaned, ready to launch text")
}


function getInfo() {
    var onSuccess = function(data) {
        // Do something with the returning data
    };

    var onError = function(err) {
        // Do something with the error
    };
    
    console.log("get info is called");

    var pathToData = "visitorInfo.visitorName";

    lpTag.agentSDK.get(pathToData, onSuccess, onError);

}


function clickEvent(){
    console.log("TEST");

    var notificationHandler = function(data) {
        // Do something with the notifications
    };


    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };

    var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
    var data = {text: "This is widget test for launcing text from widget"};


    lpTag.agentSDK.init({notificationCallback: notificationHandler});

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
};


function sendText(){
    console.log("TEST");

    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };

    var cmdName = lpTag.agentSDK.cmdNames.write; // = "Write ChatLine"
    var data = {text: "Some text"};

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
};

function sendSc() {
    console.log("send SC was called ")
    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };
    var cmdName = lpTag.agentSDK.cmdNames.writeSC; // = "Write StructuredContent"
    var data = {
		json: {
            "type": "vertical",
            "elements": [
              {
                "type": "image",
                "url": "https://i.imgur.com/odHIleY.jpg",
                "tooltip": "image tooltip",
                "click": {
                  "actions": [
                    {
                      "type": "navigate",
                      "name": "Navigate to store via image",
                      "lo": 23423423,
                      "la": 2423423423
                    }
                  ]
                }
              },
              {
                "type": "carousel",
                "padding": 0,
                "elements": [
                  {
                    "type": "vertical",
                    "elements": [
                      {
                        "type": "text",
                        "text": "SIM only plan",
                        "tooltip": "SIM only plan",
                        "rtl": false,
                        "style": {
                          "bold": false,
                          "italic": false,
                          "color": "#000000",
                          "size": "large"
                        }
                      },
                      {
                        "type": "text",
                        "text": "Twelve month plan BYO mobile",
                        "tooltip": "Twelve month plan BYO mobile",
                        "rtl": false,
                        "style": {
                          "bold": true,
                          "italic": false,
                          "color": "#000000"
                        }
                      },
                      {
                        "type": "button",
                        "tooltip": "Choose a plan",
                        "title": "Choose a plan",
                        "click": {
                          "metadata": [
                            {
                              "type": "ExternalId",
                              "id": "ANOTHER_ONE_1"
                            }
                          ],
                          "actions": [
                            {
                              "type": "publishText",
                              "text": "SIM only plan"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "vertical",
                    "elements": [
                      {
                        "type": "text",
                        "text": "Swap plan",
                        "tooltip": "Swap plan",
                        "rtl": false,
                        "style": {
                          "bold": false,
                          "italic": false,
                          "color": "#000000",
                          "size": "large"
                        }
                      },
                      {
                        "type": "text",
                        "text": "Two year plan leasing a mobile",
                        "tooltip": "Two year plan leasing a mobile",
                        "rtl": false,
                        "style": {
                          "bold": true,
                          "italic": false,
                          "color": "#000000"
                        }
                      },
                      {
                        "type": "button",
                        "tooltip": "Choose a plan",
                        "title": "Choose a plan",
                        "click": {
                          "metadata": [
                            {
                              "type": "ExternalId",
                              "id": "ANOTHER_ONE_2"
                            }
                          ],
                          "actions": [
                            {
                              "type": "publishText",
                              "text": "Two year plan leasing a mobile"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "vertical",
                    "elements": [
                      {
                        "type": "text",
                        "text": "Mobiles on a plan",
                        "tooltip": "Mobiles on a plan",
                        "rtl": false,
                        "style": {
                          "bold": false,
                          "italic": false,
                          "color": "#000000",
                          "size": "large"
                        }
                      },
                      {
                        "type": "text",
                        "text": "Two year plan with a mobile",
                        "tooltip": "Two year plan with a mobile",
                        "rtl": false,
                        "style": {
                          "bold": true,
                          "italic": false,
                          "color": "#000000"
                        }
                      },
                      {
                        "type": "button",
                        "tooltip": "Choose a plan",
                        "title": "Choose a plan",
                        "click": {
                          "metadata": [
                            {
                              "type": "ExternalId",
                              "id": "ANOTHER_ONE_3"
                            }
                          ],
                          "actions": [
                            {
                              "type": "publishText",
                              "text": "Mobiles on a plan"
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "type": "text",
                "text": "product name (Title)",
                "tooltip": "text tooltip",
                "style": {
                  "bold": true,
                  "size": "large"
                }
              },
              {
                "type": "text",
                "text": "product name (Title)",
                "tooltip": "text tooltip"
              },
              {
                "type": "button",
                "tooltip": "button tooltip",
                "title": "Add to cart",
                "click": {
                  "actions": [
                    {
                      "type": "link",
                      "name": "Add to cart",
                      "uri": "https://example.com"
                    }
                  ]
                }
              },
              {
                "type": "horizontal",
                "elements": [
                  {
                    "type": "button",
                    "title": "Buy",
                    "tooltip": "Buy this broduct",
                    "click": {
                      "actions": [
                        {
                          "type": "link",
                          "name": "Buy",
                          "uri": "https://example.com"
                        }
                      ]
                    }
                  },
                  {
                    "type": "button",
                    "title": "Find similar",
                    "tooltip": "store is the thing",
                    "click": {
                      "actions": [
                        {
                          "type": "link",
                          "name": "Buy",
                          "uri": "https://search.com"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "button",
                "tooltip": "button tooltip",
                "title": "Publish text",
                "click": {
                  "actions": [
                    {
                      "type": "publishText",
                      "text": "my text"
                    }
                  ]
                }
              },
              {
                "type": "map",
                "lo": 64.128597,
                "la": -21.89611,
                "tooltip": "map tooltip"
              },
              {
                "type": "button",
                "tooltip": "button tooltip",
                "title": "Navigate",
                "click": {
                  "actions": [
                    {
                      "type": "publishText",
                      "text": "my text"
                    },
                    {
                      "type": "navigate",
                      "name": "Navigate to store via image",
                      "lo": 23423423,
                      "la": 2423423423
                    }
                  ]
                }
              }
            ]
          },
		metadata: [	//metadata is optional
			{"type":"ExternalId","id":"running364"},
			{"type":"ExternalId","id":"soccer486"}
		]
	};

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
}


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
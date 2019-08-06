export default
      {
            "userTypeId": 4,
            "accountSettings": {
                  "order": 1,
                  "code": "accountSettings",
                  "label": "Account Settings",
                  "desc": "Provides setting related to user's account.",
                  "items": [{
                        "userInputType": "Text",
                        "label": "User email associated with account.",
                        "name": "email",
                        "desc": null,
                        "value": "omsoni@gmail.com"
                  }, {
                        "userInputType": "Boolean",
                        "label": "Allow managers full control of account",
                        "name": "allowAccControl",
                        "desc": "This will provide financial access to managers.",
                        "value": false
                  }, {
                        "userInputType": "Boolean",
                        "label": "Setup Two Factor Authentication",
                        "name": "enableTFA",
                        "desc": "OTP will be send to your mobile device",
                        "value": false
                  }]
            },
            "networkSettings": {
                  "order": 2,
                  "code": "networkSettings",
                  "label": "Network Settings",
                  "desc": "Provides setting related to talnet network.",
                  "items": [{
                        "userInputType": "Boolean",
                        "label": "Network visibility",
                        "name": "netVis",
                        "desc": "Public networks can be joined by anyone",
                        "value": false
                  }, {
                        "userInputType": "Options",
                        "label": "Default Network",
                        "options": "/connection/nl",
                        "name": "Default Network when you login",
                        "desc": null,
                        "value": null
                  }]
            },
            "appSettings": {
                  "order": 3,
                  "code": "appSettings",
                  "label": "App Settings",
                  "desc": "Provides setting related to user's app.",
                  "items": [{
                        "userInputType": "Boolean",
                        "label": "Turn off Job Quotes",
                        "name": "jobQuotes",
                        "desc": "Turns off job quote functionality",
                        "value": false
                  }, {
                        "userInputType": "Boolean",
                        "label": "Remove Customer tab from Create Job",
                        "name": "jobCust",
                        "desc": "Remove Customer tab from create job",
                        "value": false
                  }, {
                        "userInputType": "Boolean",
                        "label": "Line Items in Create Job",
                        "name": "itemsCreateJob",
                        "desc": "Removes Line Item tab from create job",
                        "value": false
                  }, {
                        "userInputType": "Boolean",
                        "label": "Remove contract tab in Create Job",
                        "desc": "Removes contract tab from create job",
                        "name": "conCreateJob",
                        "value": false
                  }, {
                        "userInputType": "Boolean",
                        "label": "Remove Schedule in Create Job",
                        "desc": "Removes Schedule tab from Create Job",
                        "name": "schCreateJob",
                        "value": false
                  }, {
                        "userInputType": "Boolean",
                        "label": "Send survey after every job completion",
                        "desc": "Sends survey after every job completion",
                        "name": "schCreateJob",
                        "value": false
                  }]
            },
            "communicationSettings": {
                  "order": 4,
                  "code": "communicationSettings",
                  "label": "Communication Settings",
                  "desc": "Provides setting related to Communication.",
                  "items": [{
                        "userInputType": "Boolean",
                        "label": "Notify when new public network is available",
                        "name": "notifyNet",
                        "desc": null,
                        "value": true
                  }, {
                        "userInputType": "Boolean",
                        "label": "Notify when a new business joins network in my area",
                        "name": "notifyNet",
                        "desc": null,
                        "value": true
                  }, {
                        "userInputType": "Boolean",
                        "label": "Notify when new connections accepts my invite",
                        "name": "notifyConn",
                        "desc": null,
                        "value": true
                  }, {
                        "userInputType": "Boolean",
                        "label": "Notify me when new job claim is submitted",
                        "name": "notifyClaim",
                        "desc": null,
                        "value": true
                  }]
            },
            "dataSettings": {
                  "order": 5,
                  "code": "dataSettings",
                  "label": "Data Settings",
                  "desc": "Provides setting related to user's data.",
                  "items": [{
                        "userInputType": "Boolean",
                        "label": "Show business contact information",
                        "name": "contactInfo",
                        "desc": null,
                        "value": true
                  }, {
                        "userInputType": "action",
                        "label": "Reset my job performance data",
                        "name": "dataReset",
                        "desc": null,
                        "value": false
                  }, {
                        "userInputType": "action",
                        "label": "Keep survey data private to me",
                        "name": "surveyData",
                        "desc": null,
                        "value": true
                  }]
            },
            "privacySettings": {
                  "order": 6,
                  "code": "privacySettings",
                  "label": "Privacy Settings",
                  "desc": "Provides setting related to privacy.",
                  "items": [{
                        "userInputType": "Boolean",
                        "label": "Show my area of residence",
                        "name": "cityInfo",
                        "desc": null,
                        "value": true
                  }, {
                        "userInputType": "Boolean",
                        "label": "Show my contact information",
                        "name": "contactInfo",
                        "desc": null,
                        "value": true
                  }, {
                        "userInputType": "Boolean",
                        "label": "Let others in outside my network contact me for business",
                        "name": "contactMe",
                        "desc": null,
                        "value": false
                  }, {
                        "userInputType": "Boolean",
                        "label": "Turn on/off location",
                        "name": "location",
                        "desc": null,
                        "value": true
                  }, {
                        "userInputType": "Boolean",
                        "label": "Make my profile private to my network",
                        "name": "contactInfo",
                        "value": true
                  }, {
                        "userInputType": "Boolean",
                        "label": "Make jobs visible to outside my networks",
                        "name": "jobVis",
                        "desc": null,
                        "value": false
                  }, {
                        "userInputType": "Boolean",
                        "label": "Show me infomercials useful to my business",
                        "name": "infoVis",
                        "desc": null,
                        "value": false
                  }]
            }
      };

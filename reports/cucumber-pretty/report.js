$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/demo2.feature");
formatter.feature({
  "name": "Information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1-FindTheUser"
    }
  ]
});
formatter.step({
  "name": "Enter User \"\u003cuser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Find the User",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user"
      ]
    },
    {
      "cells": [
        "anamika"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to user login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.go_to_user_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to log in",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.navigate_to_log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username and Password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Welcome message will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.welcome_message_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to Social Network",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.go_to_Social_Network()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test1-FindTheUser"
    }
  ]
});
formatter.step({
  "name": "Enter User \"anamika\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.enter_User(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Find the User",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.find_the_User()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test2-SendMessageToTheUser"
    }
  ]
});
formatter.step({
  "name": "Enter User \"\u003cuser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Find the User",
  "keyword": "Then "
});
formatter.step({
  "name": "Go to Send Message",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Subject \"\u003cSubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Message\"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Send the Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "Subject",
        "Message"
      ]
    },
    {
      "cells": [
        "anamika",
        "This message is to check on you",
        "Hi! How are you?"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to user login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.go_to_user_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to log in",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.navigate_to_log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username and Password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Welcome message will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.welcome_message_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to Social Network",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.go_to_Social_Network()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test2-SendMessageToTheUser"
    }
  ]
});
formatter.step({
  "name": "Enter User \"anamika\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.enter_User(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Find the User",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.find_the_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to Send Message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.go_to_Send_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Subject \"This message is to check on you\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_Subject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Message\"Hi! How are you?\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send the Message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.send_the_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3-AssertFinalMessageHasBeenSent"
    }
  ]
});
formatter.step({
  "name": "Enter User \"\u003cuser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Find the User",
  "keyword": "Then "
});
formatter.step({
  "name": "Go to Send Message",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Subject \"\u003cSubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Message\"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Send the Message",
  "keyword": "Then "
});
formatter.step({
  "name": "Assert Value",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "Subject",
        "Message"
      ]
    },
    {
      "cells": [
        "anamika",
        "This message is to check on you",
        "Hi! How are you?"
      ]
    }
  ]
});
formatter.background({
  "name": "Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to user login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.go_to_user_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to log in",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.navigate_to_log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Username and Password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Welcome message will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.welcome_message_will_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to Social Network",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.go_to_Social_Network()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3-AssertFinalMessageHasBeenSent"
    }
  ]
});
formatter.step({
  "name": "Enter User \"anamika\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.enter_User(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Find the User",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.find_the_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to Send Message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.go_to_Send_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Subject \"This message is to check on you\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_Subject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Message\"Hi! How are you?\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Send the Message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.send_the_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert Value",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.assert_Value()"
});
formatter.result({
  "status": "passed"
});
});
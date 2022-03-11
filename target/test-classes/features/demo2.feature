Feature: Information

  Background: Login
    Given Go to user login page
    When Navigate to log in
    And Enter Username and Password
    Then Welcome message will be displayed
    Then Go to Social Network

  @test1-FindTheUser
  Scenario Outline: 
    Given Enter User "<user>"
    Then Find the User

    Examples: 
      | user    |
      | anamika |

  @test2-SendMessageToTheUser
  Scenario Outline: 
    Given Enter User "<user>"
    Then Find the User
    Then Go to Send Message
    And Enter Subject "<Subject>"
    And Enter Message"<Message>"
    Then Send the Message

    Examples: 
      | user    | Subject                         | Message          |
      | anamika | This message is to check on you | Hi! How are you? |

  @test3-AssertFinalMessageHasBeenSent
  Scenario Outline: 
    Given Enter User "<user>"
    Then Find the User
    Then Go to Send Message
    And Enter Subject "<Subject>"
    And Enter Message"<Message>"
    Then Send the Message
    And Assert Value

    Examples: 
      | user    | Subject                         | Message          |
      | anamika | This message is to check on you | Hi! How are you? |

package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	WebDriver driver;

	// Background
		@Given("Go to user login page")
		public void go_to_user_login_page() {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				System.setProperty("webdriver.chrome.driver", "./lib/chromedriver");
				driver = new ChromeDriver();
			} catch (Exception ex) {
				System.out.println("Error in 'Go to user login page' Method.");
				// System.out.println("Exception found was: " + ex);
			}
		}
	
		@When("Navigate to log in")
		public void navigate_to_log_in() {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				driver.get("http://elearningm1.upskills.in/");
				driver.manage().window().maximize();
			} catch (Exception ex) {
				System.out.println("Error in 'Navigate to log in' Method");
				System.out.println("Error in 'Go to user login page' Method.");
				// System.out.println("Exception found was: " + ex);
			}
	
		}
	
		@When("Enter Username and Password")
		public void enter_Username_and_Password() {
		    // Write code here that turns the phrase above into concrete actions
	
			try {
				WebElement obj = driver.findElement(By.id("login"));
				obj.sendKeys("Anamika1");
	
				obj = driver.findElement(By.id("password"));
				obj.sendKeys("AbcXyz");
			} catch (Exception ex) {
				System.out.println("Error in 'enter_Username_and_Password_' Method");
				System.out.println("Error encountered while entering username and password");
				// System.out.println("Exception found was: " + ex);
			}
		}
	
		@Then("Welcome message will be displayed")
		public void welcome_message_will_be_displayed() {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				WebElement obj = driver.findElement(By.xpath("//button[@type='submit']"));
				obj.click();
				WebElement obj1 = driver.findElement(By.xpath("//*[contains(text(),'Hello')]"));
				String text = obj1.getText();
				System.out.println("Logged In!");
				System.out.println("Resultant message was:" + text);
			} catch (Exception ex) {
				System.out.println("Error in 'welcome_message_will_be_displayed' Method");
				System.out.println("Exception while loggin in!");
				// System.out.println("Exception found was: " + ex);
			}
		}
	
		@Then("Go to Social Network")
		public void go_to_Social_Network() {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				WebElement obj1 = driver.findElement(By.xpath("//*[contains(text(),'Social')]"));
				obj1.click();
				System.out.println("Moved to the Social Networks tab!");
			} catch (Exception ex) {
				System.out.println("Error in 'go_to_Social_Network' Method");
				System.out.println("Unable to navigate to Social Network");
				// System.out.println("Exception found was: " + ex);
			}
	
		}

	// test1- Find THe User
		@Then("Enter User {string}")
		public void enter_User(String string) {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				WebElement obj = driver.findElement(By.name("q"));
				obj.sendKeys(string);
			} catch (Exception ex) {
				System.out.println("Error in 'enter_String(2) Method'");
				System.out.println("Unable to enter user to ne searched for");
				// System.out.println("Exception found was: " + ex);
			}
		}
	
		@Then("Find the User")
		public void find_the_User() {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				WebElement obj = driver.findElement(By.name("submit"));
				obj.click();
				System.out.println("User Found!");
			} catch (Exception ex) {
				System.out.println("Error in 'find_the_User' Method");
				System.out.println("Unable to Find_The_User");
				// System.out.println("Exception found was: " + ex);
			}
		}

	// test2- Send Message To The User
		@Then("Go to Send Message")
		public void go_to_Send_Message() {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				WebElement obj = driver.findElement(By.xpath("//a[@class='btn btn-default ajax btn-sm']"));
				obj.click();
			} catch (Exception ex) {
				System.out.println("Error in 'go_to_Send_Message' Method");
				System.out.println("Unable to Find the button for Sending The Message");
				// System.out.println("Exception found was: " + ex);
			}
		}
	
		@Then("Enter Subject {string}")
		public void enter_Subject(String string) {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				Thread.sleep(5000);
				WebElement obj = driver.findElement(By.id("subject_id"));
				obj.sendKeys(string);
			} catch (Exception ex) {
				System.out.println("Error in 'Enter_Subject' Method'");
				// System.out.println("Exception found was: " + ex);
			}
	
		}
	
		@Then("Enter Message{string}")
		public void enter_Message(String string) {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				WebElement obj = driver.findElement(By.xpath("//*[@id='content_id']"));
				obj.sendKeys(string);
			} catch (Exception ex) {
				System.out.println("Error in 'Enter_Message' Method'");
				// System.out.println("Exception found was: " + ex);
			}
	
		}
	
		@Then("Send the Message")
		public void send_the_Message() {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				WebElement obj = driver.findElement(By.xpath("//a[@id='send_message_link']"));
				obj.click();
				System.out.println("The message has been sent!");
			} catch (Exception ex) {
				System.out.println("Error in 'send_the_Message' Method");
				System.out.println("Unable to Send_The_Message");
				// System.out.println("Exception found was: " + ex);
			}
		}

	//test3- Assert Final Message has been Sent
		@Then("Assert Value")
		public void assert_Value() {
			// Write code here that turns the phrase above into concrete actions
	
			try {
				Thread.sleep(5000);
	
				WebElement obj = driver.findElement(By.xpath("//*[@id='send_message']/div"));
				String text = obj.getText();
				Assert.assertTrue(text.contains("Your message has been sent"));
				System.out.println("Program Completed.");
				System.out.println("Resultant message was:" + text);
				System.out.println("Closing windows...");
				driver.quit();
	
			} catch (Exception ex) {
				System.out.println("Error in 'display_value' Method");
				System.out.println("Looks like the message has not been send");
				// System.out.println("Exception found was: " + ex);
			}
		}

}
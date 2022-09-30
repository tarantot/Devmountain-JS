
import { Builder, Capabilities, By } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Choises show up after click Draw button', async () => {
    driver.findElement(By.linkText("Draw")).click();
    driver.sleep(3)
    const size = await driver.findElement(By.id("choices"));
    expect(size).toBe(true);
})

test('Added after click', async () => {
    driver.findElement(By.linkText("Add to Duo")).click();
    driver.sleep(3)
    const player = await driver.findElement(By.id("player-duo"));
    expect(player).toBe(true);
})

test('Testing removal from Duo', async () => {
    driver.findElement(By.linkText("Add to Duo")).click();
    driver.sleep(3)
    const added_card_name = await driver.findElement(By.xpath('//div[@id="player-duo"]/h3')).getText()
    driver.findElement(By.xpath('//button[.="Remove from Duo"]')).click();
    driver.sleep(3)
    expect(size).toBe(true); 
})
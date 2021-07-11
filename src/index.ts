import { chromium } from "playwright";


( async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.screenshot({
      path: "screenshots/example.png"
    })
    await browser.close();

})();
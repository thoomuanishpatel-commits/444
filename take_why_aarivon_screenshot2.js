import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1280, height: 1000 });
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  
  console.log('Waiting 6 seconds for loader animation...');
  await page.waitForTimeout(6000);

  // Scroll down progressively to mount dynamic components
  console.log('Scrolling progressively...');
  let currentPosition = 0;
  let scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  
  while (currentPosition < scrollHeight) {
    currentPosition += 200;
    await page.evaluate((y) => window.scrollTo(0, y), currentPosition);
    await page.waitForTimeout(200);
    scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  }
  
  await page.waitForTimeout(1000);

  // Scroll to the Why Choose Aarivon section specifically
  console.log('Scrolling to why-aarivon section...');
  const section = await page.$('#why-aarivon');
  if (section) {
    // Scroll to bottom of section where the tech agency block is
    await page.evaluate((el) => {
      el.scrollIntoView({ block: 'end' });
    }, section);
    await page.waitForTimeout(1500);
    
    const screenshotPath = '/Users/thumuanish/.gemini/antigravity/brain/c793f5bb-bf82-470a-af93-482757bd52d1/why_aarivon_tech_agency_centered2.png';
    await page.screenshot({ path: screenshotPath });
    console.log('Section screenshot saved to:', screenshotPath);
  }
  
  await browser.close();
}

run().catch(console.error);

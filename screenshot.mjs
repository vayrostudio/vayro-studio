import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  channel: 'msedge',
  headless: true,
});

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
const failedRequests = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text());
});
page.on('pageerror', (err) => errors.push(err.message));
page.on('response', (res) => {
  if (res.status() >= 400) failedRequests.push(`${res.status()} ${res.url()}`);
});

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

// Desktop viewport + full page
await page.screenshot({ path: 'shots/desktop-hero.png' });
await page.evaluate(async () => {
  window.scrollTo(0, document.body.scrollHeight);
});
await page.waitForTimeout(800);
await page.screenshot({ path: 'shots/desktop-full.png' });

// Check horizontal overflow at desktop
const overflowD = await page.evaluate(() => ({
  scrollW: document.documentElement.scrollWidth,
  clientW: document.documentElement.clientWidth,
}));

// Mobile
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
mobile.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text());
});
mobile.on('pageerror', (err) => errors.push(err.message));
await mobile.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await mobile.waitForTimeout(2000);
await mobile.screenshot({ path: 'shots/mobile-hero.png' });

// Scroll through mobile page for overflow check
const overflowM = await mobile.evaluate(() => ({
  scrollW: document.documentElement.scrollWidth,
  clientW: document.documentElement.clientWidth,
}));

// Mid-page screenshots on mobile
await mobile.evaluate(() => window.scrollTo(0, 1200));
await mobile.waitForTimeout(600);
await mobile.screenshot({ path: 'shots/mobile-mid.png' });

await mobile.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await mobile.waitForTimeout(600);
await mobile.screenshot({ path: 'shots/mobile-end.png' });

console.log('OVERFLOW desktop:', overflowD);
console.log('OVERFLOW mobile:', overflowM);
console.log('FAILED REQUESTS:', failedRequests.length ? failedRequests : 'none');
console.log('CONSOLE ERRORS:', errors.length ? errors : 'none');

await browser.close();

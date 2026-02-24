import { test, expect } from '@playwright/test';

test('color swatch copy copies token name', async ({ page }) => {
  await page.goto('/tokens/color');
  const copyButton = page.locator('[data-copy]').first();
  await copyButton.click();

  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  await expect(clipboard).toMatch(/^--/);
});

test('typography table copy copies token name', async ({ page }) => {
  await page.goto('/tokens/typography');
  const copyButton = page.locator('[data-copy]').first();
  await copyButton.click();

  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  await expect(clipboard).toMatch(/^--/);
});

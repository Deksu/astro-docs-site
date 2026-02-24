import { test, expect } from '@playwright/test';

test('toc highlights active section', async ({ page }) => {
  await page.goto('/tokens/color');
  const tocLink = page.locator('a[data-toc-link][href="#background"]');
  const activeClass = await tocLink.getAttribute('data-active-class');

  await page.locator('#background').scrollIntoViewIfNeeded();
  await expect(tocLink).toHaveClass(new RegExp(activeClass || ''));

  const nextLink = page.locator('a[data-toc-link][href="#border"]');
  await page.locator('#border').scrollIntoViewIfNeeded();
  await expect(nextLink).toHaveClass(new RegExp(activeClass || ''));
});

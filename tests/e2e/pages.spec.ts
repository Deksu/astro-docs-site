import { test, expect } from '@playwright/test';

test('tokens overview loads', async ({ page }) => {
  await page.goto('/tokens/overview');
  await expect(page.getByRole('heading', { name: 'Design Tokens' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Token groups' })).toBeVisible();
});

test('tokens color loads', async ({ page }) => {
  await page.goto('/tokens/color');
  await expect(page.getByRole('heading', { name: 'Color tokens' })).toBeVisible();
  await expect(page.locator('[data-copy]').first()).toBeVisible();
});

test('tokens typography loads', async ({ page }) => {
  await page.goto('/tokens/typography');
  await expect(page.getByRole('heading', { name: 'Typography tokens' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Font sizes' })).toBeVisible();
});

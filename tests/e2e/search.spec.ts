import { test, expect } from '@playwright/test';

test('search shows results and navigates', async ({ page }) => {
  await page.goto('/');
  const input = page.getByLabel('Search documentation');
  await input.fill('typo');

  const menu = page.locator('[data-search-menu]');
  const results = menu.locator('a');
  await expect(results).toHaveCount(2);
  await expect(menu.getByText('Typography', { exact: true })).toBeVisible();
  await expect(menu.getByText('Typography Tokens', { exact: true })).toBeVisible();
  await expect(menu.getByText('Foundations', { exact: true })).toBeVisible();
  await expect(menu.getByText('Tokens', { exact: true })).toBeVisible();

  await menu.getByText('Typography', { exact: true }).click();
  await expect(page).toHaveURL(/\/foundations\/typography/);

  await input.fill('typo');
  await menu.getByText('Typography Tokens', { exact: true }).click();
  await expect(page).toHaveURL(/\/tokens\/typography/);
});

test('search clear button replaces shortcut and clears input', async ({ page }) => {
  await page.goto('/');
  const input = page.getByLabel('Search documentation');
  const clear = page.locator('[data-search-clear]');
  const shortcut = page.locator('[data-search-shortcut]');

  const clearClass = await clear.getAttribute('data-visible-class');
  const shortcutHiddenClass = await shortcut.getAttribute('data-hidden-class');

  await input.fill('color');
  await expect(clear).toHaveClass(new RegExp(clearClass || ''));
  await expect(shortcut).toHaveClass(new RegExp(shortcutHiddenClass || ''));

  await clear.click();
  await expect(input).toHaveValue('');
});

test('cmd/ctrl+k focuses search', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Control+K');
  await expect(page.getByLabel('Search documentation')).toBeFocused();
});

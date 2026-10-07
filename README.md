# Playwright SauceDemo Tests

![Playwright Tests](https://github.com/murnaqvi28/playwright-saucedemo-tests/actions/workflows/playwright.yml/badge.svg)

End-to-end UI tests for [SauceDemo](https://www.saucedemo.com) built with Playwright and JavaScript, using the Page Object Model.

## What is covered

- Login: valid user, locked out user
- Cart: add products, remove products, cart badge count

## Tech stack

- Playwright Test (JavaScript)
- Page Object Model
- GitHub Actions (tests run on every push, on Chromium, Firefox and WebKit)

## How to run

```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Project structure

```
pages/    page objects (locators and actions)
tests/    test files
```
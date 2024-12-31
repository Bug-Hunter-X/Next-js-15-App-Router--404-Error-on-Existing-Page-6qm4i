# Next.js 15 App Router 404 Error Bug Report

This repository demonstrates a bug encountered in Next.js 15's App Router where a 404 error is unexpectedly returned when navigating to a page that clearly exists.  The issue is intermittent and seemingly unrelated to code changes. 

## Bug Description

The application uses the App Router, and a simple page (`pages/index.js`) is defined. Despite this, attempting to navigate to the home page (`/`) sometimes results in a 404 error.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that intermittently, the application will display a 404 error instead of the expected "Hello World" message on the home page. 

## Expected Behavior

The home page should always load successfully without a 404 error.
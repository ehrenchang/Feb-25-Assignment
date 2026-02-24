# Unit Converter — Testing Lab

## Overview
A static web application for unit conversions (Celsius/Fahrenheit, km/miles, kg/pounds, liters/gallons). Built as a teaching tool for UC Berkeley Haas "Intro to Code for MBAs" Class 9 on testing.

## Project Architecture
- **index.html** — Single-page frontend with converter UI
- **converter-shared.js** — Shared conversion functions used by both the browser and Jest tests
- **converter.test.js** — Jest test suite (lab exercise with intentional bugs to fix)
- **package.json** — Node.js project config with Jest as dev dependency

## How to Run
- The app is served as a static site using `serve` on port 5000
- Tests: `npm test` (runs Jest)

## Deployment
- Static deployment serving the project root directory

## Recent Changes
- 2026-02-24: Initial Replit setup — added `serve` dependency, configured workflow and static deployment

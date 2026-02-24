// =============================================================================
//  UNIT CONVERTER — Testing Lab
//  Class 9: Testing | Intro to Code for MBAs | UC Berkeley Haas
// =============================================================================
//
//  HOW THIS WORKS
//  ──────────────
//  Hit the green Run button at any time to run all tests.
//
//  GREEN  ✓  = test passed — the function returned what you expected
//  RED    ✗  = test failed — read the error to see what went wrong
//
//  Your job today has three parts:
//    PART A  Fix the two broken tests below (they fail on purpose)
//    PART B  Write 4 new tests in the TODO slots
//    PART C  Answer the reflection questions at the bottom (in comments)
//
// =============================================================================

const {
  celsiusToFahrenheit,
  kmToMiles,
  kgToPounds,
  litersToGallons
} = require('./converter-shared');


// ─────────────────────────────────────────────────────────────────────────────
//  SAMPLE TESTS  (already passing — read these first, they show you the syntax)
// ─────────────────────────────────────────────────────────────────────────────

test('[SAMPLE] freezing point: 0°C should equal 32°F', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('[SAMPLE] zero km should return zero miles', () => {
  expect(kmToMiles(0)).toBe(0);
});


// ─────────────────────────────────────────────────────────────────────────────
//  PART A — FIX THESE  (both currently FAILING — find the bug and fix it)
//
//  The converter functions are correct. The bug is in the test itself.
//  Run the tests, read the error message, then fix the wrong number.
//  When both turn green, move to Part B.
// ─────────────────────────────────────────────────────────────────────────────

test('[FIX ME] boiling point: 100°C should equal 212°F', () => {
  expect(celsiusToFahrenheit(100)).toBe(999);  // ← wrong expected value
});

test('[FIX ME] 1 kg should equal 2.2 lbs', () => {
  expect(kgToPounds(1)).toBe(5.00);  // ← wrong expected value
});


// ─────────────────────────────────────────────────────────────────────────────
//  PART B — WRITE THESE  (fill in each TODO, then run to check)
// ─────────────────────────────────────────────────────────────────────────────

// ── TODO 1 ── Happy Path ─────────────────────────────────────────────────────
//
//  Write a test for kmToMiles using a real-world distance.
//  Suggested input: 10 km
//  To find the expected value: multiply 10 × 0.621371, round to 2 decimal places
//
//  Template:
//    test('description of what you are testing', () => {
//      expect(kmToMiles(YOUR_INPUT)).toBe(EXPECTED_OUTPUT);
//    });
//
//  Write your test here ↓




// ── TODO 2 ── Happy Path ─────────────────────────────────────────────────────
//
//  Write a test for litersToGallons using a real-world volume.
//  Suggested input: 4 liters (about one water bottle)
//  To find the expected value: multiply 4 × 0.264172, round to 2 decimal places
//
//  Write your test here ↓




// ── TODO 3 ── Edge Case ──────────────────────────────────────────────────────
//
//  Write a test using a NEGATIVE Celsius value.
//  There's a famous coincidence: -40°C = exactly -40°F.
//  Use that as your test — it's easy to verify and always memorable.
//
//  After it passes, add a comment: why do developers bother testing negatives?
//
//  Write your test here ↓




// ── TODO 4 ── Your Choice ────────────────────────────────────────────────────
//
//  Write any test for any function with any input you choose.
//  No hints. No template. Make it pass.
//
//  Write your test here ↓




// ─────────────────────────────────────────────────────────────────────────────
//  PART C — REFLECTION  (answer in comments below each question)
//
//  No right or wrong answers here — this is about thinking, not syntax.
// ─────────────────────────────────────────────────────────────────────────────

//
//  Q1: When you fixed the [FIX ME] tests in Part A, what did the red error
//      message tell you? Copy the exact failure line here and explain what
//      each part of it meant.
//
//  YOUR ANSWER:
//


//
//  Q2: Your instructor is about to change one line in converter-shared.js —
//      swapping the km-to-miles multiplier from 0.621371 to 1.9.
//      Before they do: which tests in this file would turn red?
//      List each test name and explain why that one would catch the bug.
//
//  YOUR ANSWER:
//


//
//  Q3: What does your test suite NOT cover? Name two inputs or situations
//      your tests would completely miss. If those slipped into production,
//      what might a real user experience?
//
//  YOUR ANSWER:
//

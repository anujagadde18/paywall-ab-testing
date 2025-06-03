# Growth Engineer Mini-Activity

## Overview
30-minute assessment for growth engineer candidates to demonstrate skills in:
- React Native (Expo) implementation
- Feature flag configuration
- Analytics tracking
- SQL metrics analysis

## Task
Implement a feature-flagged paywall with A/B testing:

1. Add a variant headline "Unlock AI Study Mode" when `getFlag("paywall_copy_b")` is true
2. Configure a 50/50 split between variants
3. Track conversions using the analytics library
4. Write SQL to analyze conversion rates by variant

In your solution, leverage as many of the existing conventions and files in this project as appropriate.

For bonus points, paste any AI-mediated work / chats / artifacts into `ai_coding_log.md`. If you're using something like cursor and want to showcase any of your workflows include that as well.

## Project Structure
- `src/App.tsx` - Main application component with paywall UI
- `src/hooks/` - A/B testing implementation
- `src/utils/analytics.ts` - Analytics tracking functions
- `sql/` - SQL query implementations and schema

## Getting Started
```bash
pnpm i        # install dependencies
pnpm start    # run on native simulator/device
pnpm web      # run in browser (React-Native-Web)
```

## Evaluation Criteria
- Correct implementation of feature-flagged UI components
- Proper configuration of variant testing
- Appropriate analytics event tracking
- Accurate SQL analysis of performance metrics 

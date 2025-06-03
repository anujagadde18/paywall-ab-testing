# AI Coding Log

## Feature Flag Implementation  
- Asked ChatGPT how to implement a 50/50 split for a feature flag in React Native using a user ID.  
- Received example code to assign variants deterministically by hashing user ID characters and falling back to a random split if no user ID is present.  
- Implemented this logic in `src/hooks/featureFlags.ts` and a simple mock `getUserId` function in `src/user.ts`.

## React Native Paywall Component  
- Created a paywall UI in `src/App.tsx` with conditional headline text based on feature flag `paywall_copy_b`.  
- Used `getFlag` to decide which headline to show: "Unlock AI Study Mode" (variant B) or "Upgrade your study plan" (variant A).  
- Added an `onPress` handler for the upgrade button that tracks conversion events with the variant label.

## Analytics Tracking  
- Developed a lightweight analytics utility in `src/utils/analytics.ts` to log events to the console.  
- The `track` function accepts event names and properties, used to track "paywall_conversion" with variant data.

## SQL Conversion Rate Query  
- Asked ChatGPT for a SQL query to analyze conversion rates by variant from an events table.  
- Got a query that calculates total users, conversions, and conversion rate grouped by variant.

```sql
WITH user_conversions AS (
  SELECT
    user_id,
    variant,
    MAX(CASE WHEN event_name = 'paywall_conversion' THEN 1 ELSE 0 END) AS converted
  FROM events
  WHERE event_name IN ('paywall_impression', 'paywall_conversion')
  GROUP BY user_id, variant
)
SELECT
  variant,
  COUNT(*) AS total_users,
  SUM(converted) AS conversions,
  ROUND(SUM(converted)::decimal / COUNT(*) * 100, 2) AS conversion_rate_percent
FROM user_conversions
GROUP BY variant;

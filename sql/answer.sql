-- Total users per variant
WITH total_users AS (
  SELECT variant, COUNT(DISTINCT user_id) AS total_users
  FROM events
  WHERE event_name = 'paywall_conversion'
  GROUP BY variant
),

-- Total conversions per variant (assuming conversion means clicking upgrade)
conversions AS (
  SELECT variant, COUNT(*) AS conversions
  FROM events
  WHERE event_name = 'paywall_conversion'
  GROUP BY variant
)

SELECT
  t.variant,
  t.total_users,
  COALESCE(c.conversions, 0) AS conversions,
  ROUND(COALESCE(c.conversions, 0) * 100.0 / t.total_users, 2) AS conversion_rate_pct
FROM total_users t
LEFT JOIN conversions c ON t.variant = c.variant
ORDER BY variant;

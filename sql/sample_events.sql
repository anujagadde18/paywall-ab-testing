CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  event_name TEXT NOT NULL,
  variant TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts INTEGER NOT NULL,
  day TEXT NOT NULL,
  kind TEXT NOT NULL,
  visitor TEXT NOT NULL,
  session TEXT NOT NULL,
  path TEXT NOT NULL,
  referrer TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  asn INTEGER,
  ua TEXT,
  device TEXT,
  browser TEXT,
  os TEXT,
  screen TEXT,
  lang TEXT,
  timezone TEXT,
  flags INTEGER NOT NULL DEFAULT 0,
  score INTEGER NOT NULL DEFAULT 0,
  verdict TEXT NOT NULL DEFAULT 'clean',
  scorev INTEGER NOT NULL DEFAULT 1,
  ms INTEGER
);

CREATE INDEX IF NOT EXISTS events_day ON events(day);
CREATE INDEX IF NOT EXISTS events_visitor ON events(visitor, ts);
CREATE INDEX IF NOT EXISTS events_score ON events(score, ts);


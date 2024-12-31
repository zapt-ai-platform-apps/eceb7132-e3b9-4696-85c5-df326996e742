CREATE TABLE "trips" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "destination" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "user_id" UUID NOT NULL
);
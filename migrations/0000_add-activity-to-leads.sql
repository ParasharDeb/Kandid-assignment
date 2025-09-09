DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'campaign_status') THEN
    CREATE TYPE "public"."campaign_status" AS ENUM('Draft', 'Active', 'Paused', 'Completed');
  END IF;
END
$$;

CREATE TABLE IF NOT EXISTS "leads" (
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar(255) NOT NULL,
    "designation" varchar(255),
    "campaign" varchar(100),
    "status" varchar(50),
    "last_contact" varchar(50),
    "activity" integer,
    "email" varchar(255),
    "history_id" integer,
    CONSTRAINT "leads_history_id_unique" UNIQUE("history_id")
);

CREATE TABLE IF NOT EXISTS "account" (
    "id" text PRIMARY KEY NOT NULL,
    "account_id" text NOT NULL,
    "provider_id" text NOT NULL,
    "user_id" text NOT NULL,
    "access_token" text,
    "refresh_token" text,
    "id_token" text,
    "access_token_expires_at" timestamp,
    "refresh_token_expires_at" timestamp,
    "scope" text,
    "password" text,
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS "campaigns" (
    "id" serial PRIMARY KEY NOT NULL,
    "campaign_name" varchar(255) NOT NULL,
    "status" "campaign_status" DEFAULT 'Draft' NOT NULL,
    "total_leads" integer DEFAULT 0 NOT NULL,
    "successful_leads" integer DEFAULT 0 NOT NULL,
    "response_rate" integer DEFAULT 0 NOT NULL,
    "progress" integer DEFAULT 0 NOT NULL,
    "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "lead_history" (
    "id" serial PRIMARY KEY NOT NULL,
    "history_events" jsonb NOT NULL,
    "created_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "session" (
    "id" text PRIMARY KEY NOT NULL,
    "expires_at" timestamp NOT NULL,
    "token" text NOT NULL,
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp NOT NULL,
    "ip_address" text,
    "user_agent" text,
    "user_id" text NOT NULL,
    CONSTRAINT "session_token_unique" UNIQUE("token")
);

CREATE TABLE IF NOT EXISTS "user" (
    "id" text PRIMARY KEY NOT NULL,
    "name" text,
    "lastname" text,
    "email" text NOT NULL,
    "email_verified" boolean DEFAULT false NOT NULL,
    "image" text,
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL,
    CONSTRAINT "user_email_unique" UNIQUE("email")
);

CREATE TABLE IF NOT EXISTS "verification" (
    "id" text PRIMARY KEY NOT NULL,
    "identifier" text NOT NULL,
    "value" text NOT NULL,
    "expires_at" timestamp NOT NULL,
    "created_at" timestamp DEFAULT now() NOT NULL,
    "updated_at" timestamp DEFAULT now() NOT NULL
);

ALTER TABLE IF EXISTS "leads" ADD CONSTRAINT IF NOT EXISTS "leads_history_id_lead_history_id_fk" FOREIGN KEY ("history_id") REFERENCES "public"."lead_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE IF EXISTS "account" ADD CONSTRAINT IF NOT EXISTS "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE IF EXISTS "session" ADD CONSTRAINT IF NOT EXISTS "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

/*
# Create quote_requests table for B2B inquiry form

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — requester's full name
  - `company_name` (text, not null) — company or organization
  - `business_email` (text, not null) — work email address
  - `phone` (text) — phone number, optional
  - `country` (text, not null) — country of the buyer
  - `product_category` (text, not null) — which product line they are interested in
  - `estimated_quantity` (text) — estimated order quantity, free text
  - `packaging_requirement` (text) — packaging needs, free text
  - `oem_private_label` (boolean, default false) — whether they want OEM/private label
  - `message` (text) — additional message from the buyer
  - `status` (text, default 'new') — inquiry status for internal tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `quote_requests`.
- This is a no-auth public form: allow anon + authenticated INSERT only.
- No SELECT, UPDATE, or DELETE from the public client — inquiries are private business data.
- The Greeny team reads/manages inquiries through the Supabase dashboard (service role).

3. Notes
- Only INSERT is exposed to the public anon key, so visitors can submit quote requests
  but cannot read, modify, or delete any inquiries.
- All other operations require the service role key (server-side only).
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text NOT NULL,
  business_email text NOT NULL,
  phone text,
  country text NOT NULL,
  product_category text NOT NULL,
  estimated_quantity text,
  packaging_requirement text,
  oem_private_label boolean DEFAULT false,
  message text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests"
ON quote_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
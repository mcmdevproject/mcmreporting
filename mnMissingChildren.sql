--user table--
CREATE TABLE "users" (
    "id" serial primary key,
    "username" varchar(80),
    "password" varchar (240),
    "admin" boolean default FALSE,
    "approved" boolean default FALSE
);

--research data table --
CREATE TABLE "case_data" (
"id" serial primary key,
"mcm_number" varchar (20), 
"intake_date" TIMESTAMP DEFAULT NOW(),
"age" varchar(2),
"gender" text, 
"last_seen" date,
"reported_missing" date,
"people_served" integer,
"city" varchar(30),
"county" int REFERENCES counties (id) ON DELETE CASCADE,
"state" text,
"school" int REFERENCES schools (id) ON DELETE CASCADE,
"start_case_type" text,
"end_case_type" text,
"disposition" text,
"close_date" date,
"referral_type" text,
"case_status" varchar(80)
);

--field reference tables--

CREATE TABLE "counties" (
"id" serial primary key,
"county_name" varchar (20)
);
    
INSERT INTO counties (county_name) VALUES ('Not in Minnesota'), ('Aitkin'), ('Anoka'), ('Becker'), ('Beltrami'), ('Benton'), 
('Big Stone'), ('Blue Earth'), ('Brown'), ('Carlton'), ('Carver'), ('Cass'), ('Chippewa'), ('Chisago'), ('Clay'), 
('Clearwater'), ('Cook'), ('Cottonwood'), ('Crow Wing'), ('Dakota'), ('Dodge'), ('Douglas'), ('Faribault'), ('Fillmore'), 
('Freeborn'), ('Goodhue'), ('Grant'), ('Hennepin'), ('Houston'), ('Hubbard'), ('Isanti'), ('Itasca'), ('Jackson'), 
('Kanabec'), ('Kandiyohi'), ('Kittson'), ('Koochiching'), ('Lac qui Parle'), ('Lake'), ('Lake of the Woods'), ('Le Sueur'), 
('Lincoln'), ('Lyon'), ('McLeod'), ('Mahnomen'), ('Marshall'), ('Martin'), ('Meeker'), ('Mille Lacs'), ('Morrison'), 
('Mower'), ('Murray'), ('Nicollet'), ('Nobles'), ('Norman'), ('Olmstead'), ('Otter Tail'), ('Pennington'), ('Pine'), 
('Pipestone'), ('Polk'), ('Pope'), ('Ramsey'), ('Red Lake'), ('Redwood'), ('Renville'), ('Rice'), ('Rock'), ('Roseau'), 
('Saint Louis'), ('Scott'), ('Sherburne'), ('Sibley'), ('Stearns'), ('Steele'), ('Stevens'), ('Swift'), ('Todd'), 
('Traverse'), ('Wabasha'), ('Wadena'), ('Waseca'), ('Washington'), ('Watonwan'), ('Wilkin'), ('Winona'), ('Wright'), 
('Yellow Medicine');

CREATE TABLE "law_enforcement" (
"id" serial primary key,
"agency" varchar (100)
);

CREATE TABLE "schools" (
"id" serial primary key,
"school_name" varchar (100)
);


CREATE TABLE "race_ethnicity" (
"id" serial primary key,
"race_ethnicity" varchar (50)
);
    
INSERT INTO race_ethnicity (race_ethnicity) VALUES 
('African-American'), ('Asian/Pacific Islander'), 
('Caucasian'), ('Latin'), ('Native American');

CREATE TABLE "vulnerabilities" (
"id" serial primary key,
"vulnerability" varchar (100)
);

INSERT INTO vulnerabilities (vulnerability) VALUES ('ADD/ADHD'), ('ASD'), ('Alcohol use/abuse'), ('Anxiety'), 
('Bipolar Disorder'), ('Depression (Clinical)'), ('Depression (Situational)'), ('Drug use/abuse'), 
('Economic exploitation (history'), ('Emotional abuse (history)'), ('Gang association'), ('ODD'), 
('Labor Exploitation (history)'), ('Luring/grooming by adult'), ('Luring/grooming by child'), ('Missing from care'), 
('Physical Abuse (history)'), ('Runaway (history)'), ('Sexual Abuse (history)'), ('Sexual exploitation (history)'), 
('Sexual Minority');


--Join tables--

CREATE TABLE "case_lawenforcement_denial" (
"case_data_id" int REFERENCES case_data (id) ON DELETE CASCADE,
"law_enforcement_id" int REFERENCES law_enforcement (id) ON DELETE CASCADE,
"jurisdictional_denial" boolean
);


CREATE TABLE "case_race_ethnicity" (
"case_data_id" int REFERENCES case_data (id) ON DELETE CASCADE,
"race_ethnicity_id" int REFERENCES race_ethnicity (id) ON DELETE CASCADE
);

CREATE TABLE "case_vulnerabilities" (
"case_data_id" int REFERENCES case_data (id) ON DELETE CASCADE,
"vulnerabilities_id" int REFERENCES vulnerabilities (id) ON DELETE CASCADE
);
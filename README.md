# MCM Reporting

An application built for Missing Children Minnesota, to allow case workers to fill out an intake form for a new case, which will then be able to be printed to a pdf. In addition to this, a portion of the data from the form will be stored in a database for reporting purposes.

## Built With

HTML5, CSS3, AngularJS, NodeJS, Express, Passport, PostgreSQL, Bootstrap, Angular Materials, Sweet Alerts, and ChartsJS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

1. Install [Node.js](https://nodejs.org/en/)
1. Upgrade npm to latest using `npm i -g npm`
1. Install PostgreSQL and create the mnMissingChildren database from the `psql` command line
1. Execute the mnMissingChildren.sql file to create the required tables
1. Execute an `INSERT INTO user (id,username,password,admin) VALUES (1,'test','test',TRUE)` command to create a test user
1. If you are installing on Windows, bcrypt has a dependency that must be installed manually ahead of time: https://github.com/kelektiv/node.bcrypt.js/wiki/Installation-Instructions#microsoft-windows
1. Clone this repo to your local machine
1. Install the required dependencies via Node.js by using `npm install`

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- PostgreSQL
- Dependencies
	- angular
	- angular-material
	- angular-route
	- bcrypt
	- body-parser
	- bootstrap
	- dotenv
	- dotenv-node
	- express
	- express-session
	- file-saver
	- jspdf
	- material
	- passport
	- passport-local
	- path
	- pg
	- sweetalert

### Installing

After the dependencies are installed, use ```npm start``` to start the server, which will run on port 5001.

### SQL script for database

```sql
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

INSERT INTO counties (county_name) VALUES ('Not in Minnesota'), ('Aitkin'), ('Anoka'), ('Becker'), ('Beltrami'), 
('Benton'), ('Big Stone'), ('Blue Earth'), ('Brown'), ('Carlton'), ('Carver'), ('Cass'), ('Chippewa'), ('Chisago'), 
('Clay'), ('Clearwater'), ('Cook'), ('Cottonwood'), ('Crow Wing'), ('Dakota'), ('Dodge'), ('Douglas'), ('Faribault'), 
('Fillmore'), ('Freeborn'), ('Goodhue'), ('Grant'), ('Hennepin'), ('Houston'), ('Hubbard'), ('Isanti'), ('Itasca'), 
('Jackson'), ('Kanabec'), ('Kandiyohi'), ('Kittson'), ('Koochiching'), ('Lac qui Parle'), ('Lake'), ('Lake of the Woods'), 
('Le Sueur'), ('Lincoln'), ('Lyon'), ('McLeod'), ('Mahnomen'), ('Marshall'), ('Martin'), ('Meeker'), ('Mille Lacs'), 
('Morrison'), ('Mower'), ('Murray'), ('Nicollet'), ('Nobles'), ('Norman'), ('Olmstead'), ('Otter Tail'), ('Pennington'), 
('Pine'), ('Pipestone'), ('Polk'), ('Pope'), ('Ramsey'), ('Red Lake'), ('Redwood'), ('Renville'), ('Rice'), ('Rock'), 
('Roseau'), ('Saint Louis'), ('Scott'), ('Sherburne'), ('Sibley'), ('Stearns'), ('Steele'), ('Stevens'), ('Swift'), 
('Todd'), ('Traverse'), ('Wabasha'), ('Wadena'), ('Waseca'), ('Washington'), ('Watonwan'), ('Wilkin'), ('Winona'), 
('Wright'), ('Yellow Medicine');

CREATE TABLE "law_enforcement" (
"id" serial primary key,
"agency" varchar (100)
);

-- Example Law Enforcement Agencies --
INSERT INTO law_enforcement (agency) VALUES ('Minneapolis Police Department'), ('Hennepin County Sheriffs Office'), 
('Saint Paul Police Department'), ('Ramsey County Sheriffs Office');

-- SQL command to add new law enforcement agencies -- 
INSERT INTO law_enforcement (agency) VALUES ('Agency goes here');

CREATE TABLE "schools" (
"id" serial primary key,
"school_name" varchar (100)
);

-- Example School Districts -- 
INSERT INTO schools (school_name) VALUES ('Minneapolis Public School District'), ('St. Paul Public School District'), 
('West St. Paul-Mendota Hts.-Eagan')

-- SQL command to add new school districts --
INSERT INTO schools (school_name) VALUES ('District goes here');

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

INSERT INTO vulnerabilities (vulnerability) VALUES ('ADD/ADHD'), ('ASD'), ('Alcohol use/abuse'), ('Anxiety'), ('Bipolar Disorder'), ('Depression (Clinical)'), ('Depression (Situational)'), ('Drug use/abuse'), ('Economic exploitation (history'), ('Emotional abuse (history)'), ('Gang association'), ('ODD'), ('Labor Exploitation (history)'), ('Luring/grooming by adult'), ('Luring/grooming by child'), ('Missing from care'), ('Physical Abuse (history)'), ('Runaway (history)'), ('Sexual Abuse (history)'), ('Sexual exploitation (history)'), ('Sexual Minority');


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
```

## Screen Shots

![Image of Login Page](https://github.com/mcmdevproject/mcmreporting/blob/master/server/public/images/ScreenShotLogin.png)

![Image of Landing Page](https://github.com/mcmdevproject/mcmreporting/blob/master/server/public/images/ScreenShotLanding.png)

![Image of Intake Page](https://github.com/mcmdevproject/mcmreporting/blob/master/server/public/images/ScreenShotIntake.png)

![Image of Edit Page](https://github.com/mcmdevproject/mcmreporting/blob/master/server/public/images/ScreenShotEdit.png)

![Image of Global Page](https://github.com/mcmdevproject/mcmreporting/blob/master/server/public/images/ScreenShotGlobal.png)

![Image of Annual Page](https://github.com/mcmdevproject/mcmreporting/blob/master/server/public/images/ScreenShotAnnual.png)

![Image of Manage Page](https://github.com/mcmdevproject/mcmreporting/blob/master/server/public/images/ScreenShotManage.png)

## Authors

* Alex Hand, Bizz Michelson, Jessica Brown, Kitty Walders, and Shara Seaman

## Acknowledgements

* Thanks to Teresa Lhotka, and Missing Children Minnesota for all of their help and support.
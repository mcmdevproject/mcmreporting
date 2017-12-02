# MCM Reporting

An application built for ![Missing Children Minnesota] (http://missingchildrenmn.com/) to allow case workers to fill out an intake form for a new case and print as a PDF. A select portion of the data from the intake form will be stored in a database for reporting purposes. Reports are dynamically generated based on all case data. Administrators also can manage users.

## Built With

HTML5, CSS3, AngularJS, NodeJS, Express, Passport, PostgreSQL, Bootstrap, Angular Materials, Sweet Alerts, ChartsJS, FileSaver, and JSPDF.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
Clone these files to your local machine, ensure that you have a PostgreSQL database correctly configured, and make sure to install the required dependencies via Node.js.

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

```sql
--user table--
CREATE TABLE "users" (
    "id" serial primary key,
    "username" varchar(80),
    "password" varchar (240),
    "admin" boolean default FALSE
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
"city" int REFERENCES cities (id) ON DELETE CASCADE,
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

CREATE TABLE "cities" (
"id" serial primary key,
"city_name" varchar (50)
);

CREATE TABLE "counties" (
"id" serial primary key,
"county_name" varchar (20)
);
    --sample data--
    INSERT INTO counties (county_name) VALUES ('Sherburne'), ('Sibley'), ('Stearns'), 
    ('Steele'), ('Stevens'), ('Swift'), ('Todd'), ('Traverse'), 
    ('Wabasha'), ('Wadena'), ('Waseca'), ('Washington'), ('Watonwan'), 
    ('Wilkin'), ('Winona'), ('Wright'), ('Yellow Medicine');

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
    --sample data--
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

![Image of Login Page](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotLogin.png)

![Image of Landing Page](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotLanding.png)

![Image of Intake Page](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotIntake.png)

![Image of Edit Page](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotEdit.png)

![Image of Core Reports-Global Dashboard](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotCoreReports-GlobalDashboard.png)

![Image of Core Reports-Preventitive Insights Dashboard](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotCoreReports-PreventitiveInsights.png)

![Image of Core Reports-Annual Dashboard](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotCoreReports-AnnualDashboard.png)

![Image of Custom Reports Page](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotCustomReport.png)

![Image of Manage Page](https://github.com/mcmdevproject/mcmreporting/blob/master/images/ScreenShotManage.png)

## Training Documentation
![Documentation Link](https://docs.google.com/document/d/1MZs07rzlsEQSh6nYC7bSStXdK9RbekO0uRIdiWWzbuE/edit?usp=sharing)

## Authors

* Alex Hand, Bizz Michelson, Jessica Brown, Kitty Walders, and Shara Seaman

## Acknowledgements

* Thanks to Teresa Lhotka, and Missing Children Minnesota for all of their help and support.
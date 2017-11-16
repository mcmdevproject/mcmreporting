var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

//get for all case data
router.get('/', function (req, res) {
  console.log('In Charts Get for all case data');
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        client.query('SELECT * FROM case_data JOIN counties ON case_data.county = counties.id JOIN cities ON case_data.city = cities.id JOIN schools ON case_data.school = schools.id', function (queryErr, resultObj) {
          done();
          if (queryErr) {
            res.sendStatus(500);
          } else {
            res.send(resultObj.rows);
          }
        });
      }
    })
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

router.get('/join_tables_reports', function (req, res) {
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        client.query('SELECT * FROM case_data FULL JOIN case_vulnerabilities ON case_data.id = case_vulnerabilities.case_data_id FULL JOIN vulnerabilities ON case_vulnerabilities.vulnerabilities_id = vulnerabilities.id FULL JOIN case_lawenforcement_denial ON case_data.id = case_lawenforcement_denial.case_data_id FULL JOIN law_enforcement ON case_lawenforcement_denial.law_enforcement_id = law_enforcement.id FULL JOIN case_race_ethnicity ON case_data.id = case_race_ethnicity.case_data_id FULL JOIN race_ethnicity ON case_race_ethnicity.race_ethnicity_id = race_ethnicity.id', function (queryErr, resultObj) {
          done();
          if (queryErr) {
            res.sendStatus(500);
          } else {
            res.send(resultObj.rows);
          }
        });
      }
    })
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

//post for custom tables
router.post('/custom', function (req, res) {
  var custom = req.body
  console.log('In Get for custom info', custom, custom.state);
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        var queryArray = []
        var valueArray = []
        var tempArray = []
        var count = 0
        var selectStatement = ''
        if (custom.agency || custom.jurisdictional_denial || custom.race_ethnicity || custom.vulnerability !== undefined) {
          var selectStatement = 'SELECT * FROM case_data FULL JOIN case_vulnerabilities ON case_data.id = case_vulnerabilities.case_data_id FULL JOIN vulnerabilities ON case_vulnerabilities.vulnerabilities_id = vulnerabilities.id FULL JOIN case_lawenforcement_denial ON case_data.id = case_lawenforcement_denial.case_data_id FULL JOIN law_enforcement ON case_lawenforcement_denial.law_enforcement_id = law_enforcement.id FULL JOIN case_race_ethnicity ON case_data.id = case_race_ethnicity.case_data_id FULL JOIN race_ethnicity ON case_race_ethnicity.race_ethnicity_id = race_ethnicity.id WHERE '
        } else {
          var selectStatement = 'SELECT * FROM case_data WHERE '
        }
        if (custom.agency !== undefined) {
          var agency$ = 'law_enforcement.id = (SELECT id FROM law_enforcement WHERE agency = $'
          tempArray.push(agency$)
          valueArray.push(custom.agency)
        }
        if (custom.jurisdictional_denial !== undefined) {
          var jurisdictional_denial$ = 'case_lawenforcement_denial.jurisdictional_denial = $'
          tempArray.push(jurisdictional_denial$)
          valueArray.push(custom.jurisdictional_denial)
        }
        if (custom.race_ethnicity !== undefined) {
          var race_ethnicity$ = 'race_ethnicity.id = (SELECT id FROM race_ethnicity WHERE race_ethnicity = $'
          tempArray.push(race_ethnicity$)
          valueArray.push(custom.race_ethnicity)
        }
        if (custom.vulnerability!== undefined) {
          var vulnerability$ = 'vulnerability.id = (SELECT id FROM vulnerabilities WHERE vulnerability = $'
          tempArray.push(vulnerability$)
          valueArray.push(custom.vulnerability)
        }
        if (custom.start_case_type !== undefined) {
          var start_case_type$ = 'start_case_type = $'
          tempArray.push(start_case_type$);
          valueArray.push(custom.start_case_type);
        }
        if (custom.state !== undefined) {
          var state$ = 'state = $'
          tempArray.push(state$)
          valueArray.push(custom.state)
        }
        if (custom.county_name !== undefined) {
          var county_name$ = '(SELECT id FROM counties WHERE county = $'
          tempArray.push(county_name$);
          valueArray.push(custom.county_name);
        }
        if (custom.school_name !== undefined) {
          var school_name$ = '(SELECT id FROM schools WHERE school = $'
          tempArray.push(school_name$);
          valueArray.push(custom.school_name);
        }
        if (custom.age !== undefined) {
          var age$ = ' age = $'
          tempArray.push(age$);
          valueArray.push(custom.age);
        }
        if (custom.gender !== undefined) {
          var gender$ = ' gender = $'
          tempArray.push(gender$);
          valueArray.push(custom.gender);
        }
        if (custom.referral_type !== undefined) {
          var referral_type$ = ' referral_type = $'
          tempArray.push(referral_type$);
          valueArray.push(custom.referral_type);
        } // end if list

      
        tempArray.forEach(function (currentValue, index, array) {
          console.log('line 113, currentValue', currentValue)
          if (currentValue === '(SELECT id FROM counties WHERE county = $')  {
            count++
            queryArray.push(currentValue + count + ')')
            console.log('this is the county if statement')
          } 
          if (currentValue === '(SELECT id FROM schools WHERE school = $')  {
            count++
            queryArray.push(currentValue + count + ')')
            console.log('this is the school if statement')  
          }
          if (currentValue === 'law_enforcement.id = (SELECT id FROM law_enforcement WHERE agency = $')  {
            count++
            queryArray.push(currentValue + count + ')')
            console.log('this is the agency if statement')
          } 
          if (currentValue === 'race_ethnicity.id = (SELECT id FROM race_ethnicity WHERE race_ethnicity = $')  {
            count++
            queryArray.push(currentValue + count + ')')
            console.log('this is the race/ethnicity if statement')
          } 
          if (currentValue === 'vulnerability.id = (SELECT id FROM vulnerabilities WHERE vulnerability = $')  {
            count++
            queryArray.push(currentValue + count + ')')
            console.log('this is the vulnerability if statement')
          }
          else {
            count++
            queryArray.push(currentValue + count)
            console.log('this is the else statement')
          } //end else 
        }) //end tempArray.forEach
          var query = queryArray.join(' AND ');
          console.log('query', query);
          var sqlQuery = selectStatement + query        
          console.log('in SQL', sqlQuery)
          console.log('in SQL values', valueArray)
        
          client.query(sqlQuery, valueArray, function (queryErr, resultObj) {
            done();
            console.log('resultObj', resultObj.rows)
            if (queryErr) {
              res.sendStatus(500);
            } else {
              res.send(resultObj.rows);
            } //if/else
          }) //client query
       
      } //end pool else
    }) //end pool.connect
  } else {
    console.log('not logged in');
    res.send(false);//end if pool
  } //end get custom charts - pairs w 59
})

module.exports = router;



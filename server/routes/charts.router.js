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

// Handles Ajax request for user information if user is authenticated
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

//get for custom tables
router.get('/custom', function (req, res) {
  var custom = req.body;
  console.log('In Get for custom info', custom);
  // // check if logged in
  // if (req.isAuthenticated()) {
  //   pool.connect(function (conErr, client, done) {
  //     if (conErr) {
  //       res.sendStatus(500);
  //     } else {
  //       var queryArray = []
  //       var valueArray = []
  //       var tempArray = []
  //       if (custom.start_case_type !== undefined) {
  //         var start_case_type = 'WHERE start_case_type = $'
  //         tempArray.push(start_case_type);
  //         valueArray.push(custom.start_case_type);
  //       }
  //       if (custom.state !== undefined) {
  //         var state = 'WHERE age = $'
  //         tempArray.push(state);
  //         valueArray.push(custom.state);
  //       }
  //       if (custom.county_name !== undefined) {
  //         var county_name = '(SELECT id FROM counties WHERE county = $'
  //         tempArray.push(county_name);
  //         valueArray.push(gender.county_name);
  //       }
  //       if (custom.school_name !== undefined) {
  //         var school_name = '(SELECT id FROM schools WHERE school = $'
  //         tempArray.push(school_name);
  //         valueArray.push(custom.school_name);
  //       }
  //       if (custom.age !== undefined) {
  //         var age = 'WHERE age = $'
  //         tempArray.push(age);
  //         valueArray.push(custom.age);
  //       }
  //       if (custom.gender !== undefined) {
  //         var gender = 'WHERE gender = $'
  //         tempArray.push(gender);
  //         valueArray.push(custom.gender);
  //       }
  //       if (custom.referral_type !== undefined) {
  //         var referral_type = 'WHERE referral_type = $'
  //         tempArray.push(referral_type);
  //         valueArray.push(referral_type);
  //       } // end list of queries

  //       createQuery();
  //     } //end pool else
  //   }) //end pool.connect
  // } else {
  //   console.log('not logged in');
  //   res.send(false);//end if pool
  }) //end get custom charts - pairs w 59

  //_____________________

//   var createQuery = function () {
//     tempArray.forEach(function (currentValue, index, array) {
//       if (currentValue == '(SELECT id FROM counties WHERE county = $' || '(SELECT id FROM schools WHERE school = $') {
//         count++
//         queryArray.push(currentValue + count + ')')
//         console.log('this is the if statement')
//       } else {
//         count++
//         queryArray.push(currentValue + count)
//         console.log('this is the else statement')
//       } //end else 
//       var query = queryArray.join(', ');
//       console.log('query', query);
//       var sqlQuery = 'SELECT * FROM case_data' + query
//       client.query(sqlQuery, valueArray, function (queryErr, resultObj) {
//         done();
//         if (queryErr) {
//           res.sendStatus(500);
//         } else {
//           res.send(resultObj.rows);
//         } //if/else
//       }) //client query
//     }) //end tempArray.forEach
//   }; //end create query

// })

module.exports = router;



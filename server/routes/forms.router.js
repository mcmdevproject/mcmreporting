var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

//Requests for populating form fields
router.get('/cities', function (req, res) {
  console.log('In cities Get for intake');
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        client.query('SELECT * FROM cities', function (queryErr, resultObj) {
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
});//end cities Get call

router.get('/counties', function (req, res) {
  console.log('In counties Get for intake');
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        client.query('SELECT * FROM counties', function (queryErr, resultObj) {
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
}); //end counties get call

router.get('/lawEnforcement', function (req, res) {
  console.log('In lawEnforcement Get for intake');
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        client.query('SELECT * FROM law_enforcement', function (queryErr, resultObj) {
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
});// end law enforcement Get call

router.get('/schools', function (req, res) {
  console.log('In schools Get for intake');
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        client.query('SELECT * FROM schools', function (queryErr, resultObj) {
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
}); //end schools get call

//Requests for new intake forms.
router.post('/newIntake', function (req, res) {
  var newIntake = req.body;
  console.log('In Post for new intake', newIntake);
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        var sqlQuery = 'INSERT INTO case_data (mcm_number, intake_date, age, gender, last_seen, reported_missing, people_served, city, county, state, school, start_case_type, end_case_type, disposition, close_date, referral_type) VALUES ($1, $2, $3, $4, $5, $6, $7, (SELECT id FROM cities WHERE city = $8), (SELECT id FROM counties WHERE county = $9), $10, (SELECT id FROM schools WHERE school = $11), $12, $13, $14, $15, $16)'
        var valueArray = [newIntake.mcm_number, newIntake.intake_date, newIntake.age, newIntake.gender, newIntake.last_seen, newIntake.reported_missing, newIntake.people_served, newIntake.city, newIntake.county, newIntake.state, newIntake.school, newIntake.start_case_type, newIntake.end_case_type, newIntake.disposition, newIntake.close_date, newIntake.referral_type]
        client.query(sqlQuery, valueArray, function (queryErr, resultObj) {
          done();
          if (queryErr) {
            res.sendStatus(500);
          } else {
            res.sendStatus(202);
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
}); //end /newIntake

router.post('/newVulnerabilities', function (req, res) {
  var newVulnId = req.body.id;
  var newVulnArray = req.body.array
  console.log('In Post for new vulnerabilities', newVulnId, newVulnArray);
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
          for(let i = 0; i < newVulnArray.length; i++) {
            var sqlQuery = 'INSERT INTO case_vulnerabilities (case_data_id, vulnerabilities_id) VALUES $1, (SELECT (id) FROM vulnerabilites WHERE vulnerability = $2) '
            var valueArray = [newVulnId, newVulnArray[i]]
            client.query(sqlQuery, valueArray, function (queryErr, resultObj) {
            done();
            if (queryErr) {
              res.sendStatus(500);
              } else {
              res.send(202);
            } //end if statement
          } //end for loop
        )}; //end else
      } // end big else
    }) //end pool
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
}); //end input vulnerabilities Post

router.get('/caseToEdit: id', function (req, res) {
  var mcmCase = {id: req.params.id};
  console.log('In get for caseToEdit', mcmCase);
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        client.query('SELECT * FROM case_data FULL JOIN case_vulnerabilities ON case_data.id = case_vulnerabilities.case_data_id FULL JOIN vulnerabilities ON case_vulnerabilities.vulnerabilities_id = vulnerabilities.id FULL JOIN case_lawenforcement_denial ON case_data.id = case_lawenforcement_denial.case_data_id FULL JOIN law_enforcement ON case_lawenforcement_denial.law_enforcement_id = law_enforcement.id FULL JOIN case_race_ethnicity ON case_data.id = case_race_ethnicity.case_data_id FULL JOIN race_ethnicity ON case_race_ethnicity.race_ethnicity_id = race_ethnicity.id WHERE case_data.mcm_number = mcmCase', function (queryErr, resultObj) {
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
}); //end editForm get call

router.put('/editIntake', function (req, res) {
  var edit = req.body;
  console.log('In put for edit intake', edit);
  // check if logged in
  if (req.isAuthenticated()) {
    pool.connect(function (conErr, client, done) {
      if (conErr) {
        res.sendStatus(500);
      } else {
        var sqlQuery = 'UPDATE case_data SET age=$1, gender=$2, last_seen = $3, reported_missing = $4, people_served = $5, (SELECT id FROM cities WHERE city = $6), (SELECT id FROM counties WHERE county = $7), state = $8, (SELECT id FROM schools WHERE school= $9), start_case_type = $10, end_case_type = $11, disposition = $12, close_date=$13 referral_type=$14 WHERE mcm_number = $15'
        var valueArray = [edit.age, edit.gender, edit.last_seen, edit.reported_missing, edit.people_served, edit.city, edit.county, edit.state, edit.school, edit.start_case_type, edit.end_case_type, edit.disposition, edit.close_date, edit.referral_type, edit.mcm_number]
        client.query(sqlQuery, valueArray, function (queryErr, resultObj) {
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
}); //end put edit call
module.exports = router;

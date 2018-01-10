var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

//on New Intake Page Load

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

//new Intake Form
router.post('/newIntake', function (req, res) {      //  --1
  var newIntake = req.body;
  console.log('In Post for new intake', newIntake);
  // check if logged in
  if (req.isAuthenticated()) { // --2
    pool.connect(function (conErr, client, done) { // --3 
      if (conErr) {
        res.sendStatus(500);
      } 
      else { //--4     - main query -
        var caseDataQuery = 'INSERT INTO case_data (mcm_number, intake_date, age, gender, last_seen, reported_missing, people_served, city, county, state, school, start_case_type, end_case_type, disposition, close_date, referral_type, case_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, (SELECT id FROM counties WHERE county_name = $9), $10, (SELECT id FROM schools WHERE school_name = $11), $12, $13, $14, $15, $16, $17) RETURNING id;' 
        var caseDataValueArray = [newIntake.mcm_number, newIntake.intake_date, newIntake.age, newIntake.gender, newIntake.last_seen, newIntake.reported_missing, newIntake.people_served, newIntake.city_name, newIntake.county_name, newIntake.state, newIntake.school_name, newIntake.start_case_type, newIntake.end_case_type, newIntake.disposition, newIntake.close_date, newIntake.referral_type, newIntake.case_status]
        console.log('caseDataQuery, caseDataValue', caseDataQuery, caseDataValueArray)
        client.query(caseDataQuery, caseDataValueArray, function (queryErr, resultObj) {  // --5
          done(); 
          if (queryErr) { // for id
            console.log('caseData query Error', queryErr)
            res.sendStatus(500); 
          } else { // - vulnerabilities query  --6
              //variables for vulnerabilities
              console.log('id', resultObj.rows[0].id)             
              var tempVArray = []
              var vulnerabilityArray = []
              var vulnerabilityCount = 1
              
              var createVulnQuery = function() {
                for (let i = 0; i < newIntake.case_vulnerabilities.length; i++) {
                  tempVArray.push('('+resultObj.rows[0].id+ ', (Select id FROM vulnerabilities WHERE vulnerability = $'+vulnerabilityCount++ + '))');
                  vulnerabilityArray.push(newIntake.case_vulnerabilities[i].name);
                  }  //end for loop
                } //end create Query function
              
                createVulnQuery(); 
                console.log('tempArray', tempVArray)
                var vulnerabilities$ = tempVArray.join(', ')
                var vulnerabilityInsert = 'INSERT INTO case_vulnerabilities(case_data_id, vulnerabilities_id) VALUES ' 
                var vulnerabilityQuery = vulnerabilityInsert + vulnerabilities$
                console.log('Query, valueArray', vulnerabilityQuery, vulnerabilityArray)
              
                client.query(vulnerabilityQuery, vulnerabilityArray, function (queryErr, resultVulnerability) { // --7
              done();
                if (queryErr) {
                  console.log('Vulnerability query Error', queryErr)
                res.sendStatus(500);
                } else { // start race_ethnicity query  //--8
                  console.log('219 newIntake.race_ethnicity', newIntake.race_ethnicity)  
                    //variables for race_enthinicity                 
                    var tempRaceArray = []
                    var raceValueArray = []
                    var raceCount = 1                   
                    var createRaceQuery = function() {
                      console.log('createRaceQuery running', newIntake.race_ethnicity[0].name)
                      for (let j = 0; j < newIntake.race_ethnicity.length; j++) {
                      console.log('for loop running w/ j', j);
                      tempRaceArray.push('('+resultObj.rows[0].id+ ', (Select id FROM race_ethnicity WHERE race_ethnicity = $'+raceCount++ + '))');
                      raceValueArray.push(newIntake.race_ethnicity[j].name);
                       }  
                      console.log('raceValueArray', raceValueArray)
                      } //end function
                    
                      createRaceQuery();
                      console.log('tempArray', tempRaceArray)
                      var raceValue$ = tempRaceArray.join(', ')
                      var raceInsert = 'INSERT INTO case_race_ethnicity (case_data_id, race_ethnicity_id) VALUES ' 
                      var raceQuery = raceInsert + raceValue$
                      console.log('reSqlQuery, valueArray', raceQuery, raceValueArray)
                    
                      client.query(raceQuery, raceValueArray, function (queryErr, raceResult) { // --9
                    done();
                      if (queryErr) {
                        console.log(queryErr)
                        res.sendStatus(500);
                      } else {  // -- 10
                        //start agency Query
                        var tempAgencyArray = []
                        var agencyArray = []
                        var agencyCount = 1
                        
                        var createAgencyQuery = function() {
                          for (let l = 0; l < newIntake.case_lawenforcement_denial.length; l++) {
                            tempAgencyArray.push('('+resultObj.rows[0].id+ ', (Select id FROM law_enforcement WHERE agency = $'+agencyCount++ + '), $' +agencyCount++ +')')
                            agencyArray.push(newIntake.case_lawenforcement_denial[l].name, newIntake.case_lawenforcement_denial[l].denial);
                            }  //end for loop
                          } //end creqte Query function
                        
                          createAgencyQuery(); //2nd query for vulnerabilites
                          console.log('tempAgencyArray', tempAgencyArray)
                          var agencies$ = tempAgencyArray.join(', ')
                          var agencyInsert = 'INSERT INTO case_lawenforcement_denial (case_data_id, law_enforcement_id, jurisdictional_denial) VALUES ' 
                          var agencyQuery = agencyInsert + agencies$
                          console.log('Query, agencyQuery', agencyQuery, agencyArray)
                        
                          client.query(agencyQuery, agencyArray, function (queryErr, resultAgency) { // --11
                        done();
                          if (queryErr) { //if 2nd query fails
                            console.log('Agency query Error', queryErr)
                          res.sendStatus(500);
                          } else {  // --12
                                res.sendStatus(202);
                                } // --12
                              
                        }) // -- 11
                      } // --10                       
              }) // --9
              } // --8
            }) // --7
          } // --6
        }) // --5  
      } // --4
    }) // --3
  } else { // --2
    console.log('not logged in');
    res.send(false);
  } //end authentication else  
}); //end /newIntake  --1


// locate case to Edit    -   get query to return names of join table stuff.
router.get('/caseToEdit/:id', function (req, res) {
  var mcmCase = req.params.id
  console.log('In get for caseToEdit', mcmCase);
  if (req.isAuthenticated()) {
    console.log('isAuthentication')
    pool.connect(function (conErr, client, done) {
      console.log('poolconnect')
      if (conErr) {
        res.sendStatus(500);
      } else {
        var valueArray = [mcmCase]
        console.log('valueArray', valueArray)
        editQuery = 'SELECT * FROM case_data FULL JOIN case_lawenforcement_denial ON case_lawenforcement_denial.case_data_id = case_data.id FULL JOIN law_enforcement ON case_lawenforcement_denial.law_enforcement_id = law_enforcement.id FULL join case_race_ethnicity ON case_race_ethnicity.case_data_id = case_data.id FULL Join race_ethnicity On case_race_ethnicity.race_ethnicity_id = race_ethnicity.id FULL Join case_vulnerabilities On case_vulnerabilities.case_data_id = case_data.id FULL Join vulnerabilities On case_vulnerabilities.vulnerabilities_id = vulnerabilities.id FULL JOIN counties on case_data.county = counties.id Where mcm_number = $1;' 
        client.query(editQuery, valueArray, function (queryErr, resultObj) {
          done();
          if (queryErr) {
            console.log('done 500', queryErr)
            res.sendStatus(500);
          } else {
            res.send(resultObj.rows);
            console.log('resultobj', resultObj.rows)
          }
        }) // end query
      } // end pool else
    }) // end pool connect
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  } //end else
}); //end editForm get call

//edit fields
router.put('/editIntake', function (req, res) { //1
  var edit = req.body;
  console.log('In Put for edit intake', edit);
  // check if logged in
  if (req.isAuthenticated()) {  //2
    pool.connect(function (conErr, client, done) { //3
      if (conErr) {
        console.log('Pool.connect error', conErr);
        res.sendStatus(500);
      } 
      else { //   - main query -  4
        var caseDataQuery = 'UPDATE case_data SET age = $1, gender = $2, school = (SELECT id FROM schools WHERE school_name = $3), start_case_type = $4, end_case_type = $5, disposition = $6, referral_type = $7, case_status = $8, city = $9, close_date = $10, county = (SELECT id FROM counties WHERE county_name = $11), people_served = $12, last_seen = $13, reported_missing = $14, state = $15 Where mcm_number = $16;' 
        var caseDataValueArray = [edit.age, edit.gender, edit.school_name, edit.start_case_type, edit.end_case_type, edit.disposition, edit.referral_type, edit.case_status, edit.city, edit.close_date, edit.county, edit.mcm_number, edit.people_served, edit.last_seen, edit.reported_missing, edit.state]
        console.log('Update case_data Query', caseDataQuery)
        client.query(caseDataQuery, caseDataValueArray, function (queryErr, resultObj) { 
          done();
          if (queryErr) { 
            console.log('caseData query Error', queryErr)
            res.sendStatus(500); 
          } else {
            var deleteVulnerabilitiesQuery = 'DELETE From case_vulnerabilities WHERE case_data_id = (SELECT id FROM case_data WHERE mcm_number = $1)';
            var deleteVulnerabilitiesArray = [edit.mcm_number]
            client.query(deleteVulnerabilitiesQuery, deleteVulnerabilitiesArray, function (queryErr, resultObj) { 
              done();
              console.log('deleteVulnerabilities Query', deleteVulnerabilitiesQuery);
              if (queryErr) { 
                console.log('caseData query Error', queryErr)
                res.sendStatus(500); 
              } else { // - for join tables 5

                var tempVArray = []
                var vulnerabilityArray = [edit.mcm_number]
                var vulnerabilityCount = 2
              
                var createVulnQuery = function() {
                  for (let i = 0; i < edit.case_vulnerabilities.length; i++) {
                  tempVArray.push('((Select id FROM case_data WHERE mcm_number = $1), (Select id FROM vulnerabilities WHERE vulnerability = $'+vulnerabilityCount++ + '))');
                  vulnerabilityArray.push(edit.case_vulnerabilities[i].name);
                  }  //end for loop
                } //end create Query function
              
                createVulnQuery(); 
                console.log('tempArray', tempVArray)
                var vulnerabilities$ = tempVArray.join(', ')
                var vulnerabilityInsert = 'INSERT INTO case_vulnerabilities(case_data_id, vulnerabilities_id) VALUES ' 
                var vulnerabilityQuery = vulnerabilityInsert + vulnerabilities$
                console.log('Query, valueArray', vulnerabilityQuery, vulnerabilityArray)
              
                client.query(vulnerabilityQuery, vulnerabilityArray, function (queryErr, resultVulnerability) { // --7
                done();
                  if (queryErr) {
                  console.log('Vulnerability query Error', queryErr)
                    res.sendStatus(500);
                    } //end vulnerability error 
                    else {
                      var deleteRaceQuery = 'DELETE From case_race_ethnicity WHERE case_data_id = (SELECT id FROM case_data WHERE mcm_number = $1)';
                      var deleteRaceArray = [edit.mcm_number]
                      client.query(deleteRaceQuery, deleteRaceArray, function (queryErr, resultObj) { 
                        done();
                        console.log('deleteRaceQuery', deleteRaceQuery);
                      if (queryErr) {
                        console.log('Vulnerability query Error', queryErr)
                          res.sendStatus(500);
                          } //end vulnerability error 
                          else {
                            var deleteRaceQuery = 'DELETE From case_race_ethnicity WHERE case_data_id = (SELECT id FROM case_data WHERE mcm_number = $1)';
                      var deleteRaceArray = [edit.mcm_number]
                      client.query(deleteRaceQuery, deleteRaceArray, function (queryErr, resultObj) { 
                        done();
                        console.log('deleteRaceQuery', deleteRaceQuery);
                      if (queryErr) {
                        console.log('deleteRace query Error', queryErr)
                          res.sendStatus(500);
                          } else {//end delete race error 
                            var tempRaceArray = []
                            var raceValueArray = [edit.mcm_number]
                            var raceCount = 2                   
                            var createRaceQuery = function() {
                              console.log('createRaceQuery running', edit.race_ethnicity[0].name)
                              for (let j = 0; j < edit.race_ethnicity.length; j++) {
                              console.log('for loop running w/ j', j);
                              tempRaceArray.push('((Select id FROM case_data WHERE mcm_number = $1), (Select id FROM race_ethnicity WHERE race_ethnicity = $'+raceCount++ + '))');
                              raceValueArray.push(edit.race_ethnicity[j].name);
                              }  
                              console.log('raceValueArray', raceValueArray)
                            } //end function
                                  
                            createRaceQuery();
                            console.log('tempArray', tempRaceArray)
                            var raceValue$ = tempRaceArray.join(', ')
                            var raceInsert = 'INSERT INTO case_race_ethnicity (case_data_id, race_ethnicity_id) VALUES ' 
                            var raceQuery = raceInsert + raceValue$
                            console.log('reSqlQuery, valueArray', raceQuery, raceValueArray)
                                  
                            client.query(raceQuery, raceValueArray, function (queryErr, raceResult) {
                              done();

                            if (queryErr) {
                              console.log('race query Error', queryErr)
                                res.sendStatus(500);
                            }
                              // } else {
                            //       var deleteAgencyQuery = 'DELETE From case_race_ethnicity WHERE case_data_id = (SELECT id FROM case_data WHERE mcm_number = $1)';
                            //       var deleteAgencyArray = [edit.mcm_number]
                            //       client.query(deleteAgencyQuery, deleteAgencyArray, function (queryErr, resultObj) { 
                            //         done();
                            //         console.log('deleteAgencyQuery', deleteAgencyQuery);
                            //       if (queryErr) {
                            //         console.log('deleteAgencyQuery Error', queryErr)
                            //           res.sendStatus(500);
                                      // } else {
                                      //   var tempAgencyArray = []
                                      //   var agencyArray = [edit.mcm_number]
                                      //   var agencyCount = 2
                                        
                                      //   var createAgencyQuery = function() {
                                      //     for (let l = 0; l < edit.case_lawenforcement_denial.length; l++) {
                                      //       tempAgencyArray.push('((Select id FROM case_data WHERE mcm_number = $1), (Select id FROM law_enforcement WHERE agency = $'+agencyCount++ + '), $' +agencyCount++ +')')
                                      //       agencyArray.push(edit.case_lawenforcement_denial[l].name, edit.case_lawenforcement_denial[l].denial);
                                      //       }  //end for loop
                                      //     } //end create Query function
                                        
                                      //     createAgencyQuery(); //2nd query for vulnerabilites
                                      //     console.log('tempAgencyArray', tempAgencyArray)
                                      //     var agencies$ = tempAgencyArray.join(', ')
                                      //     var agencyInsert = 'INSERT INTO case_lawenforcement_denial (case_data_id, law_enforcement_id, jurisdictional_denial) VALUES ' 
                                      //     var agencyQuery = agencyInsert + agencies$
                                      //     console.log('Query, agencyQuery', agencyQuery, agencyArray)
                                        
                                      //     client.query(agencyQuery, agencyArray, function (queryErr, resultAgency) { // --11
                                      //   done();
                                      //     if (queryErr) { //if 2nd query fails
                                      //       console.log('Agency query Error', queryErr)
                                      //     res.sendStatus(500);
                                          else {
                                              res.sendStatus(202);
                                          } // end agency query error if/else
                                        // }) //end agency query
                                      // } //end else that begins agency query
                                  //   }) //end delete agency quert
                                  // } //end else that begins agency delete
                                }) //end race query
                              } //end else that begins race query
                            }) // end delete race query
                          } //else that begins race delete
                        }) //end vulnerability query
                      } //end else that begins vuln query
                    }) // end delete vuln query
                  } //else that begins vuln delete
                }) // end delete vuln query
              } //else that begins vuln delete
            }) // end delete vuln query
          } //else that begins vuln delete
        }) //pool connect
   } else { //end authentication if
    console.log('not logged in');
    res.send(false); 
    } //end authentication else  //2
}); //end /newIntake  --1

module.exports = router;

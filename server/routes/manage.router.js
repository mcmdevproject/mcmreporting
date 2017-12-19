var router = require('express').Router();
var path = require('path');
var pool = require('../modules/pool.js');

//get all users back so that they can be edited -shara
router.get('/', function(req, res) {
    console.log('In Manage Router');
    if (req.isAuthenticated()) {
      pool.connect(function (conErr, client, done) {
        if (conErr) {
          res.sendStatus(500);
        } else {
          client.query('SELECT username,admin,approved FROM users', function (queryErr, resultObj) {
            done();
            if (queryErr) {
              res.sendStatus(500);
            } else {
              res.send(resultObj.rows);
              console.log('this is resultObj.rows in manage get', resultObj.rows);
            }
          });
        }
      })
    } else {
      console.log('not logged in');
      res.send(false);
    }
  });

  //update admin rights
  router.put('/', function (req, res) {
    if (req.isAuthenticated()) {
        pool.connect(function (connectionError, client, done) {
            console.log('put route manage ->', req.body);
            console.log('put route manage req.body.username',req.body.username);
            console.log('put route manage req.body.username', req.body.approved);
            console.log('put route manage req.body.username',req.body.admin);
            var userNameEdit = req.body.username;
            var userApprovalEdit = req.body.approved;
            var userAdminEdit = req.body.admin;
            if (connectionError) {
                console.log(connectionError);
                res.sendStatus(501);
            } else {
                var pQuery = 'UPDATE users SET admin=$1, approved=$2 WHERE username=$3';
                var valueArray = [userAdminEdit, userApprovalEdit,userNameEdit];
                
                client.query(pQuery, valueArray, function (queryError, resultObj) {
                    done();
                    if (queryError) {
                      console.log('Error', queryError);
                      res.sendStatus(500);
                    } else {
                      res.send(resultObj);
                      console.log('result:', resultObj);
                    }
                })
            }
        });
      } else {
    console.log('not logged in');
    res.send(false);
  }
});


router.post('/', function (req, res) {
  if (req.isAuthenticated()) {
      pool.connect(function (connectionError, client, done) {
          console.log('req.body ->', req.body);
          console.log('delete router req.body.username',req.body.username);
          var userNamedelete = req.body.username;
          if (connectionError) {
              console.log(connectionError);
              res.sendStatus(501);
          } else {
              var pQuery = 'DELETE FROM users WHERE username=$1';
             var valueArray = [userNamedelete];
              client.query(pQuery, valueArray, function (queryError, resultObj) {
                  done();
                  if (queryError) {
                    console.log('Error', queryError);
                    res.sendStatus(500);
                  } else {
                    res.send(resultObj);
                    console.log('result:', resultObj);
                  }
              })
          }
      });
  }
  else {
      console.log('not logged in');
      res.send(false);
  }
});
module.exports = router;

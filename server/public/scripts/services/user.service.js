myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');
  var self = this;

  self.userObject = {};
  self.chartData = {data: []};
  self.joinLawEnforcementDenialChartData = {data: []};
  self.joinVulnerabilityChartData = {data: []};
  self.joinRaceChartData = {data: []};
  self.users = {};
  self.cities = {};
  self.selectedYear = '';
  self.customReportData = {data: []}


  self.getCities = function () {
    //on submit, posts all required fields to database
    return $http({
      method: 'GET',
      url: '/forms/cities'
    })
  };

  self.getCounties = function () {
    //on submit, posts all required fields to database
    return $http({
      method: 'GET',
      url: '/forms/counties'
    })
  };

  self.getAgencies = function () {
    return $http({
      method: 'GET',
      url: '/forms/lawEnforcement'
    })
  };

  self.getSchools = function () {
    return $http({
      method: 'GET',
      url: '/forms/schools'
    })
  };

  self.postInputData = function (newIntake) {
    console.log('in service', newIntake);
    return $http({
      method: 'POST',
      url: '/forms/newIntake',
      data: newIntake
    })
  };



  self.getChartData = function () {
    //on page load, GET all case_data from DB to the DOM
    return $http({
      method: 'GET',
      url: '/charts'
    })
      .then(function (res) {
        //match case_data to service
        self.chartData.data = res.data;
        return self.chartData.data
      })
      .then(function (res) {
        //add a year based on intake_date
        self.addYearToRecord = res.forEach(function (element) {
          element.year = element.intake_date.slice(0, 4);
        });

        //Global Charts
        var totalsByYear = self.formatDataToChart(res, 'year');
        self.mainChartYears = totalsByYear.xAxisValues;
        self.filteredYears = totalsByYear.yAxisValues;

        var totalsByCaseTypeOverall = self.formatDataToChart(res, 'start_case_type');
        self.startCaseLabel = totalsByCaseTypeOverall.xAxisValues;
        self.filteredStartCase = totalsByCaseTypeOverall.yAxisValues;

        var totalsByStateOverall = self.formatDataToChart(res, 'state');
        self.stateOverallLabel = totalsByStateOverall.xAxisValues;
        self.filteredStateOverall = totalsByStateOverall.yAxisValues;

        var totalsByCountyOverall = self.formatDataToChart(res, 'county_name');
        self.countiesOverallLabel = totalsByCountyOverall.xAxisValues;
        self.filteredCountiesOverall = totalsByCountyOverall.yAxisValues;

        var totalsByDistrictOverall = self.formatDataToChart(res, 'school_name');
        self.districtOverallLabel = totalsByDistrictOverall.xAxisValues;
        self.filteredDistrictsOverall = totalsByDistrictOverall.yAxisValues;

        var totalsByPeopleServedOverall = self.formatDataToChart(res, 'people_served');
        self.peopleServedOverallLabel = totalsByPeopleServedOverall.xAxisValues;
        self.filteredPeopleServedOverall = totalsByPeopleServedOverall.yAxisValues;

        var totalsByAgeOverall = self.formatDataToChart(res, 'age');
        self.ageOverallLabel = totalsByAgeOverall.xAxisValues;
        self.filteredAgeOverall = totalsByAgeOverall.yAxisValues;

        var totalsByGenderOverall = self.formatDataToChart(res, 'gender');
        self.genderOverallLabel = totalsByGenderOverall.xAxisValues;
        self.filteredGenderOverall = totalsByGenderOverall.yAxisValues;

        var totalsByReferralOverall = self.formatDataToChart(res, 'referral_type');
        self.referralLabel = totalsByReferralOverall.xAxisValues;
        self.filteredReferral = totalsByReferralOverall.yAxisValues;
      });
  };

 

  self.getJoinCaseLawEnforcementDenial = function(){
    return $http({
      method: 'GET',
      url: '/charts/join_case_lawenforcement_denial'
    })
      .then(function (res) {
        self.joinLawEnforcementDenialChartData.data = res.data;
        return self.joinLawEnforcementDenialChartData.data

      })
      .then(function (res) {
        self.addYearToRecord = res.forEach(function (element) {
          element.year = element.intake_date.slice(0, 4);
        });

        //Global Charts
        var totalsByLawEnforcementOverall = self.formatDataToChart(res, 'agency');
        self.lawEnforcementOverallLabel = totalsByLawEnforcementOverall.xAxisValues;
        self.filteredLawEnforcementOverall = totalsByLawEnforcementOverall.yAxisValues;

        var totalsByDenialOverall = self.formatDataToChart(res, 'jurisdictional_denial');
        self.lawDenialOverallLabel = totalsByDenialOverall.xAxisValues;
      
        var agencyByDenial = self.getStackedChart(res, self.lawEnforcementOverallLabel, 'agency', 'jurisdictional_denial')
      })    
  };

  self.getJoinCaseVulnerabilities = function(){
    return $http({
      method: 'GET',
      url: '/charts/join_vulnerability'
    })
      .then(function (res) {
        self.joinVulnerabilityChartData.data = res.data;
        return self.joinVulnerabilityChartData.data

      })
      .then(function (res) {
        self.addYearToRecord = res.forEach(function (element) {
          element.year = element.intake_date.slice(0, 4);
        });
       //Global Charts
       var totalsByVulnerabilitiesOverall = self.formatDataToChart(res, 'vulnerability');
       self.vulnerabilitiesOverallLabel = totalsByVulnerabilitiesOverall.xAxisValues;
       self.filteredVulnerabilitiesOverall = totalsByVulnerabilitiesOverall.yAxisValues;

      //  var ageByVulnerability = self.getStackedChart(res, self.ageOverallLabel, 'age', 'vulnerability')
      })    
  };

  self.getJoinCaseRaceEthnicity = function(){
    return $http({
      method: 'GET',
      url: '/charts/join_race_ethnicity'
    })
      .then(function (res) {
        self.joinRaceChartData.data = res.data;
        return self.joinRaceChartData.data

      })
      .then(function (res) {
        self.addYearToRecord = res.forEach(function (element) {
          element.year = element.intake_date.slice(0, 4);
        });
       //Global Charts
       var totalsByRaceEthnicityOverall = self.formatDataToChart(res, 'race_ethnicity');
       self.raceEthnicityOverallLabel = totalsByRaceEthnicityOverall.xAxisValues;
       self.filteredRaceEthnicityOverall = totalsByRaceEthnicityOverall.yAxisValues;
      })    
  };

  self.getStackedChart = function (data, xAxisLabels, xAxisFilter, yAxisFilter) {
    // console.log('data', data)
    // console.log('xAxisLabels', xAxisLabels);
    // console.log('xAxisFilter', xAxisFilter);
    // console.log('yAxisFilter', yAxisFilter);

    var stackedYObj = data.reduce(function (prev, curr) {
      const groupLabel = curr[yAxisFilter];

      if (!prev[groupLabel]) {
        prev[groupLabel] = [];
      }

      prev[groupLabel].push(curr);

      return prev
    }, {});

    // console.log('stackedYObj', stackedYObj)

    var stackedAxisKeys = Object.keys(stackedYObj);
    // console.log('stackedAxisKeys', stackedAxisKeys)

    stackedAxisKeys.forEach(function(stackedAxisKey) {
      self[`${yAxisFilter}_${stackedAxisKey}`] = xAxisLabels.map(function(currXAxisLabel) {
        return data.filter(function(element) {
          // console.log('element[yAxisFilter]', element[yAxisFilter].toString())
          return element[xAxisFilter] === currXAxisLabel
          && element[yAxisFilter].toString() === stackedAxisKey;
        }).length;
      });
    });
    
  
    // console.log('vulnerability_ASD',self.vulnerability_ASD)
    // console.log('vulnerability_Anxiety',self.vulnerability_Anxiety)

    // console.log('jurusdictional_denial_true',self.jurisdictional_denial_true)
    // console.log('jurusdictional_denial_false',self.jurisdictional_denial_false)
  
}

  self.getDataOfYear = function (data, year) {
    return data.filter(function (entry) {
      return entry.year === year;
    });
  };

  self.formatDataToChart = function (data, xAxisDataPoint) {
    //then create an object with an array for each year's data record
    var dataGroupedXAxisDataPoint = data.reduce(function (prev, curr) {
      const groupLabel = curr[xAxisDataPoint];

      if (!prev[groupLabel]) {
        prev[groupLabel] = [];
      }

      prev[groupLabel].push(curr);

      return prev;
    }, {});

    var xAxisValues = Object.keys(dataGroupedXAxisDataPoint);

    var yAxisValues = xAxisValues.map(function (label) {
      return dataGroupedXAxisDataPoint[label].length;
    });

    return {
      xAxisValues: xAxisValues,
      yAxisValues: yAxisValues
    };
  };

  self.updateChartYear = function (selectedYear) {
    self.selectedYear = selectedYear.toString();
    //Deep Dive into Year Charts on Main MCM table
    var dataForUserYear = self.getDataOfYear(self.chartData.data, self.selectedYear);

    var totalsByCaseType = self.formatDataToChart(dataForUserYear, 'start_case_type');
    self.userCaseTypeLabels = totalsByCaseType.xAxisValues;
    self.userFilteredCases = totalsByCaseType.yAxisValues;

    var totalsByUserCounty = self.formatDataToChart(dataForUserYear, 'county_name');
    self.userCountyLabels = totalsByUserCounty.xAxisValues;
    self.userFilteredCounty = totalsByUserCounty.yAxisValues;

    var totalsByUserSchool = self.formatDataToChart(dataForUserYear, 'school_name');
    self.userSchoolLabels = totalsByUserSchool.xAxisValues;
    self.userFilteredSchool = totalsByUserSchool.yAxisValues;

    var totalsByUserServed = self.formatDataToChart(dataForUserYear, 'people_served');
    self.userPeopleServedLabels = totalsByUserServed.xAxisValues;
    self.userFilteredPeopleServed = totalsByUserServed.yAxisValues;

    var totalsByUserAge = self.formatDataToChart(dataForUserYear, 'age');
    self.userAgeLabels = totalsByUserAge.xAxisValues;
    self.userFilteredAge = totalsByUserAge.yAxisValues;

    //Deep Dive into Year Charts on Join Charts
    var dataForJoinUserYearLawEnforcement = self.getDataOfYear(self.joinLawEnforcementDenialChartData.data, self.selectedYear);
    var totalsByUserLaw = self.formatDataToChart(dataForJoinUserYearLawEnforcement, 'agency');
    self.userLawLabels = totalsByUserLaw.xAxisValues;
    self.userFilteredLaw = totalsByUserLaw.yAxisValues;

    var dataForJoinUserYearVulnerability = self.getDataOfYear(self.joinVulnerabilityChartData.data, self.selectedYear);
    var totalsByUserVulnerability = self.formatDataToChart(dataForJoinUserYearVulnerability, 'vulnerability');
    self.userVulnerabilityLabels = totalsByUserVulnerability.xAxisValues;
    self.userFilteredVulnerability = totalsByUserVulnerability.yAxisValues;

    var dataForJoinUserYearRace = self.getDataOfYear(self.joinRaceChartData.data, self.selectedYear);
    var totalsByUserRace = self.formatDataToChart(dataForJoinUserYearRace, 'race_ethnicity');
    self.userRaceLabels = totalsByUserRace.xAxisValues;
    self.userFilteredRace = totalsByUserRace.yAxisValues;

  };

  self.submitCustomFilters = function (userCustomFilters) {
    console.log('service obj', userCustomFilters)
    //pending BE user filtered report query
    $http({
      method:"POST",
      url: "/charts/custom",
      data: userCustomFilters
    }).then(function (res) {
      console.log('response', res)
      self.customReport.data = res.data
    })
  };

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http({
      method: 'GET',
      url: '/user',
    }).then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        self.userObject.admin = response.data.admin;
        console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
        console.log('UserService -- getuser -- User Data: ', self.userObject.admin);


      } else {
        console.log('UserService -- getuser -- failure', response);
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    });
  };

  // get the data from an existing form to edit
  self.getExistingForm = function (mcmNum) {
    console.log('In getExistingForm', mcmNum);

    //$http call to get all data from existing form
    return $http({
      method: 'GET',
      url: '/forms/caseToEdit/' + mcmNum
    }).then(function (response) {
      console.log('Response', response);
    })
  };

  self.logout = function () {
    console.log('UserService -- logout');
    $http({
      method: 'GET',
      url: '/user/logout'
    }).then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path('/home');
    });
  };

  //gets all users back on manage page so they can be edited -shara
  self.getAllUsers = function () {
    return $http({
      method: 'GET',
      url: '/manage',
    }).then(function (response) {
      self.users.list = response.data;
      console.log('this is response in user before if', response.data);
    });
  };

  self.updateForm = function (editedForm) {
    console.log('In updateForm');
    $http({
      method: 'PUT',
      url: '/editIntake',
      data: editedForm
    }).then(function (response) {
      console.log('Response', response);
    })
  };

  // updates the admin priviledges 
  self.updatePriviledges = function (user) {
    return $http({
      method: 'PUT',
      url: '/manage',
      data: user
    }).then(function (response) {
      console.log('Response', response.data);
    })
  };

  // deletes the user from the db
  self.deleteUser = function (user) {
    console.log('this is user on delete service', user);

    return $http({
      method: 'POST',
      url: '/manage',
      data: user
    }).then(function (response) {
      console.log('Delete Response', response.data);
    })
  };

});
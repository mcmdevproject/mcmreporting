myApp.controller('NewController', function (UserService) {
  console.log('NewController as nwc created');
  var vm = this;
  var newIntake = [];
  vm.caseIn = '';
  vm.DateofIntaketoMCMIn = '';
  vm.NameIn = '';
  vm.DateofDisappearanceIn = '';
  vm.DateReportedMissingtoPoliceIn = '';
  vm.DateLastSeenIn = '';
  vm.TimeLastSeenIn = '';
  vm.FamilyMembersInvolvedInSearchIn = '';
  vm.LocationLastSeenCrossStIn = '';
  vm.DateReportedMissingtoPoliceIn = '';
  vm.CityMissingFromIn = '';
  vm.CountyMissingFromIn = '';
  vm.StateMissingFromIn = '';
  vm.SchoolDistrictWhereChildWasEnrolledIn = '';
  vm.AgeIn = '';
  vm.GenderIn = '';
  vm.HeightIn = '';
  vm.CaseTypeWhenOpenedIn = '';
  vm.ReferralTypeIn = '';
  vm.WeightIn = '';
  vm.OtherInfoIn = '';
  vm.HairColorIn = '';
  vm.HairStyleIn = '';
  vm.EyeColorIn = '';
  vm.RaceEthnicityIn = '';
  vm.FacialHairIn = '';
  vm.EyeBrowFeatures = '';
  vm.GlassesOrContactsIn = '';
  vm.TattoosOrPiercingsIn = '';
  vm.commentTattoosIn = ''; //ng model
  vm.DentalCharacteristicsIn = '';
  vm.ScarsOrBirthmarksIn = '';
  vm.commentScarorBirthmarksIn = ''; //need ng model
  vm.OtherLEIn = '';
  vm.LawEnforcementAgencyonCaseIn = '';
  vm.CaseNumberIn = '';
  vm.OfficeDetectiveIn = '';
  vm.LEPhoneNumberIn = '';
  vm.StreetAddressIn = '';
  vm.JurisdictionalDenialIn = '';
  vm.CaseTypeWhenOpenedIn = '';
  vm.CaseTypeWhenClosedIn = '';
  vm.CaseStatusIn = '';
  vm.CaseDispositionIn = '';
  vm.ReferralTypeIn = '';
  vm.WithOthersIn = '';
  vm.commentWithOthersIn = '';
  vm.HighRiskActivityIn = '';
  vm.commentHighRiskIn = '';
  vm.DisturbingSituationIn = '';
  vm.commentSpecificQuestions = '';
  vm.commentDisturbingIn = '';
  vm.JacketCoatIn = '';
  vm.ShirtBlouseIn = '';
  vm.PantsSkirtIn = '';
  vm.JewelryIn = '';
  vm.BackpackPurseIn = '';
  vm.HatOtherIn = '';
  vm.addOtherIn = '';
  vm.VehicleYearIn = '';
  vm.VehicleMakeIn = '';
  vm.VehicleModelIn = '';
  vm.VehicleMakeIn = '';
  vm.vehicleColorIn = '';
  vm.VehicleLicenseIn = '';
  vm.PhotoAvailableIn = '';
  vm.LeftBeforeIn = '';
  vm.commentLengthIn = '';
  vm.commentPreviouslyFoundIn = '';
  vm.commentKnownCompanionsIn = '';
  vm.DisabilityMentalIn = '';
  vm.LeftBeforeIn = '';
  vm.LifeThreateningIn = '';
  vm.MedicationsIn = '';
  vm.AbuseIn = '';
  vm.commentAbuseIn = '';
  vm.ADDIn = '';
  vm.AutisimIn = '';
  vm.AlcoholIn = '';
  vm.AnxietyIn = '';
  vm.BiPolarIn = '';
  vm.DepressionClinicalIn = '';
  vm.DespressionSituationalIn = '';
  vm.DrugUseIn = '';
  vm.EconomicIn = '';
  vm.EmotionalAbuseIn = '';
  vm.GangIn = '';
  vm.ODDIn = '';
  vm.LaborIn = '';
  vm.LuringAdultIn = '';
  vm.LuringChildIn = '';
  vm.MissingFromCareIn = '';
  vm.PhysicalAbuseIn = '';
  vm.RunawayIn = '';
  vm.SexualAbuseIn = '';
  vm.SexualExploitationIn = '';
  vm.SexualMinorityIn = '';
  vm.PRANameIn = '';
  vm.PRAStreetAddressIn = '';
  vm.PRACityIn = '';
  vm.PRAStateIn = '';
  vm.PRAZIPCodeIn = '';
  vm.PRAHomePhoneIn = '';
  vm.PRAWorkPhoneIn = '';
  vm.PRACellPhoneIn = '';
  vm.PRAEmailIn = '';
  vm.OtherHistoryIn = '';
  vm.ADDIn = '';
  vm.AutismIn = '';
  vm.AlcoholIn = '';
  vm.AnxietyIn = '';
  vm.BiPolarIn = '';
  vm.DepressionClinicalIn = '';
  vm.DepressionSituationalIn = '';
  vm.DrugUseIn = '';
  vm.EconomicIn = '';
  vm.EmotionalAbuseIn = '';
  vm.GangIn = '';
  vm.ODDIn = '';
  vm.LaborIn = '';
  vm.LuringAdultIn = '';
  vm.LuringChildIn = '';
  vm.MissingFromCareIn = '';
  vm.PhysicalAbuseIn = '';
  vm.RunawayIn = '';
  vm.SexualAbuseIn = '';
  vm.SexualExploitationIn = '';
  vm.SexualMinorityIn = '';
  vm.AfricanAmericanIn = '';
  vm.AsianPacificIslanderIn = '';
  vm.NativeAmericanIn = '';
  vm.CaucasianIn = '';
  vm.LatinxIn = '';
  vm.EyeBrowFeaturesIn = '';
  vm.LEPhoneNumberIn1 = '';
  vm.LEPhoneNumberIn2 = '';
  vm.LEPhoneNumberIn3 = '';
  vm.LEPhoneNumberIn4 = '';
  vm.LEPhoneNumberIn5 = '';
  vm.OtherLEIn5 = '';
  vm.LawEnforcementAgencyonCaseIn1 = '';
  vm.LawEnforcementAgencyonCaseIn2 = '';
  vm.LawEnforcementAgencyonCaseIn3 = '';
  vm.LawEnforcementAgencyonCaseIn4 = '';
  vm.LawEnforcementAgencyonCaseIn5 = '';
  vm.CaseNumberIn1 = '';
  vm.CaseNumberIn2 = '';
  vm.CaseNumberIn3 = '';
  vm.CaseNumberIn4 = '';
  vm.CaseNumberIn5 = '';
  vm.JurisdictionalDenialIn1 = '';
  vm.JurisdictionalDenialIn2 = '';
  vm.JurisdictionalDenialIn3 = '';
  vm.JurisdictionalDenialIn4 = '';
  vm.JurisdictionalDenialIn5 = '';
  vm.StreetAddressIn1 = '';
  vm.StreetAddressIn2 = '';
  vm.StreetAddressIn3 = '';
  vm.StreetAddressIn4 = '';
  vm.StreetAddressIn5 = '';
  vm.OfficeDetectiveIn1 = ''; 
  vm.OfficeDetectiveIn2 = '';
  vm.OfficeDetectiveIn3 = '';
  vm.OfficeDetectiveIn4 = '';
  vm.OfficeDetectiveIn5 = '';

  vm.case_vulnerabilities = [{
    name: "ADD/ADHD",
    value: false
  }, {
    name: "ASD",
    value: false
  }, {
    name: "Alcohol use/abuse",
    value: false
  },
  {
    name: "Anxiety",
    value: false
  }, {
    name: "Bipolar Disorder",
    value: false
  },
  {
    name: "Depression (Clinical)",
    value: false
  }, {
    name: "Depression (Situational)",
    value: false
  },
  {
    name: "Drug use/abuse",
    value: false
  }, {
    name: "Economic exploitation (history)",
    value: false
  },
  {
    name: "Emotional abuse (history)",
    value: false
  }, {
    name: "Gang association",
    value: false
  },
  {
    name: "ODD",
    value: false
  }, {
    name: "Labor Exploitation (history)",
    value: false
  },
  {
    name: "Luring/grooming by adult",
    value: false
  }, {
    name: "Luring/grooming by child",
    value: false
  },
  {
    name: "Missing From Care",
    value: false
  }, {
    name: "Physical Abuse (history)",
    value: false
  },
  {
    name: "Runaway (history)",
    value: false
  }, {
    name: "Sexual Abuse (history)",
    value: false
  },
  {
    name: "Sexual exploitation (history)",
    value: false
  }, {
    name: "Sexual Minority",
    value: false
  },
  {
    name: "None",
    value: false
  }
  ]

  vm.race_ethnicity = [{
    name: "African American",
    value: false
  }, {
    name: "Asian Pacific Islander",
    value: false
  }, {
    name: "Caucasian",
    value: false
  },
  {
    name: "Latinx",
    value: false
  }, {
    name: "Native American",
    value: false
  },
  {
    name: "None",
    value: false
  }
  ]


  vm.changeVul = function (inputVuln) {
    console.log("inputVuln", inputVuln);
    inputVuln.value = !inputVuln.value;
    console.log("inputVuln.name", inputVuln.value);
  }


  vm.changeRace = function (inputRace) {
    console.log("inputVuln", inputRace);
    inputRace.value = !inputRace.value;
    console.log("inputVuln.name", inputRace.value);
  }

  vm.itemChange = function () {
    console.log('inside itemchange');
    console.log(vm.SchoolDistrictWhereChildWasEnrolledIn);
  }


  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  UserService.getCounties().then(function (response) {
    return vm.counties = response.data;
  });

  UserService.getAgencies().then(function (response) {
    console.log('lawEnforcement', response.data)
    return vm.agencies = response.data;

  });

  UserService.getSchools().then(function (response) {
    console.log('schools', response.data);

    return vm.schools = response.data;
  });


  vm.click = function () {
    console.log('in click');

    var newIntake = {
      mcm_number: vm.caseIn,
      intake_date: vm.DateofIntaketoMCMIn,
      age: vm.AgeIn,
      gender: vm.GenderIn,
      last_seen: vm.DateLastSeenIn,
      reported_missing: vm.DateReportedMissingtoPoliceIn,
      people_served: vm.FamilyMembersInvolvedInSearchIn,
      city_name: vm.CityMissingFromIn,
      county_name: vm.CountyMissingFromIn,
      state: vm.StateMissingFromIn,
      school_name: vm.SchoolDistrictWhereChildWasEnrolledIn,
      start_case_type: vm.CaseTypeWhenOpenedIn,
      end_case_type: vm.CaseTypeWhenClosedIn,
      disposition: vm.CaseDispositionIn,
      close_date: vm.DateCaseClosedIn,
      case_status: vm.CaseStatusIn,
      referral_type: vm.ReferralTypeIn,
      case_vulnerabilities: [],
      race_ethnicity: [],
      case_lawenforcement_denial: []
    }


    if (newIntake.mcm_number == '' ||
      newIntake.intake_date == '' || 
      newIntake.age == '' ||
      newIntake.state == '' ||
      newIntake.gender == '' || 
      newIntake.last_seen == '' || 
      newIntake.reported_missing == '' ||
      newIntake.people_served == '' || 
      newIntake.city_name == '' ||
      newIntake.case_status == '' ||
      newIntake.county_name == '' || 
      newIntake.school_name == '' ||
      newIntake.start_case_type == '' || 
      newIntake.end_case_type == '' ||
      newIntake.disposition == '' || 
      newIntake.referral_type == '') {
    
      swal({
        title: 'Please complete all required fields.',
        icon: "warning",
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'
      })
    } else {
      console.log('newIntake', newIntake);
      swal({
        title: 'Required fields submitted to database.',
        icon: "success",
        width: 600,
        padding: 100,
        background: '#fff url(assets/page.JPG)'
      }).then(function () {
        newIntake.case_vulnerabilities = vm.case_vulnerabilities.filter(function (vulnerability) {
          return vulnerability.value == true;
        });
        // if (newIntake.case_vulnerabilities.length === 0) {
        //   case_vulnerabilities[21].value = true;
        //   newIntake.case_vulnerabilities.push(case_vulnerabilities[21]);
        // }
      }).then(function () {
        newIntake.race_ethnicity = vm.race_ethnicity.filter(function (ethnicity) {
          return ethnicity.value == true;
        });
        if (newIntake.race_ethnicity.length === 0) {
          race_ethnicity[5].value = true;
          newIntake.race_ethnicity.push(race_ethnicity[5]);
        }
      }).then(function () {
        vm.jurisdictions = [{
          name: vm.LawEnforcementAgencyonCaseIn1,
          denial: vm.JurisdictionalDenialIn1
        },
        {
          name: vm.LawEnforcementAgencyonCaseIn2,
          denial: vm.JurisdictionalDenialIn2
        },
        {
          name: vm.LawEnforcementAgencyonCaseIn3,
          denial: vm.JurisdictionalDenialIn3
        },
        {
          name: vm.LawEnforcementAgencyonCaseIn4,
          denial: vm.JurisdictionalDenialIn4
        },
        {
          name: vm.LawEnforcementAgencyonCaseIn5,
          denial: vm.JurisdictionalDenialIn5
        }
        ]
        newIntake.case_lawenforcement_denial = vm.jurisdictions.filter(function (jurisdiction) {
          return jurisdiction.name !== undefined;

        })
      })
        .then(function () {
          UserService.postInputData(newIntake);

          console.log('final newIntake', newIntake)
        });

    }
  }

  //shara working on pdf below
  var pdf = new jsPDF();

  //shara working on pdf below
  var pdf = new jsPDF('p', 'mm', 'letter');

  vm.printPDF = function () {



    vm.formatDateofIntaketoMCMIn = (vm.DateofIntaketoMCMIn.getMonth() + 1) + '/' + vm.DateofIntaketoMCMIn.getDate() + '/' + vm.DateofIntaketoMCMIn.getFullYear();

    vm.formatDateofDisappearanceIn = (vm.DateofDisappearanceIn.getMonth() + 1) + '/' + vm.DateofDisappearanceIn.getDate() + '/' + vm.DateofDisappearanceIn.getFullYear();

    vm.formatDateReportedMissingtoPoliceIn = (vm.DateReportedMissingtoPoliceIn.getMonth() + 1) + '/' + vm.DateReportedMissingtoPoliceIn.getDate() + '/' + vm.DateReportedMissingtoPoliceIn.getFullYear();

    vm.formatDateLastSeenIn = (vm.DateLastSeenIn.getMonth() + 1) + '/' + vm.DateLastSeenIn.getDate() + '/' + vm.DateLastSeenIn.getFullYear();

    vm.formatTimeLastSeenIn = vm.TimeLastSeenIn.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });  

    if (vm.DateCaseClosedIn == undefined) {
      vm.formatDateCaseClosedIn = '';
      console.log('vm.formatDateCaseCloseIn', vm.formatDateCaseClosedIn);
    } else {
      vm.formatDateCaseClosedIn = (vm.DateCaseClosedIn.getMonth() + 1) + '/' + vm.DateCaseClosedIn.getDate() + '/' + vm.DateCaseClosedIn.getFullYear();
      console.log('formatDate changer' ); 
    }

    //logo
    var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwMEBAMFBQQFBQcGBgYGBwoHCAcIBwoPCgsKCgsKDw4QDQwNEA4YExERExgcGBYYHCIeHiIrKSs4OEsBAwMDAwMDAwQEAwUFBAUFBwYGBgYHCgcIBwgHCg8KCwoKCwoPDhANDA0QDhgTERETGBwYFhgcIh4eIispKzg4S//AABEIALQBbAMBIgACEQEDEQH/xAC/AAEAAgIDAQEAAAAAAAAAAAAABwkGCAEEBQIDEAABBAEDAQQDCQsKBgIDAAABAAIDBAUGBxESCBMhMUFRcRQVIjJCYXOBshgzNjdWcpGUs7TTFiM1UlN0dXahsRc0YmOiwVXCOGSDAQEAAgMBAQAAAAAAAAAAAAAABAUBAwYCBxEAAgEDAgMFBQMJBwUAAAAAAQIDAAQRBRITITEGFCJBURUyYXGRFlKhIzU2U2Jyc4GxJDM0QnSS0UOCg4TC/9oADAMBAAIRAxEAPwC1NERKURESlEREpRERKURESlEREpRERKURESlEREpRERKURESlEREpRERKURESlEREpRERKURYFrHdfQOgbmNpag1HBj7F0F0DHh7iWg8F7ugHob87lmOIzuIzlGO3i8nXuVH+LZ60jZmH2OYSF6KOFDFTtPQ1qWeFpGjEqmReqg8xXcREXmttEREpRERKURESlEREpRERKURESlEREpRERKURESlEREpRERKURESlEREpRERKURESlEREpRERKURESlEREpXm289hcbPFWt5apXsSN6mRyzMje4esBxBIXfgt1p2dcU7Ht9Ba4OB/Qqne1fUkh3ozkkvJbYpUZow7xDW910cN9Q5aVrzXt2qjg6vamhPrikcz7JCuotI40MbifBYA9K4m87XmzvLiBrLIjcrndV9PU0+lc8j1qj2luFr3G8e49b5yADyEd+cD7Sy2lv3vFQ47rcHJO+nMc/7VrkbRZvKVTSPttZn37WRfkQakvtgXja3ahhB8KuEqR/W98ki93sX5WStuBqLGmZ4gt4czGMHhrpK8zADx6+HrVTUOos3qvL3MvmcjLdyNkgyzyccu6RwAAAAAAOAApx7Kt73HvTp6Mv4Furer/phMg+wrGaDh6a0Z5lU/EVzVnf8AeO0kVwuVSWfofRuVW0IiLlK+t0RESlEREpRERKURESlEREpRERKU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';
    //header//
    pdf.addImage(imgData, 'JPEG', 5, 10, 60, 30); //5,10 = x,y / 60, 30 = w,h
    //page 1

    pdf.setFontType('bold');
    pdf.setFontSize(18);
    pdf.text(70, 25, 'Missing Persons Intake Form');

    // pdf.addPage(0)
    //input fields

    pdf.setFontSize(12);
    pdf.setFontType('bold');
    pdf.text(10, 45, 'MCM Case Number: ' + vm.caseIn);
    pdf.text(85, 45, 'Date of Intake to MCM: ' + vm.formatDateofIntaketoMCMIn); //vm.formatDateofIntaketoMCMIn
    pdf.line(10, 48, 206, 48);

    //end header

    //missing persons information
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 60, 'Missing Persons Information') //add ' to persons shara
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 70, 'Name of Missing Person: ' + vm.NameIn);

    pdf.text(10, 80, 'Date of Disappearance: ' + vm.formatDateofDisappearanceIn); //vm.formatDateofDisappearanceIn
    pdf.text(90, 80, 'Date Reported To Police: ' + vm.formatDateReportedMissingtoPoliceIn); //+ vm.formatDateReportedMissingtoPoliceIn

    pdf.text(10, 90, 'Date Last Seen: ' + vm.formatDateLastSeenIn); //+ vm.formatDateLastSeenIn
    pdf.text(90, 90, 'Time Last Seen: ' + vm.formatTimeLastSeenIn); //+ vm.formatTimeLastSeenIn

    pdf.text(10, 100, 'Family Involved In Search: ' + vm.FamilyMembersInvolvedInSearchIn);

    pdf.text(10, 110, 'Location Last Seen/Cross St.:  ' + vm.LocationLastSeenCrossStIn);

    pdf.text(10, 120, 'State Missing From: ' + vm.StateMissingFromIn);
    pdf.text(100, 120, 'City Missing From: ' + vm.CityMissingFromIn);
    pdf.text(10, 130, 'County Missing From: ' + vm.CountyMissingFromIn);

    pdf.text(100, 130, 'School District of Child: ' + vm.SchoolDistrictWhereChildWasEnrolledIn);

    pdf.text(10, 140, 'Age: ' + vm.AgeIn);
    pdf.text(50, 140, 'Gender: ' + vm.GenderIn);
    pdf.text(90, 140, 'Ht: ' + vm.HeightIn);
    pdf.text(130, 140, 'Wt: ' + vm.WeightIn);


    //Distinguishing Characteristics 
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.line(10, 150, 206, 150);

    pdf.text(10, 160, 'Distinguishing Characteristics')
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 170, 'Hair Color: ' + vm.HairColorIn);
    pdf.text(10, 180, 'Hair Style: ' + vm.HairStyleIn);
    pdf.text(110, 170, 'Eye Color: ' + vm.EyeColorIn);
    pdf.text(110, 190, 'Glasses/Contacts: ' + vm.GlassesOrContactsIn);
    pdf.text(10, 190, 'Facial Hair: ' + vm.FacialHairIn);
    pdf.text(110, 180, 'Eye Brow Features: ' + vm.EyeBrowFeaturesIn);

    pdf.text(10, 200, 'Race/Ethnicity: ');
    pdf.text(50, 200, 'African American: ' + vm.AfricanAmericanIn);
    pdf.text(50, 210, 'Asian Pacific Islander: ' + vm.AsianPacificIslanderIn);
    pdf.text(120, 210, 'Native American: ' + vm.NativeAmericanIn);
    pdf.text(120, 200, 'Caucasion: ' + vm.CaucasianIn);
    pdf.text(160, 200, 'Latinx: ' + vm.LatinxIn);

    pdf.text(10, 220, 'Tattoos or Piercings: ' + vm.commentTattoosIn);
    pdf.text(10, 230, 'Dental Characteristics: ' + vm.DentalCharacteristicsIn);
    pdf.text(10, 240, 'Scars or Birthmarks: ' + vm.ScarsOrBirthmarksIn);

    pdf.text(10, 250, 'Additional Information: ');
    var formatOtherInfoIn = vm.OtherInfoIn;
    var setOtherInfoIn = pdf.splitTextToSize(formatOtherInfoIn, 200);
    pdf.text(10, 255, setOtherInfoIn);


    //page 2
    pdf.addPage();
    //page 2 header
    pdf.addImage(imgData, 'JPEG', 5, 10, 60, 30); //5,10 = x,y / 60, 30 = w,h    
    pdf.setFontType('bold');
    pdf.setFontSize(18);
    pdf.text(70, 25, 'Missing Persons Intake Form');
    pdf.setFontSize(12);
    pdf.setFontType('bold');
    pdf.text(10, 45, 'MCM Case Number: ' + vm.caseIn);
    pdf.text(85, 45, 'Date of Intake to MCM: ' + vm.formatDateofIntaketoMCMIn);
    pdf.line(10, 48, 206, 48);
    // end of page 2 header
    //page 2 input 

    //Vulnerabilities
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 55, 'Vulnerability History')
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 65, 'ADD/ADHD:')
    pdf.text(66, 65, '' + vm.ADDIn);
    pdf.text(10, 72, 'ASD:');
    pdf.text(66, 72, '' + vm.AutismIn);
    pdf.text(10, 79, 'Anxiety: ');
    pdf.text(66, 79, '' + vm.AnxietyIn);
    pdf.text(10, 86, 'ODD:');
    pdf.text(66, 86, '' + vm.ODDIn);
    pdf.text(10, 93, 'Bi-Polar Disorder: ');
    pdf.text(66, 93, '' + vm.BiPolarIn);
    pdf.text(10, 100, 'Runaway: ');
    pdf.text(66, 100, '' + vm.RunawayIn);
    pdf.text(10, 107, 'Missing From Care: ');
    pdf.text(66, 107, '' + vm.MissingFromCareIn);
    pdf.text(10, 114, 'Gang Association: ');
    pdf.text(66, 114, '' + vm.GangIn);
    pdf.text(10, 121, 'Alcohol Use/Abuse:  ');
    pdf.text(66, 121, '' + vm.AlcoholIn);
    pdf.text(10, 128, 'Drug Use/Abuse: ');
    pdf.text(66, 128, '' + vm.DrugUseIn);
    pdf.text(10, 135, 'Economic exploitation: ');
    pdf.text(66, 135, '' + vm.EconomicIn);
    pdf.text(100, 65, 'Emotional Abuse: ');
    pdf.text(166, 65, '' + vm.EmotionalAbuseIn);
    pdf.text(100, 72, 'Physical Abuse: ');
    pdf.text(166, 72, '' + vm.PhysicalAbuseIn);
    pdf.text(100, 79, 'Depression(clinical): ');
    pdf.text(166, 79, '' + vm.DepressionClinicalIn);
    pdf.text(100, 86, 'Depression(situational): ');
    pdf.text(166, 86, '' + vm.DepressionSituationalIn);
    pdf.text(100, 93, 'Labor Exploitation: ');
    pdf.text(166, 93, '' + vm.LaborIn);
    pdf.text(100, 100, 'Luring/grooming by adult: ');
    pdf.text(166, 100, '' + vm.LuringAdultIn);
    pdf.text(100, 107, 'Luring/grooming by child: ');
    pdf.text(166, 107, '' + vm.LuringChildIn);
    pdf.text(100, 114, 'Sexual Abuse: ');
    pdf.text(166, 114, '' + vm.SexualAbuseIn);
    pdf.text(100, 121, 'Sexual Exploitation: ');
    pdf.text(166, 121, '' + vm.SexualExploitationIn);
    pdf.text(100, 128, 'Sexual Minority (LGBTQ, etc.): ');
    pdf.text(166, 128, '' + vm.SexualMinorityIn);

    pdf.line(10, 140, 206, 140);

    //case info
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 150, 'Case Information ');
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(100, 150, 'Case Status: ' + vm.CaseStatusIn);
    pdf.text(10, 160, 'Case Type When Opened:  ' + vm.CaseTypeWhenOpenedIn);
    pdf.text(10, 170, 'Case Type When Closed:   ' + vm.CaseTypeWhenClosedIn);
    pdf.text(10, 180, 'Date Case Closed: ' + vm.formatDateCaseClosedIn);
    pdf.text(10, 190, 'Referral Type: ' + vm.ReferralTypeIn);

    pdf.line(10, 198, 206, 198);

    // Specific Questions to Occurrence
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 210, 'Specific Questions to Occurrence');
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 220, 'Was the Person with Anyone: ' + vm.commentWithOthersIn);
    pdf.text(10, 230, 'High Risk Activity: ' + vm.commentHighRiskIn);
    pdf.text(10, 240, 'Disturbing Situation: ' + vm.DisturbingSituationIn);
    var formatcommentSpecificQuestions = vm.commentSpecificQuestions;
    var setcommentSpecificQuestions = pdf.splitTextToSize(formatcommentSpecificQuestions, 200);
    pdf.text(10, 250, 'Additional Comments: ');
    pdf.text(10, 256, setcommentSpecificQuestions);

    //page 3
    pdf.addPage();
    //page 3 header
    pdf.addImage(imgData, 'JPEG', 5, 10, 60, 30);
    pdf.setFontType('bold');
    pdf.setFontSize(18);
    pdf.text(70, 25, 'Missing Persons Intake Form');
    pdf.setFontSize(12);
    pdf.setFontType('bold');
    pdf.text(10, 45, 'MCM Case Number: ' + vm.caseIn);
    pdf.text(85, 45, 'Date of Intake to MCM: ' + vm.formatDateofIntaketoMCMIn); //+ vm.formatDateofIntaketoMCMIn
    pdf.line(10, 48, 206, 48);
    // end of page 3 header

    // //page 3 input
    // //Clothing Worn When Last Seen
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 60, 'Clothing Worn When Last Seen')
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 70, 'Jacket/Coat: ' + vm.JacketCoatIn);
    pdf.text(100, 70, 'Shirt/Blouse: ' + vm.ShirtBlouseIn);
    pdf.text(10, 80, 'Pants/Skirt: ' + vm.PantsSkirtIn);
    pdf.text(100, 80, 'Jewelry: ' + vm.JewelryIn);
    pdf.text(100, 90, 'Back Pack/Purse: ' + vm.BackpackPurseIn);
    pdf.text(10, 90, 'Hat/Other: ' + vm.HatOtherIn);
    pdf.text(10, 100, 'Other: ' + vm.addOtherIn);
    pdf.line(10, 108, 206, 108);

    // //Vehicle Information
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 120, 'Vehicle Information ');
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 130, 'Year: ' + vm.VehicleYearIn);
    pdf.text(60, 130, 'Make: ' + vm.VehicleMakeIn);
    pdf.text(110, 130, 'Model: ' + vm.VehicleModelIn);
    pdf.text(155, 130, 'Color: ' + vm.vehicleColorIn);
    pdf.text(10, 140, 'License #: ' + vm.VehicleLicenseIn);
    pdf.text(60, 140, 'Photo Available: ' + vm.PhotoAvailableIn);
    pdf.line(10, 148, 206, 148);

    //History
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 160, 'History');
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 170, 'Has this person left before:   ' + vm.LeftBeforeIn);
    pdf.text(10, 180, 'Where were they found:   ' + vm.commentPreviouslyFoundIn);
    pdf.text(10, 190, 'Known Companions:   ' + vm.commentKnownCompanionsIn);
    pdf.text(10, 200, 'Disablity/Mental Problems:   ' + vm.DisabilityMentalIn);
    pdf.text(10, 210, 'Life threatening conditions:   ' + vm.LifeThreateningIn);
    pdf.text(10, 220, 'Medications:   ' + vm.MedicationsIn);
    pdf.text(10, 230, 'Victim of Abuse:   ' + vm.commentAbuseIn);
    pdf.text(10, 240, 'Additional History: ');
    var formatOtherHistoryIn = vm.OtherHistoryIn;
    var setOtherHistoryIn = pdf.splitTextToSize(formatOtherHistoryIn, 200);
    pdf.text(10, 250, setOtherHistoryIn);


    //page 4
    pdf.addPage();
    //page 4 header
    pdf.addImage(imgData, 'JPEG', 5, 10, 60, 30);
    pdf.setFontType('bold');
    pdf.setFontSize(18);
    pdf.text(70, 25, 'Missing Persons Intake Form');
    pdf.setFontSize(12);
    pdf.setFontType('bold');
    pdf.text(10, 45, 'MCM Case Number: ' + vm.caseIn);
    pdf.text(85, 45, 'Date of Intake to MCM: ' + vm.formatDateofIntaketoMCMIn); //+ vm.formatDateofIntaketoMCMIn
    pdf.line(10, 48, 206, 48);
    //end page 4 header

    // page 4 input
    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 60, 'Reporting Law Enforcement')
    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 70, 'Agency: ' + vm.LawEnforcementAgencyonCaseIn1);
    pdf.text(80, 70, 'Case Number: ' + vm.CaseNumberIn1);
    pdf.text(130, 70, 'Jurisdictional Denial: ' + vm.JurisdictionalDenialIn1);
    pdf.text(10, 76, 'Street Address: ' + vm.StreetAddressIn1);
    pdf.text(10, 82, 'Officer/Detective: ' + vm.OfficeDetectiveIn1);
    pdf.text(130, 82, 'Phone #: ' + vm.LEPhoneNumberIn1);
    pdf.text(10, 88, 'Notes:');

    pdf.text(10, 100, 'Agency: ' + vm.LawEnforcementAgencyonCaseIn2);
    pdf.text(80, 100, 'Case Number: ' + vm.CaseNumberIn2);
    pdf.text(130, 100, 'Jurisdictional Denial: ' + vm.JurisdictionalDenialIn2);
    pdf.text(10, 106, 'Street Address: ' + vm.StreetAddressIn2);
    pdf.text(10, 112, 'Officer/Detective: ' + vm.OfficeDetectiveIn2);
    pdf.text(130, 112, 'Phone #: ' + vm.LEPhoneNumberIn2);
    pdf.text(10, 118, 'Notes:');

    pdf.text(10, 130, 'Agency: ' + vm.LawEnforcementAgencyonCaseIn3);
    pdf.text(80, 130, 'Case Number: ' + vm.CaseNumberIn3);
    pdf.text(130, 130, 'Jurisdictional Denial: ' + vm.JurisdictionalDenialIn3);
    pdf.text(10, 136, 'Street Address: ' + vm.StreetAddressIn3);
    pdf.text(10, 142, 'Officer/Detective: ' + vm.OfficeDetectiveIn3);
    pdf.text(130, 142, 'Phone #: ' + vm.LEPhoneNumberIn3);
    pdf.text(10, 148, 'Notes:');

    pdf.text(10, 160, 'Agency: ' + vm.LawEnforcementAgencyonCaseIn4);
    pdf.text(80, 160, 'Case Number: ' + vm.CaseNumberIn4);
    pdf.text(130, 160, 'Jurisdictional Denial: ' + vm.JurisdictionalDenialIn4);
    pdf.text(10, 166, 'Street Address: ' + vm.StreetAddressIn4);
    pdf.text(10, 172, 'Officer/Detective: ' + vm.OfficeDetectiveIn4);
    pdf.text(130, 172, 'Phone #: ' + vm.LEPhoneNumberIn4);
    pdf.text(10, 178, 'Notes:');

    pdf.text(10, 190, 'Agency: ' + vm.LawEnforcementAgencyonCaseIn5);
    pdf.text(80, 190, 'Case Number: ' + vm.CaseNumberIn5);
    pdf.text(130, 190, 'Jurisdictional Denial: ' + vm.JurisdictionalDenialIn5);
    pdf.text(10, 196, 'Street Address: ' + vm.StreetAddressIn5);
    pdf.text(10, 202, 'Officer/Detective: ' + vm.OfficeDetectiveIn5);
    pdf.text(130, 202, 'Phone #: ' + vm.LEPhoneNumberIn5);
    pdf.text(10, 208, 'Notes:');

    // pdf.text(10,220, 'Other:' + vm.OtherLEIn5);
    var formatcommentOtherLEIn5 = vm.OtherLEIn5;
    var setcommentOtherLEIn5 = pdf.splitTextToSize(formatcommentOtherLEIn5, 200);
    pdf.text(10, 220, 'Additional Comments: ');
    pdf.text(10, 226, setcommentOtherLEIn5);


    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 5, 10, 60, 30);
    pdf.setFontType('bold');
    pdf.setFontSize(18);
    pdf.text(70, 25, 'Missing Persons Intake Form');
    pdf.setFontSize(12);
    pdf.setFontType('bold');
    pdf.text(10, 45, 'MCM Case Number: ' + vm.caseIn);
    pdf.text(85, 45, 'Date of Intake to MCM: ' + vm.formatDateofIntaketoMCMIn); //+ vm.formatDateofIntaketoMCMIn
    pdf.line(10, 48, 206, 48);

    pdf.setFontType('bold');
    pdf.setFontSize(14);
    pdf.text(10, 55, 'Additional Documents Attached:');


    pdf.text(10, 220, 'Person Requesting Assistance');
    pdf.line(10, 222, 206, 222);

    pdf.setFontType('normal');
    pdf.setFontSize(12);
    pdf.text(10, 230, 'Name: ' + vm.PRANameIn);
    pdf.text(10, 236, 'Address: ' + vm.PRAStreetAddressIn);
    pdf.text(10, 242, 'City: ' + vm.PRACityIn);
    pdf.text(80, 242, 'State: ' + vm.PRAStateIn);
    pdf.text(140, 242, 'Zip Code: ' + vm.PRAZIPCodeIn);
    pdf.text(10, 248, 'Home Phone: ' + vm.PRAHomePhoneIn);
    pdf.text(80, 248, 'Cell Phone: ' + vm.PRACellPhoneIn);
    pdf.text(140, 248, 'Email: ' + vm.PRAEmailIn);
    pdf.text(10, 258, 'Signature:');
    pdf.line(30, 259, 100, 259);

    pdf.text(140, 258, 'Date:');
    pdf.line(150, 259, 206, 259);

    pdf.save();
  }
  //shara working on pdf above
});
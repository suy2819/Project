module.exports = {
  logic: function() {
    console.log(this.form_No)
    var form_no = this.form_No
    var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
    var form1_info = {}; 
    var form2_info = {};
    var personality_insights = new PersonalityInsightsV3({
    url: "https://gateway.watsonplatform.net/personality-insights/api",
    "username": "4cc269a3-18ce-49bd-8a7e-cdb52f7492d0",
    "password": "01TDFXhrJOJ0",
    version_date: '2016-10-20',
    headers: {
        'X-Watson-Learning-Opt-Out': 'true'
    }
    });
    personality_insights.profile({
          text: this.content,
          consumption_preferences: true
          },
          function (err, response) {
            if (err)
              console.log('error:', err);
            else
              // console.log(JSON.stringify(response, null, 2));
              if(form_no == 1){
                form1_info = JSON.stringify(response, null, 2)
                console.log('form1')
                console.log(form1_info)
              }else{
                form2_info = JSON.stringify(response, null, 2)
                console.log('form2')
                console.log(form2_info)
              }
               
    });
    }
};
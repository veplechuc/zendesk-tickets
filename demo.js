var zd = require('node-zendesk'),
    fs = require('fs');
    nconf =  require('nconf')

var client = zd.createClient({
  debug:     true,
  username:  'developer-support@versionone.com',
  token:     nconf.get('zendeskToken'),
  remoteUri: 'https://remote.zendesk.com/api/v2'
});

//verify connection
client.users.auth(function (err, res, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.stringify(result.verified, null, 2, true));
});


// client.users.list(function (err, req, result) {
//    if (err) {
//      console.log(err);
//      return;
//    }
//    console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
//  });

// display tickets
// client.tickets.list(function (err, statusList, body, responseList, resultList) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(JSON.stringify(body, null, 2, true));//will display all tickets
// });


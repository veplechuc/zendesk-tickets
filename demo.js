var zd = require('node-zendesk'),
    fs = require('fs');

var client = zd.createClient({
  debug:     true,
  username:  'developer-support@versionone.com',
  password:  'sJ5Z&VjZ',
  remoteUri: 'https://versiononesupport.zendesk.com/agent/'
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


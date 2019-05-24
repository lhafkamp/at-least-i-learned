export default function() {
  this.namespace = '/api';

  let requirements = [];

  this.get('/requirements', function() {
    return {
      data: requirements
    };
  });

  this.post('/requirements/', function(db, request) {
    console.log(request.requestBody);
    return {
      data: requirements
    };
  });
}

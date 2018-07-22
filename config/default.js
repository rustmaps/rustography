module.exports = {
  github: {
    clientID: '34188f7c0320453f1266', // Go to github.com, create an application and add clientID
    clientSecret: 'eb130491a2280c2ddc6e5e676034c70f5e749d59' // Go to github.com, create an application and add clientSecret
  },
  twitter: {
    consumerKey: 'JWpjFGiDxfcKcEx8OqEsaUmPj', // Go to apps.twitter.com, create an application and add consumerKey
    consumerSecret: 'OBJTTAp4rwKQy7T5XOItBTwG9LttT0MeqKKgwysAvO8LtqN8fQ' // Go to apps.twitter.com, create an application and add consumerSecret
  },
  url: '127.0.0.1',
  ports: {
    http: 3001
  },
  rethinkdb: {
    host: 'localhost',
    port: 28015,
    db: 'passport_rethinkdb_tutorial'
  }
};

module.exports = {

  datastores: {
    default: {
      adapter: 'sails-postgresql',
      url: 'postgres://rusmbwwktrjvdu:7d2087e740848a0b892110128863f09976434c1d3d64f548ad8c2bec2145d251@ec2-54-247-124-154.eu-west-1.compute.amazonaws.com:5432/d42hoiv6mrljrf',
      ssl: true,
    },

  },

  models: {
    migrate: 'safe'
  },

  blueprints: {
    shortcuts: false,
  },

  security: {

    cors: {
      allowOrigins: [
        'http://localhost',
        'https://beevaffinity.herokuapp.com'
      ]
    },

  },

  session: {

    cookie: {
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    },

  },

  sockets: {

    onlyAllowOrigins: [
      'http://localhost',
      'https://beevaffinity.herokuapp.com'
    ],

  },

  log: {
    level: 'debug'
  },



  http: {

    cache: 365.25 * 24 * 60 * 60 * 1000,
    trustProxy: true,
  },

  // ssl: undefined,

  custom: {
    baseUrl: '/',
    internalEmailAddress: 'beatriz.demiguel.next@bbva.com'
  },



};

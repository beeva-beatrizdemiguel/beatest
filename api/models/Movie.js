/**
 * Movie.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: { type: 'string', required: true },
    sinopsis: { type: 'string', required: true },
    duration: { type: 'number', columnType: 'FLOAT', required: true },
    poster: { type: 'string', required: true },
    ratingFilmaffinity: { type: 'number', columnType: 'FLOAT', required: false },
    publisher: { model: 'user' }, // relation with User
    country: { model: 'country' }, // relation with Country
    actors: { model: 'actor' }, // relation with Actor
    directors: { model: 'director' }, // relation with director
  }

};


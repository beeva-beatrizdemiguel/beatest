/**
 * Director.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    movies: { collection: 'movie', via: 'directors' }, // relation with Movie
    artist: { model: 'artist', unique: true } // relation with Artist
  }

};


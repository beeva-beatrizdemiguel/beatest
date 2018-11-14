const faker = require('faker');
const randomId = (items) =>  items[Math.floor(Math.random() * items.length)].id;

module.exports.bootstrap = async function() {

  if (process.env.NODE_ENV === 'production' || sails.config.models.migrate === 'safe') {
    sails.log.warn('Since we are running with migrate: \'safe\' and/or NODE_ENV=production (in the "' + sails.config.environment + '" Sails environment, to be precise), skipping the rest of the bootstrap to avoid data loss...');
    return done();
  }

  await sails.models.user.createEach([
    { emailAddress: 'admin@example.com', fullName: 'Ryan Dahl', password: 'abc123' },
  ]).fetch();

  const fakeCountries = [];

  for (let i = 0; i < 100; i++) {
    fakeCountries.push({
      name: faker.address.country(),
      code: faker.address.countryCode()
    });
  }

  const countries = await sails.models.country.createEach(fakeCountries).fetch();

  const fakeMovies = [];

  for (let i = 0; i < 100; i++) {
    fakeMovies.push({
      title: faker.random.word(),
      sinopsis: faker.lorem.text(),
      duration: faker.random.number(200),
      poster: faker.image.imageUrl(),
      ratingFilmaffinity:  faker.random.number(10),
      country: randomId(countries)
    });
  }

  const movies = await sails.models.movie.createEach(fakeMovies).fetch();

  const fakeArtists = [];

  for (let i = 0; i < 100; i++) {
    fakeArtists.push({
      fullName: faker.name.findName(),
      birthDate: faker.date.past(),
      nationality: faker.address.country(),
      photo: faker.image.imageUrl(),
      gender: i % 2 ? 'female': 'male'
    });
  }

  const artists = await sails.models.artist.createEach(fakeArtists).fetch();

  // create associations
  for (let index = 0; index < artists.length; index++) {
    const type =  Boolean(index % 2) ? 'actor': 'director';
    const artistType = await sails.models[type].create({}).fetch();

    // add new actor or director
    await sails.models[type].update({ id: artistType.id }).set({ artist: artists[index].id });
    //add random movies
    await sails.models[type].addToCollection(artistType.id, 'movies', [randomId(movies), randomId(movies)]);
  }

};

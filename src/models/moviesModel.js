const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rated: String,
    released: Date,
    runtime: Number,
    countries: [String],
    genres: [String],
    director: String,
    writers: [String],
    actors: [String],
    plot: String,
    poster: String,
    imdb: {
        id: String,
        rating: Number,
        votes: Number
    },
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    type: String,
});

module.exports = mongoose.model('Movie', MoviesSchema);

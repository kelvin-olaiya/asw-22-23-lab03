const moviesController = require("../controllers/moviesController");
const {Router} = require("express");
// const router = new Router();

module.exports = (app) => {
    app.route('/').get(moviesController.hello_world);
    app.route('/movies')
        .get(moviesController.list_movies)
        .post(moviesController.create_movie);

    app.route("/movies/:id")
        .get(moviesController.read_movie)
        .put(moviesController.update_movie)
        .delete(moviesController.delete_movie);
};
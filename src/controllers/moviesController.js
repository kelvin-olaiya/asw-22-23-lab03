const Movie = require("../models/moviesModel");

exports.list_movies = async (req,res) => {
    try {
        let users = Movie.find({});
        console.log(req.query);
        if (req.query.actor && req.query.from && req.query.to) {
            users = users.where("actors").in(req.query.actor)
                .where("year").gte(req.query.from).lte(req.query.to)
        }
        // const users = await Movie.find({}).exec();
        res.json(await users.exec());
    } catch (error) {
        res.send(error);
    }
}

exports.read_movie = async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id).exec();
        res.json(movie);
    } catch (error) {
        res.send(error);
    }
}

exports.create_movie = async (req,res) => {
    let new_movie = new Movie(req.body);
    try {
        new_movie = await new_movie.save();
        res.json(new_movie);
    } catch (error) {
        res.send(error);
    }
}

exports.update_movie = async (req,res) => {
    try {
        const updated_movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated_movie);
    } catch (error) {
        res.send(error);
    }
}

exports.delete_movie = async (req,res) => {
    try {
        const deleted_movie = await Movie.findByIdAndDelete(req.params.id);
        res.json({description: deleted_movie.id + " deleted"})
    } catch (error) {
        res.send(error);
    }
}

exports.hello_world = (req, res) => {
    res.send('Hello World!');
};
const db= require("../database/models");
const { Op } = require('sequelize')

module.exports= {
    list: (req,res) => {
        db.Pelicula.findAll()
        .then(movies => {
            res.render("moviesList",{
                movies
            });
        })
        .catch(error => 
            console.log("Error en Lista de Peliculas")
        );
    },
    detail: (req,res) => {
        db.Pelicula.findByPk(req.params.id)
        .then(movie => {
            res.render("moviesDetail",
            {
                movie
            })
        })
        .catch(error => {
            console.log("ERROR en Detalle")
        });
    },
    new: (req,res) => {
        db.Pelicula.findAll({
            order:[
                [ 'release_date', 'DESC'],
            ]
        })
        .then(movies => {
            res.render("newestMovies", 
            {
                movies
            })
        })
        .catch(error => {
            console.log("ERROR en Nuevas Peliculas")
        });
    },
    recomended: (req,res) => {
        db.Pelicula.findAll({
            where : {
                rating : {
                    [Op.gt]: 8
                }
            },
            order:[
                [ 'release_date', 'DESC']
            ],
            limit: 5
        })
        .then(movies => {
            res.render("recommendedMovies", 
            {
                movies
            })
        })
        .catch(error => {
            console.log("ERROR en Recomendados")
        });
    }
}
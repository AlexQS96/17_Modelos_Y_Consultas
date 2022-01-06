module.exports= (sequelize,DataTypes)=>{
    let alias = 'Pelicula';

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING(500),
            allowNull: false
        },
        rating:{
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        release_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        length:{
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        },
        genre_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        }
    };

    let config = {
        tableName: 'movies',
        timestamps: true,
        underscored: true
    };

    const Movie = sequelize.define(alias,cols,config);

    return Movie;
}
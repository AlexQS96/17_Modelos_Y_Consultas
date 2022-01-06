module.exports= (sequelize,DataTypes)=>{
    let alias = 'Genre';
    
    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        active:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    };

    let config = {
        tableName: 'genres',
        timestamps: true,
        underscored: true
    };

    const Genre = sequelize.define(alias,cols,config);

    return Genre;
}
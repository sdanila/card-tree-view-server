import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Images extends Model { }

Images.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'images',
    timestamps: false
  }
);

export default Images;
export default (sequelize, type) => sequelize.define('list', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: type.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Title cannot be empty. Please enter a title.'
      }
    }
  }
},{
  timestamps: false
})
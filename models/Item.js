export default (sequelize, type) => sequelize.define('item', {
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
        msg: 'title cannot be empty. please enter a title.'
      }
    }
  },
  description: {
    type: type.TEXT
  },
  dueDate: {
    type: type.DATEONLY,
    allowNull: true,
    validate: {
      isDate: {
        msg: 'Date must be a date string (YYYY-MM-DD, MM/DD/YYYY, etc) or null'
      }
    }
  }

}, {
  timestamps: false
})
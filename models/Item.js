export default (sequelize, type) => sequelize.define('item', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: type.STRING,
    allowNull: false,
    valdate: {
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
    validate: {
      isDate: {
        msg: 'Date must be a date string (YYYY-MM-DD, MM/DD/YYYY, etc)'
      }
    }
  }

}, {
  timestamps: false
})
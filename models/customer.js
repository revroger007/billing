'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      customer_code: { type: DataTypes.STRING, allowNull: false, unique: true },
      package_id: { type: DataTypes.INTEGER },
      profile_id: { type: DataTypes.INTEGER },
      router_id: { type: DataTypes.INTEGER },
      installation_date: { type: DataTypes.DATEONLY },
      installation_price: { type: DataTypes.DECIMAL },
      due_date: { type: DataTypes.INTEGER },
      is_auto_isolate: { type: DataTypes.BOOLEAN, defaultValue: true },
      extended_until: DataTypes.DATE,
      extension_note: DataTypes.TEXT,
      extended_by: DataTypes.INTEGER,
      status: { type: DataTypes.ENUM('active', 'isolated', 'off'), defaultValue: 'active' },
      reseller_id: DataTypes.INTEGER,
    },
    {
      tableName: 'customers',
      timestamps: false,
    }
  );

  Customer.associate = (models) => {
    Customer.belongsTo(models.Profile, { foreignKey: 'profile_id' });
    Customer.hasMany(models.Invoices, { foreignKey: 'customer_id' });
  };

  return Customer;
};

'use strict';
module.exports = function(sequelize, DataTypes) {
  var SupportingDocument = sequelize.define('SupportingDocument', {
    SupportingDocumentDepositDate: DataTypes.DATEONLY,
    SupportingDocumentType: DataTypes.STRING,
    SupportingDocumentAttachmentUrl: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SupportingDocument;
};
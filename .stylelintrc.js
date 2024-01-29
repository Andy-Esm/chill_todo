const { propertyGroups } = require('stylelint-config-clean-order')

const propertiesOrder = propertyGroups.map((properties) => ({
  emptyLineBefore: 'never', // Don't add empty lines between order groups.
  noEmptyLineBetween: true,
  properties,
}))

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  plugins: ['stylelint-order'],
  rules: {
    
    'import-notation': null,
    'no-empty-source': null,
    'order/properties-order': [propertiesOrder],
    'property-no-vendor-prefix': null,
    
  },
}

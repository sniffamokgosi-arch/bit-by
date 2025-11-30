import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import destination from './destination'
import booking from './booking'
import home from './home'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([home,destination,booking])
})

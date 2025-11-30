export default {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    {name:'name',type:'string'},
    {name:'email',type:'string'},
    {name:'phone',type:'string'},
    {name:'people',type:'number'},
    {name:'destination',type:'string'},
    {name:'basePrice',type:'number'},
    {name:'createdAt',type:'datetime'}
  ]
}

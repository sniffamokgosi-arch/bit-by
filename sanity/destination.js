export default {
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    {name:'title',type:'string'},
    {name:'slug',type:'slug',options:{source:'title'}},
    {name:'subtitle',type:'string'},
    {name:'heroImage',type:'image'},
    {name:'gallery',type:'array',of:[{type:'image'}]},
    {name:'description',type:'text'},
    {name:'price',type:'number'}
  ]
}

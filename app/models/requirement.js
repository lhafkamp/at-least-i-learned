import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  type: attr('string'),
  required: attr('boolean')
});

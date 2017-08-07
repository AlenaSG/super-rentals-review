import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr(),
  message: DS.attr(),
});

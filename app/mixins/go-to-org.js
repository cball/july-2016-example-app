import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel() {
    this.transitionTo('organizations');
  },

  prop1: 'thing'
});

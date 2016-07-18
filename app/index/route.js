import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('organizations');
  }

  // model() {
  //   // fetch some data to key off of for transition
  // },
  //
  // afterModel(model) {
  //   // const page = model.something ? 'asdf' : 'asdf2'
  // }
});

import Ember from 'ember';
import GoToOrg from '../mixins/go-to-org';

export default Ember.Route.extend(GoToOrg, {
  beforeModel() {
    // some other logic
    this._super(...arguments);
  }

  // model() {
  //   // fetch some data to key off of for transition
  // },
  //
  // afterModel(model) {
  //   // const page = model.something ? 'asdf' : 'asdf2'
  // }
});

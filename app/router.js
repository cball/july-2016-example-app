import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('organizations', function() {
    this.route('organization', { path: ':login' });
  });

  // if not nested route
  // this.route('organization', { path: '/organizations/:login'});
});

export default Router;

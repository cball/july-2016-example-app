import Ember from 'ember';
import config from '../../config/environment';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model({ login }) {
    // let repos = this.get('ajax').request(`https://api.github.com/orgs/${login}/repos?access_token=${config.GITHUB_TOKEN}`);
    let organization = this.modelFor('organizations').findBy('login', login);
    let repos = organization.get('repositories');

    return RSVP.hash({
      organization,
      repos
    });
  }
});

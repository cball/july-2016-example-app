import Ember from 'ember';
import RSVP from 'rsvp';
// import config from '../config/environment';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    // return [
    //   { id: 1, name: 'Org 1', isStarred: true },
    //   { id: 2, name: 'Org 2', isStarred: false }
    // ];
    //
    // return RSVP.all([
    //   this.get('ajax').request(`https://api.github.com/orgs/electron?access_token=${config.GITHUB_TOKEN}`),
    //   this.get('ajax').request(`https://api.github.com/orgs/emberjs?access_token=${config.GITHUB_TOKEN}`)
    // ]);

    return RSVP.all([
      this.store.findRecord('organization', 'electron'),
      this.store.findRecord('organization', 'emberjs')
    ]);
  },

  actions: {
    star(organization) {
      // handle plain js objects or ember objects
      let starred = Ember.get(organization, 'isStarred');
      Ember.set(organization, 'isStarred', !starred);
    }
  }
});

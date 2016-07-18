import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1, name: 'Org 1', isStarred: true },
      { id: 2, name: 'Org 2', isStarred: false }
    ];
  },

  actions: {
    star(organization) {
      // handle plain js objects or ember objects
      let starred = Ember.get(organization, 'isStarred');
      Ember.set(organization, 'isStarred', !starred);
    }
  }
});

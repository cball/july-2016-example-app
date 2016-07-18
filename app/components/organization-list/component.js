import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  organizations: null,

  starredOrganizations: Ember.computed.filterBy('organizations', 'isStarred', true),
  hasStarredOrganizations: Ember.computed.gt('starredOrganizations.length', 0),

  init() {
    this._super(...arguments);

    // default organizations to [] if not provided
    let organizations = this.get('organizations');
    this.set('organizations', organizations || []);

    // OR if you prefer this way, only use in init!
    // this.organizations = this.organizations || [];
  }
});

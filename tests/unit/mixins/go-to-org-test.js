import Ember from 'ember';
import GoToOrgMixin from 'repo-browser/mixins/go-to-org';
import { module, test } from 'qunit';

module('Unit | Mixin | go to org');

// Replace this with your real tests.
test('it works', function(assert) {
  let GoToOrgObject = Ember.Object.extend(GoToOrgMixin);
  let subject = GoToOrgObject.create();
  assert.ok(subject);
});

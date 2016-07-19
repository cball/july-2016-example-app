import linksForPayload from 'repo-browser/utils/links-for-payload';
import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | Utility | links for payload');

test('returns a hash with url removed from the keys', function(assert) {
  let payload = {
    repositories_url: 'foo'
  };

  let result = linksForPayload(payload);

  assert.equal(result.repositories, 'foo', 'should have repositories property with foo');
});

test('only returns properties that end in _url', function(assert) {
  let payload = {
    hello: 'there',
    repositories_url: 'foo'
  };

  let result = linksForPayload(payload);

  assert.ok(Ember.isEmpty(result.hello), 'should not return keys without _url');
});

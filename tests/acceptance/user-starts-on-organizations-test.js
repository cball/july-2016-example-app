import { test } from 'qunit';
import moduleForAcceptance from 'repo-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user starts on organizations');

test('visiting / transitions to /organizations', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/organizations');
  });
});

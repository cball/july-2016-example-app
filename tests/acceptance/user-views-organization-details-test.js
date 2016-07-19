import { test } from 'qunit';
import moduleForAcceptance from 'repo-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user views organization details');

test('clicking an organization shows details', function(assert) {
  // (we are using hardcoded data right now)
  visit('/organizations');

  // andThen(() => pauseTest());
  click('li.organization:contains(Electron) a');

  andThen(function() {
    let repos = find('.test-repo-list');

    assert.equal(currentURL(), '/organizations/electron', 'should transition');
    assert.ok(repos.length > 0, 'should have some repositories');
  });
});

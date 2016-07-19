import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { K } = Ember;

moduleForComponent('organization-list', 'Integration | Component | organization list', {
  integration: true
});

test('shows a list of organizations', function(assert) {
  this.set('actions', {
    onSave: K
  });
  this.set('organizations', [
    { login: 'someLogin', name: 'someName' },
    { login: 'anotherLogin', name: 'anotherName' }
  ]);

  this.render(hbs`{{organization-list organizations=organizations on-save=(action 'onSave')}}`);

  assert.equal(this.$('li.organization').length, 2, 'should show the orgs in a list');
  assert.equal(this.$('li:contains(someName)').length, 1, 'should show the name');
});

test('yields organizations to allow customization', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('actions', {
    onSave: K
  });
  this.set('organizations', [
    { login: 'someLogin', name: 'someName' },
    { login: 'anotherLogin', name: 'anotherName' }
  ]);

  this.render(hbs`
    {{#organization-list organizations=organizations on-save=(action 'onSave') as |org|}}
      {{org.login}}
    {{/organization-list}}
  `);

  assert.equal(this.$('li:contains(someLogin)').length, 1, 'should show the login');
});

test('uses yield to inverse if no organizations', function(assert) {
  this.render(hbs`
    {{#organization-list organizations=organizations}}
    {{else}}
      Sorry boutcha.
    {{/organization-list}}
  `);

  assert.equal(this.$().text().trim(), 'Sorry boutcha.', 'should use the else block');
});

test('calls the on-save action', function(assert) {
  assert.expect(1);

  let organization = { login: 'someLogin', name: 'someName' };
  let organizations = [organization];

  this.setProperties({
    organizations,
    actions: {
      saveOrganization(org) {
        assert.equal(org, organization);
      }
    }
  });

  this.render(hbs`{{organization-list organizations=organizations on-save=(action 'saveOrganization')}}`);

  this.$('.star').click();
});

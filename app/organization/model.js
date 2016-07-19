import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  login: attr('string'),
  avatarUrl: attr('string'),
  publicRepos: attr('number'),

  repositories: hasMany('repository')
});

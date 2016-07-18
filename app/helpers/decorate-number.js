import Ember from 'ember';

export function decorateNumber([num], { loud }) {
  let output = num === 1 ? `${num}` : `${num}!!`;

  if (loud) {
    output = `<strong>${output}</strong>`;
  }

  return Ember.String.htmlSafe(output);
}

export default Ember.Helper.helper(decorateNumber);

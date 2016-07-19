import { ActiveModelSerializer } from 'active-model-adapter';
import linksForPayload from '../utils/links-for-payload';

export default ActiveModelSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const newRoot = primaryModelClass.modelName;
    let newPayload = {};

    payload.links = linksForPayload(payload);
    newPayload[newRoot] = payload;

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});

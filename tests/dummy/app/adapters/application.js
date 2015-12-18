import ENV from '../config/environment';
import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  authorizer: 'authorizer:devise',
  //host: ENV.adapterUrl,
  shouldBackgroundReloadAll() {
    return false;
  }
});

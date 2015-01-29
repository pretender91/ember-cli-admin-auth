// Generated by CoffeeScript 1.8.0
import Ember from 'ember';
import BaseActionsMixin from 'ember-cli-admin/mixins/controllers/base-actions';
import FileUploadMixin from 'ember-cli-admin/mixins/controllers/fileupload';
import AttributesMixin from 'ember-cli-admin/mixins/controllers/attributes';
import PaginationMixin from 'ember-cli-admin/mixins/controllers/pagination';
import BatchActionsMixin from 'ember-cli-admin/mixins/controllers/batch-actions';
import FormActionsMixin from 'ember-cli-admin/mixins/controllers/form-actions';
import BaseDecorator from 'ember-cli-admin/decorators/base-decorator';
import SearchMixin from 'ember-cli-admin/mixins/controllers/search';
import QueryParams from 'ember-cli-admin/mixins/controllers/query-params';
import SortMixin from 'ember-cli-admin/mixins/controllers/sort';
import SidebarMixin from 'ember-cli-admin/mixins/controllers/sidebar';

var baseMixin;

baseMixin = Ember.Mixin.create({
  decorator: (function() {
    if (this.get('model')) {
      return BaseDecorator.create({
        model: this.get('model')
      });
    }
  }).property('model'),
  _name: (function() {
    return this._debugContainerKey.split(":")[1].replace(/(\/[Ss]how)|(\/[Ee]dit)|(\/[Nn]ew)/, '');
  }).property()
});

baseMixin.reopen(BaseActionsMixin, FileUploadMixin, AttributesMixin, QueryParams, PaginationMixin, BatchActionsMixin,
  FormActionsMixin, SearchMixin, SortMixin, SidebarMixin);

export default baseMixin;
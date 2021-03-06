import Base from '../Base';
import LaunchUpdateMixin from '../mixins/LaunchUpdate.mixin';

class InventorySources extends LaunchUpdateMixin(Base) {
  constructor(http) {
    super(http);
    this.baseUrl = '/api/v2/inventory_sources/';

    this.createSyncStart = this.createSyncStart.bind(this);
    this.destroyGroups = this.destroyGroups.bind(this);
    this.destroyHosts = this.destroyHosts.bind(this);
  }

  createSyncStart(sourceId, extraVars) {
    return this.http.post(`${this.baseUrl}${sourceId}/update/`, {
      extra_vars: extraVars,
    });
  }

  destroyGroups(id) {
    return this.http.delete(`${this.baseUrl}${id}/groups/`);
  }

  destroyHosts(id) {
    return this.http.delete(`${this.baseUrl}${id}/hosts/`);
  }
}
export default InventorySources;

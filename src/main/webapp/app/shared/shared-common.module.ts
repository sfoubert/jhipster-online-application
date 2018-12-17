import { NgModule } from '@angular/core';

import { JhipsterOnlineApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterOnlineApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterOnlineApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterOnlineApplicationSharedCommonModule {}

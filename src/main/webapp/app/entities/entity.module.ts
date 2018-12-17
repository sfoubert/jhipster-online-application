import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterOnlineApplicationCarModule } from './car/car.module';
import { JhipsterOnlineApplicationDocumentModule } from './document/document.module';
import { JhipsterOnlineApplicationContentModule } from './content/content.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterOnlineApplicationCarModule,
        JhipsterOnlineApplicationDocumentModule,
        JhipsterOnlineApplicationContentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterOnlineApplicationEntityModule {}

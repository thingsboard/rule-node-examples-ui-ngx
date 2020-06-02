import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentsModule } from '@home/components/public-api';
import {
  TranslateService
} from '@ngx-translate/core';
import addCustomNodesLocaleEnglish from './locale/custom-nodes-locale.constant';
import { SharedModule } from '@shared/public-api';
import { CustomNodesConfigFilterModule } from './components/filter/custom-nodes-config-filter.module';
import { CustomNodesConfigEnrichmentModule } from './components/enrichment/custom-nodes-config-enrichment.module';
import { CustomNodesConfigTransformModule } from './components/transform/custom-nodes-config-transform.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeComponentsModule
  ],
  exports: [
    CustomNodesConfigFilterModule,
    CustomNodesConfigEnrichmentModule,
    CustomNodesConfigTransformModule
  ]
})
export class CustomNodesConfigModule {

  constructor(translate: TranslateService) {
    addCustomNodesLocaleEnglish(translate);
  }

}

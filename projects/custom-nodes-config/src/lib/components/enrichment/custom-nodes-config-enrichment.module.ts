import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { GetSumIntoMetadataConfigComponent } from './get-sum-into-metadata-config.component';

@NgModule({
  declarations: [
    GetSumIntoMetadataConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GetSumIntoMetadataConfigComponent
  ]
})
export class CustomNodesConfigEnrichmentModule {
}

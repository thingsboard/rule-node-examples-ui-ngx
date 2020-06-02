import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { GetSumConfigComponent } from './get-sum-config.component';

@NgModule({
  declarations: [
    GetSumConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GetSumConfigComponent
  ]
})
export class CustomNodesConfigTransformModule {
}

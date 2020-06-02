import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { CheckKeyConfigComponent } from './check-key-config.component';

@NgModule({
  declarations: [
    CheckKeyConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CheckKeyConfigComponent
  ]
})
export class CustomNodesConfigFilterModule {
}

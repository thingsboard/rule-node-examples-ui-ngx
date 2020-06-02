import { Component } from '@angular/core';
import { AppState } from '@core/public-api';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tb-enrichment-node-sum-into-metadata-config',
  templateUrl: './get-sum-into-metadata-config.component.html',
  styleUrls: []
})
export class GetSumIntoMetadataConfigComponent extends RuleNodeConfigurationComponent {

  getSumIntoMetadataConfigForm: FormGroup;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.getSumIntoMetadataConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.getSumIntoMetadataConfigForm = this.fb.group({
      inputKey: [configuration ? configuration.inputKey : null, [Validators.required]],
      outputKey: [configuration ? configuration.outputKey : null, [Validators.required]]
    });
  }

}

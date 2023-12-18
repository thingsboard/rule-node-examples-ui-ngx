import { Component } from '@angular/core';
import { AppState, isDefinedAndNotNull } from '@core/public-api';
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
      inputKey: [configuration.inputKey, [Validators.required]],
      outputKey: [configuration.outputKey, [Validators.required]]
    });
  }

  protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration {
    return {
      inputKey: isDefinedAndNotNull(configuration?.inputKey) ? configuration.inputKey : null,
      outputKey: isDefinedAndNotNull(configuration?.outputKey) ? configuration.outputKey : null
    };
  }

}

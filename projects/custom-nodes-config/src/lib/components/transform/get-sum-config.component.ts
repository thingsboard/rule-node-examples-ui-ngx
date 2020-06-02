import { Component } from '@angular/core';
import { AppState } from '@core/public-api';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tb-transformation-node-sum-config',
  templateUrl: './get-sum-config.component.html',
  styleUrls: []
})
export class GetSumConfigComponent extends RuleNodeConfigurationComponent {

  getSumConfigForm: FormGroup;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.getSumConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.getSumConfigForm = this.fb.group({
      inputKey: [configuration ? configuration.inputKey : null, [Validators.required]],
      outputKey: [configuration ? configuration.outputKey : null, [Validators.required]]
    });
  }

}

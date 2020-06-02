import { Component } from '@angular/core';
import { AppState } from '@core/public-api';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tb-filter-node-check-key-config',
  templateUrl: './check-key-config.component.html',
  styleUrls: []
})
export class CheckKeyConfigComponent extends RuleNodeConfigurationComponent {

  checkKeyConfigForm: FormGroup;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.checkKeyConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.checkKeyConfigForm = this.fb.group({
      key: [configuration ? configuration.key : null, [Validators.required]]
    });
  }

}

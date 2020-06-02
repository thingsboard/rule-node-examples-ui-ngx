import { TranslateService } from '@ngx-translate/core';

export default function addCustomNodesLocaleEnglish(translate: TranslateService) {

    const enUS = {
      tb: {
        rulenode: {
          'msg-key': 'Message key',
          'input-key': 'Input key',
          'output-key': 'Output key'
        }
      }
    };
    translate.setTranslation('en_US', enUS, true);
}

import { Injectable, Type } from '@angular/core';

import { RuleService } from './rule.service';

import { EntityTypeRouterComponent } from './router/entitytype.router';
import { ThComponent } from './simple/th';
import { FormLineComponent } from './simple/form.line';
import { ShowLineComponent } from './simple/show.line';
import { EntityLineComponent } from './simple/entity.line';
import { TdComponent } from './simple/td';

@Injectable()
export class WidgetService {

  constructor(ruleService: RuleService) {
    ruleService.addDefaultEntityTypeRule('entitytypes_menu', EntityTypeRouterComponent);
    ruleService.addDefaultPropertyTypeRule('table_head', ThComponent);
    ruleService.addPropertyTypeRule('form_line', '*', 'matricula', null, FormLineComponent, { inputType: 'number'});
    ruleService.addDefaultPropertyTypeRule('form_line', FormLineComponent, { inputType: 'text'});
    ruleService.addDefaultPropertyRule('show_line', ShowLineComponent);
    ruleService.addDefaultEntityRule('table_lines', EntityLineComponent);
    ruleService.addDefaultPropertyRule('table_cell', TdComponent);
  }

}

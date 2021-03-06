import { forwardRef } from '@angular/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlainTextComponent } from './plain';
import { BoldTextComponent } from './bold';
import { ThComponent } from './th';
import { FormLineComponent } from './form.line';
import { ShowLineComponent } from './show.line';
import { EntityLineComponent } from './entity.line';
import { TdComponent } from './td';

import { MetaModule } from '../../meta/meta.module';
import { PipesModule } from '../../pipes/pipes.module';

export const SIMPLE_WIDGETS_DIRECTIVES = [
  forwardRef(() => PlainTextComponent),
  forwardRef(() => BoldTextComponent),
  forwardRef(() => ThComponent),
  forwardRef(() => FormLineComponent),
  forwardRef(() => ShowLineComponent),
  forwardRef(() => EntityLineComponent),
  forwardRef(() => TdComponent)
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    MetaModule
  ],
  declarations: [
    SIMPLE_WIDGETS_DIRECTIVES
  ],
  exports: [
    SIMPLE_WIDGETS_DIRECTIVES,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SimpleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularResizedEventModule } from 'angular-resize-event';

const sharedModules = [
  AngularResizedEventModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class SharedModule { }

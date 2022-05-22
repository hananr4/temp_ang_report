import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { DxReportViewerModule } from 'devexpress-reporting-angular';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    DxDataGridModule, 
    DxFormModule,
    DxReportViewerModule,
  ],
})
export class DevextremeModule { }

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ 
    './home.component.scss',
    '../../../../node_modules/devextreme/dist/css/dx.light.css',
  "../../../../node_modules/jquery-ui/themes/base/all.css",
   "../../../../node_modules/devextreme/dist/css/dx.light.css",
   "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
   "../../../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
   "../../../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css",
 ]
})

export class HomeComponent {
  reportUrl: string = 'ReporteTest';
  hostUrl: string = 'https://localhost:7191/';
  // Use this line if you use an ASP.NET MVC backend
  //invokeAction: string = "/WebDocumentViewer/Invoke";
  // Use this line if you use an ASP.NET Core backend
  invokeAction: string = 'DXXRDV'; 
  constructor() {}
}

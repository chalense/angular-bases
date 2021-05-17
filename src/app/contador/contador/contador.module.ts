import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        BrowserModule,
        CommonModule
    ]
})

export class ContadorModule{}
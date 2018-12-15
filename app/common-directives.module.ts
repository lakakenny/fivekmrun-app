import { DATAFORM_DIRECTIVES } from "nativescript-ui-dataform/angular";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        DATAFORM_DIRECTIVES
    ],
    imports: [
    ],
    exports: [
        DATAFORM_DIRECTIVES
    ]
})

export class CommonDirectivesModule {
    constructor() {}
}
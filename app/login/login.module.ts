import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

if (module['hot']) {
    module['hot'].accept();
  }  

@NgModule({
    imports: [
        LoginRoutingModule,
        NativeScriptFormsModule,
        CommonModule,
        NativeScriptCommonModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }

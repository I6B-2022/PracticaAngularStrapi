import { NgModule } from '@angular/core';

import { FormularioRoutingModule } from './formulario-routing.module';

import { WelcomeComponent } from './formulario.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [FormularioRoutingModule, NzAvatarModule, NzInputNumberModule, CommonModule, FormsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class FormularioModule { }

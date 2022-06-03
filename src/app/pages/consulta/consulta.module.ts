import { NgModule } from '@angular/core';

import { ConsultaRoutingModule } from './consulta-routing.module';


import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ConsultaComponent} from "./consulta.component";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";


@NgModule({
  imports: [ConsultaRoutingModule, NzAvatarModule, NzInputNumberModule, CommonModule, FormsModule, HttpClientModule, NzDividerModule, NzTableModule],
  declarations: [ConsultaComponent],
  exports: [ConsultaComponent]
})
export class ConsultaModule { }

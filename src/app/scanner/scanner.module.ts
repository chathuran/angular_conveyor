import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ScannerComponent],
  imports: [
    CommonModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule
  ]
})
export class ScannerModule { }

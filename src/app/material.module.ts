import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';



export const arr:any[] = [MatTableModule,
                          MatButtonModule,
                          MatIconModule,
                          MatMenuModule,
                          MatPaginatorModule];

@NgModule({
  imports: [arr],
  exports:[arr]
})
export class MaterialModule { }

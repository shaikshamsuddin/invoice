import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';







export const arr:any[] = [MatTableModule,
                          MatButtonModule,
                          MatDividerModule,
                          MatIconModule,
                          MatCardModule,
                          MatMenuModule,
                          MatSidenavModule,
                          FlexLayoutModule,
                          MatPaginatorModule,
                          MatDialogModule,
                          MatToolbarModule];

@NgModule({
  imports: [arr],
  exports:[arr]
})
export class MaterialModule { }

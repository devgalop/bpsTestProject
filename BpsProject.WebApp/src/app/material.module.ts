import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    exports: [
        MatToolbarModule, 
        MatCardModule, 
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule
    ]
})

export class MaterialModule {}
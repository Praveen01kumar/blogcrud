import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, MatExpansionModule, MatInputModule, MatProgressBarModule,MatCardModule, MatIconModule,],
  exports: [NavbarComponent, MaterialModule, CommonModule, RouterModule, FormsModule, MatExpansionModule, MatInputModule, MatProgressBarModule,MatCardModule,MatIconModule, ]
})
export class SharedModule { }

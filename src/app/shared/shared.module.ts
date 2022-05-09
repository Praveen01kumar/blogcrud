import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { LoginWithNpComponent } from './login-with-np/login-with-np.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [NavbarComponent, LoginWithNpComponent, RegisterComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, MatExpansionModule, MatInputModule, MatProgressBarModule,MatCardModule, MatIconModule,MatMenuModule,MatDialogModule, ReactiveFormsModule, MatTabsModule,MatButtonModule ],
  exports: [NavbarComponent, MaterialModule, CommonModule, RouterModule, FormsModule, MatExpansionModule, MatInputModule, MatProgressBarModule,MatCardModule,MatIconModule, MatMenuModule,MatDialogModule, ReactiveFormsModule, MatTabsModule,MatButtonModule ]
})
export class SharedModule { }

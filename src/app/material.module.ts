/**Purpose:This is material module contains all APIS's needed to implement different
 * modules i.e. registrationForm,loginForm,toolBar,navBar
 * 
 * @author: SANA SHAIKh
 * @since: 9/April/2018
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';



@NgModule(
    {
        imports:[
            MatButtonModule,
            MatToolbarModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            FlexLayoutModule,
            MatFormFieldModule,
            MatIconModule],
        exports:[
            MatButtonModule,
            MatToolbarModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            FormsModule,
            ReactiveFormsModule,
            FlexLayoutModule,
            MatIconModule],
    }
)

export class MaterialModule{}
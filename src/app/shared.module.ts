import { NgModule } from '@angular/core';
import { LoaderComponent } from './Utility/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { SnackbarComponent } from './Utility/snackbar/snackbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoaderComponent, SnackbarComponent],
  exports: [LoaderComponent, SnackbarComponent, FormsModule, HttpClientModule],
  imports: [FormsModule, HttpClientModule],
})
export class SharedModule {}

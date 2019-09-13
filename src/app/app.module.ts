import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsService } from './service/jobs.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

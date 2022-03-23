import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SimpleNgRxComponent } from './testing/simple-ng-rx/simple-ng-rx.component'
import { messageReducer } from './testing/simple-ng-rx/simple-ng-rx-reducer';
import { postReducer } from './testing/advance-ng-rx/post.reducer';
import { AdvanceNgRxComponent } from './testing/advance-ng-rx/advance-ng-rx.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    UsersComponent,
    AddUserComponent,
    DashboardComponent,
    SimpleNgRxComponent,
    AdvanceNgRxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({ 
       post : postReducer ,
       message : messageReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import './rxjs-extensions';

import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { EVDetailComponent }    from './ev-detail.component';
import { EVsComponent }         from './evs.component';
import { EVService }            from './ev.service';
import { routing }              from './app.routing';
import { DashboardComponent }   from './dashboard.component';
import { EVSearchComponent }    from './ev-search.component';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
        
    ],
    declarations:   [ 
        AppComponent, 
        DashboardComponent,
        EVDetailComponent, 
        EVsComponent,
        EVSearchComponent
        ],
    providers: [ 
        EVService 
        ],
    bootstrap:  [ AppComponent ]
})
export class AppModule {
 }

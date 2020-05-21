import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ShowItemComponent } from './show-item/show-item.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { SeasonEpisodesComponent } from './season-episodes/season-episodes.component';
import { SeasonEpisodeDetailComponent } from './season-episode-detail/season-episode-detail.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LastVisitedFilmsComponent } from './last-visited-films/last-visited-films.component';
import { SearchedShowsListComponent } from './searched-shows-list/searched-shows-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FilterPipe,
    ShowItemComponent,
    ShowDetailComponent,
    SeasonEpisodesComponent,
    SeasonEpisodeDetailComponent,
    ScheduleComponent,
    LastVisitedFilmsComponent,
    SearchedShowsListComponent,
    UserProfileComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

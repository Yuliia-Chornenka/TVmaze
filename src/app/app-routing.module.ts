import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { SeasonEpisodesComponent } from './season-episodes/season-episodes.component';
import { SeasonEpisodeDetailComponent } from './season-episode-detail/season-episode-detail.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SearchedShowsListComponent } from './searched-shows-list/searched-shows-list.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'detail/:id/season/:id', component: SeasonEpisodesComponent, pathMatch: 'full' },
  { path: 'episode/:id', component: SeasonEpisodeDetailComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: ShowDetailComponent, pathMatch: 'full' },
  { path: 'schedule', component: ScheduleComponent, pathMatch: 'full' },
  { path: 'search-results', component: SearchedShowsListComponent, pathMatch: 'full' },
  { path: 'user', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

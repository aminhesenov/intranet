import {SiginComponent} from './sigin/sigin.component';
import {NewsComponent} from './admin-panel/news/news.component';
import {AddNewsComponent} from './admin-panel/news/add-news/add-news.component';
import {EditComponent} from './admin-panel/news/edit/edit.component';
import {PersonalInformationComponent} from './admin-panel/personal-information/personal-information.component';
import {Routes} from '@angular/router';
import {PostsComponent} from './admin-panel/posts/posts.component';
import {ActivitiesComponent} from './admin-panel/activities/activities.component';
import {MarqueeComponent} from './admin-panel/advertisements/marquee/marquee.component';
import {AdvertisementsComponent} from './admin-panel/advertisements/advertisements.component';
import {EditAdvertisementsComponent} from './admin-panel/advertisements/edit-advertisements/edit-advertisements.component';
import {IdeaComplaintsComponent} from './admin-panel/idea-complaints/idea-complaints.component';
import {SettingComponent} from './admin-panel/setting/setting.component';
import {ForgetPasswordComponent} from './sigin/forget-password/forget-password.component';
import {IntranetComponent} from './intranet/intranet.component';
import {ProfileComponent} from './intranet/profile/profile.component';

export const appRoutes: Routes = [
  {path: 'sigin', component: SiginComponent},
  {path: 'sigin/intranet/homepage', component: IntranetComponent},
  {path: 'sigin/intranet/profile', component: ProfileComponent},
  {path: 'sigin/forgetpassword', component: ForgetPasswordComponent},
  {path: 'sigin/adminpanel/news', component: NewsComponent},
  {path: 'sigin/adminpanel/news/addnews', component: AddNewsComponent},
  {path: 'sigin/adminpanel/news/edit', component: EditComponent},
  {path: 'sigin/adminpanel/posts', component: PostsComponent},
  {path: 'sigin/adminpanel/settings', component: SettingComponent},
  {path: 'sigin/adminpanel/ideacomplaints', component: IdeaComplaintsComponent},
  {path: 'sigin/adminpanel/advertisements/editadvertisements', component: EditAdvertisementsComponent},
  {path: 'sigin/adminpanel/advertisements', component: AdvertisementsComponent },
  {path: 'sigin/adminpanel/advertisements/marquee', component: MarqueeComponent},
  {path: 'sigin/adminpanel/activities', component: ActivitiesComponent},
  {path: 'sigin/adminpanel/personal', component: PersonalInformationComponent},
  {path: 'sigin/adminpanel', component: PersonalInformationComponent},
  {path: '**', redirectTo: 'sigin', pathMatch: 'full'}
];



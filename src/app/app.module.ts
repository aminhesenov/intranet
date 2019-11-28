import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './sigin/sigin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PersonalInformationComponent } from './admin-panel/personal-information/personal-information.component';
import { NewsComponent } from './admin-panel/news/news.component';
import { EditComponent } from './admin-panel/news/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddNewsComponent } from './admin-panel/news/add-news/add-news.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { PostsComponent } from './admin-panel/posts/posts.component';
import { ActivitiesComponent } from './admin-panel/activities/activities.component';
import { MarqueeComponent } from './admin-panel/advertisements/marquee/marquee.component';
import { AdvertisementsComponent } from './admin-panel/advertisements/advertisements.component';
import { EditAdvertisementsComponent } from './admin-panel/advertisements/edit-advertisements/edit-advertisements.component';
import { IdeaComplaintsComponent } from './admin-panel/idea-complaints/idea-complaints.component';
import { SettingComponent } from './admin-panel/setting/setting.component';
import { ForgetPasswordComponent } from './sigin/forget-password/forget-password.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { IntranetComponent } from './intranet/intranet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import { ProfileComponent } from './intranet/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    AdminPanelComponent,
    PersonalInformationComponent,
    NewsComponent,
    EditComponent,
    AddNewsComponent,
    PostsComponent,
    ActivitiesComponent,
    MarqueeComponent,
    AdvertisementsComponent,
    EditAdvertisementsComponent,
    IdeaComplaintsComponent,
    SettingComponent,
    ForgetPasswordComponent,
    NavBarComponent,
    FooterComponent,
    IntranetComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

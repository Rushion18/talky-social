import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PostsPlatformComponent } from './posts-platform/posts-platform.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NotificationsContentComponent } from './notifications-content/notifications-content.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
// import { SavedCollectionsComponent } from './saved-collections/saved-collections.component';
import { LoginAuthenticationComponent } from './login-authentication/login-authentication.component';
import { RegisterAuthenticationComponent } from './register-authentication/register-authentication.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { TextsChatComponent } from './texts-chat/texts-chat.component';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { UserCardComponent } from './user-card/user-card.component';
// import { PostDetailComponent } from './post-detail/post-detail.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PrivacySettingsComponent } from './privacy-settings/privacy-settings.component';
import { MessagingComponentComponent } from './messaging-component/messaging-component.component';
import { FollowerComponentComponent } from './friend/follower-component/follower-component.component';
import { SettingsContentComponent } from './settings-content/settings-content.component';
// import { StoriesComponent } from './stories/stories.component';
import { HomepageComponent } from './home-page/home-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { StoriesComponent } from './stories/stories.component';
// import { PostImageComponent } from './post-detail/post-image/post-image.component';
// import { PostHeaderComponent } from './post-detail/post-header/post-header.component';
// import { PostFooterComponent } from './post-detail/post-footer/post-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomePageComponent,
    UserPageComponent,
    PostsPlatformComponent,
    ExplorePageComponent,
    SearchContentComponent,
    CreatePostComponent,
    NotificationsContentComponent,
    ActivityLogComponent,
    // SavedCollectionsComponent,
    LoginAuthenticationComponent,
    RegisterAuthenticationComponent,
    ErrorHandlingComponent,
    NavbarContentComponent,
    FooterContentComponent,
    TextsChatComponent,
    FriendRequestsComponent,
    UserCardComponent,
    // PostDetailComponent,
    LandingPageComponent,
    PrivacySettingsComponent,
    MessagingComponentComponent,
    FollowerComponentComponent,
    SettingsContentComponent,
    // StoriesComponent,
    UserPageComponent,
    SideBarComponent,
    // HomePageComponent, 
    // NavBarComponent,
    // StoriesComponent,
    // PostImageComponent,
    // PostHeaderComponent,
    // PostFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

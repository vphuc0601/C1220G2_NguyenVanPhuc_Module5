import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import {RouterModule} from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

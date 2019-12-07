import { Component } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { Platform } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private kategoriler: any;
  private videolar: any;

  constructor(public srvcYoutube: YoutubeService, public platform: Platform, private youtube: YoutubeVideoPlayer) 
  {
    this.kategoriGetir();
  }

  kategoriGetir()
  {
    this.srvcYoutube.kategoriGetir().subscribe(sonuc => { this.kategoriler = sonuc['items']; }, error => { console.log(error); });
  }

  kategoriyeGoreVideoGetir(id)
  {
    this.srvcYoutube.kategoriyeGoreVideoGetir(id).subscribe(sonuc => {this.videolar = sonuc['items'];}, error => { console.log(error); });
  }

  izle(vid)
  {
    if(this.platform.is('desktop'))
    {
      window.open('https://www.youtube.com/watch?v=' + vid.id);
    }
    else if(this.platform.is('mobile'))
    {
      window.open('https://www.youtube.com/watch?v=' + vid.id);
    }
    else if(this.platform.is('hybrid'))
    {
      this.youtube.openVideo(vid.id);
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private readonly apiKey: string = "AIzaSyCQUmbGESTLNrJzz9fKlanhstu-jsjtnn8";

  constructor(public http: HttpClient) 
  {

  }

  kategoriGetir()
  {
    return this.http.get('https://www.googleapis.com/youtube/v3/videoCategories?h1=tr_TR&part=snippet&regionCode=TR&key=' + this.apiKey);
  }

  kategoriyeGoreVideoGetir(kategoriId)
  {
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&h1=tr_TR&regionCode=TR&key=' + this.apiKey + '&videoCategoryId=' + kategoriId);
  }

}

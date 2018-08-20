import { Component, OnInit, Input } from '@angular/core';

import { environment } from '@env/environment';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() bannerData;
  @Input() mobileBannerData;

  bannerUrl: string;

  constructor() { }

  ngOnInit() {
    this.bannerUrl = environment.apiUrl + '/' + this.bannerData.ref;
  }

}

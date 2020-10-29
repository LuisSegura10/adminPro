import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: [
  ]
})
export class PageComponent implements OnInit {

  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
  }

}

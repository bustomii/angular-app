import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { AppsSetting } from '../interface/apps-setting';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.css'
})
export class AppsComponent {
  constructor(private api: ApiService) {
    this.getApp();
  }

  dataApp: any;

  getApp() {
    this.api.appsSetting().subscribe((res:any) => {
      console.log(res);
      this.dataApp = res.data
    });
  }
}

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

  dataApp: AppsSetting = {
    id: 0,
    app_name: '',
    app_version: '',
    app_logo: '',
    app_icon: '',
    disclaimer: '',
    terms_and_conditions: '',
    contact_admin: '',
    ios: '',
    android: '',
    created_at: '',
    updated_at: ''
  }

  getApp() {
    this.api.appsSetting().subscribe((res:any) => {
      this.dataApp = res.data
    });
  }
}

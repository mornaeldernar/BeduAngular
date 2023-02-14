import { Component } from '@angular/core';
import { ActivityService } from 'src/app/services/api/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  constructor(private service: ActivityService) {}
  activityData : any;
  display :boolean = false;
  actividades() {
    this.service.getActivity().subscribe((response) => {
      this.activityData = response;
      this.display = true;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { EventMqttService } from 'src/app/services/event-mqtt.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  isLoading = false;
  events: any[];
    private deviceId: string;
    subscription: Subscription;

  constructor(private readonly eventMqtt: EventMqttService,) { }

  ngOnInit(): void {
    this.subscribeToTopic();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}

private subscribeToTopic() {
    this.subscription = this.eventMqtt.topic(this.deviceId)
        .subscribe((data: IMqttMessage) => {
            let item = JSON.parse(data.payload.toString());
            console.log(item)
            this.events.push(item);
            
        });
}

}

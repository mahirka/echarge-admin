import { Component, OnInit } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { EventMqttService } from 'src/app/services/event-mqtt.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  isLoading = false;
  private subscription: Subscription;
  public message: string;

  constructor(private _mqttService: MqttService,) {
    this.subscription = this._mqttService.observe('notification/admin').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
   }
   public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
   
  }
 
}





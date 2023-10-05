import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

  phoneNumber: string = '+18098814942';
  defaultMessage: string = 'Hello! I have a question about your services.';

  getWhatsAppLink(): string {
    let url = 'https://wa.me/' + this.phoneNumber + '?text=' + encodeURIComponent(this.defaultMessage);
    return url;
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { trigger, state, style, animate, transition, stagger, query } from "@angular/animations"
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

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

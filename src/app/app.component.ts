import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jacksoncuevas-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()


    this.titleService.setTitle("Jackson Cuevas | Senior Software Engineer");

    this.metaService.addTags([
      { name: 'keywords', content: 'Senior Mobile Software Engineer' },
      { name: 'description', content: '' },
    ]);


    AOS.init();

  }
}

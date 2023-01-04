import { Component, OnInit } from '@angular/core';
import { ListeCoursService } from '../services/liste-cours.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.page.html',
  styleUrls: ['./liste-cours.page.scss'],
})

export class ListeCoursPage implements OnInit {
  public results = [...this.listeCoursService.cours];
  constructor(public listeCoursService: ListeCoursService) { }
  isFocus = false;

  async ngOnInit() {
    await this.listeCoursService.loadSaved();
  }

}

import { Component, OnInit } from '@angular/core';
import { ListeCoursService } from '../services/liste-cours.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.page.html',
  styleUrls: ['./liste-cours.page.scss'],
})
export class ListeCoursPage implements OnInit {

  constructor(public listeCoursService: ListeCoursService) { }

  async ngOnInit() {
    await this.listeCoursService.loadSaved();
  }
}

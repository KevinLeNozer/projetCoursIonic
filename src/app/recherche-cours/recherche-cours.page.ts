import { Component, OnInit } from '@angular/core';
import {ListeCoursService} from "../services/liste-cours.service";

@Component({
  selector: 'app-recherche-cours',
  templateUrl: './recherche-cours.page.html',
  styleUrls: ['./recherche-cours.page.scss'],
})
export class RechercheCoursPage implements OnInit {
  public results = [...this.listeCoursService.cours];
  constructor(public listeCoursService: ListeCoursService) { }
  isFocus = false;

  async ngOnInit() {
    await this.listeCoursService.loadSaved();
  }

  handleChange(event: any) {
    this.isFocus = true;
    const query = event.target.value.toLowerCase();
    this.results = this.listeCoursService.cours.filter(d => d.nomCours.toLowerCase().indexOf(query) > -1);
  }

}

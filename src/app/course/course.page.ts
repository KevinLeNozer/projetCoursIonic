import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  cours = [
    {nom: 'cours1', nb_etud: 3},
    {nom: 'cours2', nb_etud: 6}
  ];

  constructor() { }

  // Méthode utilisée 1 seul fois : quand on crée la page
  ngOnInit() {
    console.log('J\'arrive sur la page des cours');
  }

  // Cette méthode est utilisée chaque fois qu'on revient ssur la page
  ionViewWillEnter() {
    console.log('Je reviens sur la page des courses');
  }

}

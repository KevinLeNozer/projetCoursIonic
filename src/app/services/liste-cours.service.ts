import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { UserCours } from '../userCours';


@Injectable({
  providedIn: 'root'
})

export class ListeCoursService {

  public cours: UserCours[] = [];
  private COURS_STORAGE = "cours";

  constructor() { }

  public async loadSaved() {
    const coursListe = await Preferences.get({
      key: this.COURS_STORAGE,
    });
    this.cours = JSON.parse(coursListe.value!) || [];
  }

  public async addNewToList(cour: UserCours) {
    console.log(this.cours);

    this.cours.unshift(cour);
    console.log(this.cours);

    Preferences.set({
      key: this.COURS_STORAGE,
      value: JSON.stringify(this.cours),
    });
  }


  public async deleteFromListeCours(newCour: UserCours){

    let newList = [];
    let asDelete = false;

    for (const cour of this.cours) {
      if ((cour.nomCours !== newCour.nomCours
          && cour.nomProfesseur !== newCour.nomProfesseur
          && cour.nbEtudiant !== newCour.nbEtudiant) || asDelete == true){
        newList.unshift(cour);
      } else {
        asDelete = true;
      }
    }

    this.cours = newList;

    await Preferences.set({
      key: this.COURS_STORAGE,
      value: JSON.stringify(this.cours),
    });
  }

}

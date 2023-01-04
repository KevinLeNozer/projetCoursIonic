import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController } from '@ionic/angular';
import { ListeCoursService } from '../services/liste-cours.service';
import { UserCours } from '../userCours';
import {Router} from '@angular/router';

@Component({
  selector: 'app-saisie-cours',
  templateUrl: './saisie-cours.page.html',
  styleUrls: ['./saisie-cours.page.scss'],
})

export class SaisieCoursPage implements OnInit {

  ionicForm: any;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder,
              private alertController: AlertController,
              private listeCoursService: ListeCoursService,
              private router: Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nomCours: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      nbEtudiant: ['', [Validators.required]],
      nomProfesseur: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Veuillez remplir tous les champs !',
      buttons: ['OK'],
    });

    await alert.present();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      this.presentAlert();
    } else {
      let cour: UserCours =
      {
      nomCours: this.ionicForm?.value.nomCours,
      nbEtudiant: this.ionicForm?.value.nbEtudiant,
      nomProfesseur: this.ionicForm?.value.nomProfesseur
      }
      this.listeCoursService.addNewToList(cour);
      this.router.navigate(['/liste-cours'])
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saisie-cours',
  templateUrl: './saisie-cours.page.html',
  styleUrls: ['./saisie-cours.page.scss'],
})

export class SaisieCoursPage implements OnInit {
  ionicForm: any;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder,
              private alertController: AlertController) { }

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
      console.log(this.ionicForm?.value.nomCours);
      console.log(this.ionicForm?.value.nomProfesseur);
      console.log(this.ionicForm?.value.nbEtudiant);
    }
  }

}

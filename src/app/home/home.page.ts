import { Component } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  promptEvent: any = null

  // Quand on clique sur le bouton de menu, on veut que cela ouvre un popup
  constructor(private popover: PopoverController,
              private alertController: AlertController) {
                //l'evenement "beforeinstallprompt" est émis chaque fois que l'on charge la page et que
                //L'application n'a pas encore été installée. S'il est émis, on met à jour promptEvent
                window.addEventListener(
                  'beforeinstallprompt', event => {
                      this.promptEvent = event;
                  });
              }

  onInstall() {
    this.promptEvent.prompt();
  }



  openMenu(myevent: MouseEvent): void {
    // On crée le popup contenant le code du menu
    this.popover.create({
      component: MenuComponent, // On précise quoi inclure dans le popup
      showBackdrop: true,
      cssClass: 'my-menu-class', // On peut préciser un css
      event: myevent, // L'événement clic souris
      componentProps: { // Ici on indique les propriétés que l'on veut initialiser
        myprop: 'xxxx' // Dans le composant MenuComponent
      }
    }).then((popoverElement) => {
      popoverElement.present(); // affiche le menu
      popoverElement.onDidDismiss().then((res) => {{
        console.log(res);
      }});
    });
}

async openAlert() {
  const monMessage = 'Le message de l\'alerte';
  const alerte = await this.alertController.create({
    header: 'Erreur',
    message: monMessage,
    buttons: ['OK'],
  });

  await alerte.present(); //Afficher le popup de l'alerte
  await alerte.onDidDismiss(); //Eventuellement faire une action si on ferme l'alerte
}

}

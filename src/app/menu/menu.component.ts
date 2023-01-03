import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  myprop! : string;
  nb = [1, 2, 3]; // Les items du menu déroulant

  constructor(private popover: PopoverController) { }

  ngOnInit(): void {}

  // La méthode dismiss renverra la valeur de event au HomeComponent
  closePopover(event: any): void { this.popover.dismiss(event); }
}

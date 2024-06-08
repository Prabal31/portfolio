import { Component, Input} from '@angular/core';
import {Personal} from "src/app/MyInfo";


@Component({
  selector: 'app-menu-about',
  templateUrl: './menu-about.component.html',
  styleUrls: ['./menu-about.component.css']
})
export class MenuAboutComponent {
  @Input() data!: Personal;

}

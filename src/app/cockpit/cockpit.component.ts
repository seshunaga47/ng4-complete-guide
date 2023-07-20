import { Component } from '@angular/core';
import { ServerModel } from '../server/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  serverElements: ServerModel[] = [];
  newServerName:string = '';
  newServerContent:string = '';

  onAddServer() {
    this.serverElements.push(
      {
        type: 'server',
        name: this.newServerName,
        content: this.newServerContent
        }
    );
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}

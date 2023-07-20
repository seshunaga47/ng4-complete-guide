import { Component } from "@angular/core";

@Component({
    selector:'warning-alert',
    template:`
        <p>This is warning</p>
    `,
    styles:[
        `
        background-color:red
    `
    ]
})
export class WarningAlertComponent{
      warningalert = 'warning text';
}
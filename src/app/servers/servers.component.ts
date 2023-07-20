import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreatedStatus:string = "The server Not created Yet";
  updatedServerName:string = "No Name";
  serverName:string ="initial string";
  userName:string = "default name";
  btnStatusToSet:boolean =false;
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }


    onCreateEvent()
    {
      console.log("hello world")
      this.serverCreatedStatus = "The Server Created - " + this.serverName;
    }

    onUpdateServerName(event:Event){
      // this.updatedServerName =  (<HTMLInputElement>event.target).value;
      this.updatedServerName =  this.serverName;
    }

    setButtonStatus(event:Event){
      let inputdata:string = (<HTMLInputElement>event.target).value;
      this.btnStatusToSet = (inputdata.length > 0);
    }

    btnReset(){
      this.userName = '';
    }

}

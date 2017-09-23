
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: []
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent') serverContent: ElementRef;

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement) {
    console.log({ serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value });
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    console.log({ serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value });
    this.blueprintCreated.emit({ serverName: nameInput.value, serverContent: this.serverContent.nativeElement.value });
  }

}

import { Component ,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "metadata-cmp",
  templateUrl: "metadata/templates/metadata.html",
  styleUrls: ["metadata/styles/metadata.css"]
})
export class MetadataCmp implements OnInit, OnChanges {
  @Input() metadatas: String[];
  title: string = "Add Links to metadata, youtube, images...";
  metadataForm: String;
  metadataDisplay: String[];
  @Output() newMetadata: EventEmitter<String[]>;
  
  constructor() {
    this.newMetadata = new EventEmitter();
  }

  ngOnInit() {
    debugger
    this.metadataForm = "";
    this.metadataDisplay = this.metadatas ? this.metadatas : [];
  }

  ngOnChanges() {
    debugger;
  }

  add(metadata: String) {
    debugger;
    this.metadataDisplay.push(metadata);
    this.metadataForm = "";
    this.newMetadata.emit(this.metadataDisplay);
    console.log(this.metadataDisplay)
  }
  remove(metadata: String) {
    this.metadataDisplay.splice(this.metadataDisplay.indexOf(metadata), 1)
    this.newMetadata.emit(this.metadataDisplay);
  }
}

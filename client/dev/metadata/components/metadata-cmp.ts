import { Component ,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "metadata-cmp",
  templateUrl: "metadata/templates/metadata.html",
  styleUrls: ["metadata/styles/metadata.css", "app.css"]
})
export class MetadataCmp implements OnInit, OnChanges {
  @Input() metadatas: string[];
  title: string;
  metadataForm: string;
  metadataDisplay: string[];
  @Output() newMetadata: EventEmitter<String[]>;
  
  constructor() {
    this.newMetadata = new EventEmitter();
    this.title = "Add Links to metadata, youtube, images...";
  }

  ngOnInit() {
    this.metadataForm = "";
    this.metadataDisplay = this.metadatas ? this.metadatas : [];
  }

  ngOnChanges() {
    this.metadataDisplay = this.metadatas ? this.metadatas : [];    
  }

  add(metadata: string) {
    this.metadataDisplay.push(metadata);
    this.metadataForm = "";
    this.newMetadata.emit(this.metadataDisplay);
  }
  remove(metadata: string) {
    this.metadataDisplay.splice(this.metadataDisplay.indexOf(metadata), 1)
    this.newMetadata.emit(this.metadataDisplay);
  }
}

import { Component ,Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Metadata } from './../../../../server/api/metadata/model/metadata-model'
import { types } from './../../app.utils';

@Component({
  selector: "metadata-cmp",
  templateUrl: "metadata/templates/metadata.html",
  styleUrls: ["metadata/styles/metadata.css", "app.css"]
})

export class MetadataCmp implements OnInit, OnChanges {
  @Input() metadatas: Metadata[];
  title: string;
  metadataForm: Metadata;
  metadataDisplay: Metadata[];
  types : string[];

  @Output() newMetadata: EventEmitter<Metadata[]>;
  
  constructor() {
    this.newMetadata = new EventEmitter();
    this.title = "Add Links to metadata, youtube, images...";
  }

  ngOnInit() {
    this.types = types;
    this.metadataForm = {
      link: '',
      type: ''
    };
    this.metadataDisplay = this.metadatas ? this.metadatas : [];
  }

  ngOnChanges() {
    this.metadataDisplay = this.metadatas ? this.metadatas : [];    
  }

  add(metadata: Metadata) {
    this.metadataDisplay.push(metadata);
    this.metadataForm = {
      link: '',
      type: ''
    };
    this.newMetadata.emit(this.metadataDisplay);
  }
  remove(metadata: Metadata) {
    this.metadataDisplay.splice(this.metadataDisplay.indexOf(metadata), 1)
    this.newMetadata.emit(this.metadataDisplay);
  }
}

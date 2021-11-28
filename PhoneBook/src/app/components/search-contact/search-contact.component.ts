import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import {Contact} from '../../Contact';
@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {

  @Output() onSearchContacts: EventEmitter<string> = new EventEmitter();

  @Input() filter!: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    this.onSearchContacts.emit(this.filter);
  }
}

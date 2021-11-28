import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Contact} from '../../Contact';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contact!: Contact
  @Input() starColor!: string;
  @Output() onDeleteContact: EventEmitter<Contact>= new EventEmitter();
  @Output() onToggleFavourite: EventEmitter<Contact>= new EventEmitter();
  

  faTimes = faTimes;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
    this.starColor="black";
  }

  onDelete(contact: Contact){
    this.onDeleteContact.emit(contact);
  }
  onToggle(contact: Contact){
    this.onToggleFavourite.emit(contact);
  }

}

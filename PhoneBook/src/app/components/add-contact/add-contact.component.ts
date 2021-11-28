import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Contact} from '../../Contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter();
  name!: string;
  lastname!: string;
  phone!: string;
  favourite: boolean= false;
  showAddContact: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value=> this.showAddContact = value);
  
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert('Please add a name!');
      return;
    }
    if(!this.phone){
      alert('Please add a phone number!');
      return;
    }
    const newContact = {
      name: this.name,
      lastname: this.lastname,
      phone: this.phone,
      favourite: this.favourite
    }

    this.onAddContact.emit(newContact);

    this.name = '';
    this.lastname = '';
    this.phone = '';
    this.favourite = false;
  }
}

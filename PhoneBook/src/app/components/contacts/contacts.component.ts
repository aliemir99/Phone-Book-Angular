import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import {Contact} from '../../Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  contactsViewModel: Contact[]= [];
  filter!:string;
  isContactsRefreshable: boolean = false;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContacts()
    .pipe(
      switchMap(
        (contacts)=> this.contacts = contacts
      )
    )
    .subscribe(()=>this.contactsViewModel = this.contacts);
  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact)
    .pipe(
        switchMap(
          ()=> this.contactsViewModel = this.contactsViewModel.filter(c=> c.id !== contact.id)))
            .subscribe(
              ()=>(this.contacts = this.contacts.filter(c=> c.id !== contact.id)));
    }

  toggleFavourite(contact: Contact){
    contact.favourite = !contact.favourite;
    this.contactService.updateContactFavourite(contact).subscribe();
  }

  addContact(contact: Contact){
    this.contactService.addContact(contact).subscribe((contact)=>(this.contacts.push(contact)));
  }

  onFilterContacts(filter: string){

    this.contactsViewModel= this.contacts;
    filter = filter.toLowerCase();

    this.contactsViewModel = this.contactsViewModel.filter(
      (((c => c.phone.includes(filter) ||
         c.name.toLowerCase().includes(filter) ||
         c.lastname.toLowerCase().includes(filter)))));

    if(filter=="" || filter == undefined){
      this.contactService.getContacts().subscribe((contacts)=>this.contactsViewModel = contacts);
    }
    return this.contacts;
  }

  refreshContacts(canRefresh: boolean){
    this.isContactsRefreshable = canRefresh;
    if(this.isContactsRefreshable){
      this.contactService.getContacts();
    }
  }

}

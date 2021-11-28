import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Phone Book';
  showAddContact: boolean = false;
  subscription!: Subscription;

  faPhone = faPhoneSquareAlt;

  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe(value=> this.showAddContact = value);
  }

  ngOnInit(): void {
  }

  toggleAddContact(){
    this.uiService.toggleAddContact();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

  refreshPage(){
    window.location.reload();
  }

}

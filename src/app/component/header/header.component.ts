import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isUserLoggedIn: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userHeader.subscribe(
      (userHeader: boolean) => this.isUserLoggedIn = userHeader
    );
  }
}

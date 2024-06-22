import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from '../Model/User';
import { Subscription } from 'rxjs';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  authService: AuthService = inject(AuthService);
  isLoggedIn: boolean = false;
  private userSubject: Subscription;
  counterService: CounterService = inject(CounterService);
  ngOnInit() {
    this.counterService.increment('HeaderComponent');
    this.userSubject = this.authService.user.subscribe((user: User) => {
      console.log(user);
      this.isLoggedIn = user ? true : false;
    });
  }

  ngOnDestroy() {
    this.userSubject.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}

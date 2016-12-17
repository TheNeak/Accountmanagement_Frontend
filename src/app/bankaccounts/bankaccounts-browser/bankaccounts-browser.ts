import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'bankaccounts-browser',
  templateUrl: './bankaccounts-browser.html'
})
export class BankaccountsBrowser {

  constructor(private router: Router) {
  }

}

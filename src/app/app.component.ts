import {Component} from "@angular/core";
import {AppService} from "app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private bankaccounts = [];
  private logs = "";

  constructor(private _bankaccountsService: AppService) {
    this._bankaccountsService = _bankaccountsService;
    this.loadAllBankaccounts();
  }

  public loadAllBankaccounts() {
    this._bankaccountsService.getAllBankAccounts()
      .subscribe(
        data => this.bankaccounts = data,
        error => console.log("ERROR in REST API")
      );
  }
}

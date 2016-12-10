import {Component} from "@angular/core";
import {BankaccountsService} from "../shared/bankaccounts.service";

@Component({
  selector: 'bankaccounts-list',
  templateUrl: './bankaccounts-list.html',
})
export class BankaccountsList {
  private bankaccounts = [];
  private logs = "";

  constructor(private _bankaccountsService: BankaccountsService) {
    this._bankaccountsService = _bankaccountsService;
    this.loadAllBankaccounts();
  }

  public loadAllBankaccounts() {
    this._bankaccountsService.getAllBankaccounts()
      .subscribe(
        data => this.bankaccounts = data,
        error => console.log("ERROR in REST API")
      );
  }
}

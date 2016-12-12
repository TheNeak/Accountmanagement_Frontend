import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Configuration} from "../../app.constants";
import {Observable} from "rxjs/Rx";

@Injectable()
export class BankaccountsService {
  private configuration = new Configuration();
  private bankaccountUrl;

  constructor(private _http: Http) {
    this.bankaccountUrl = this.configuration.ServerWithApiUrl + "transactions/";
  }

  getAllBankAccounts() {
    return this._http.get(this.bankaccountUrl).map(res => res.json());
  }

  getBankaccount(id: string) {
    return this._http.get(this.bankaccountUrl + id).map(res => res.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}

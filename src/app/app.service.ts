import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Constants} from "./app.constants";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AppService {
  private configuration = new Constants();
  private bankaccountUrl;

  constructor(private _http: Http) {
    this.bankaccountUrl = this.configuration.ServerWithApiUrl; //+ "bankaccounts/";
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

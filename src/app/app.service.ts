import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Constants} from "./app.constants";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AppService {
  private configuration = new Constants();
  private bankAccountUrl;

  constructor(private _http: Http) {
    this.bankAccountUrl = this.configuration.ServerWithApiUrl + "/transactions";
  }

  getAllBankAccounts() {
    return this._http.get(this.bankAccountUrl).map(res => res.json());
  }

  getBankaccount(id: string) {
    return this._http.get(this.bankAccountUrl + id).map(res => res.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}

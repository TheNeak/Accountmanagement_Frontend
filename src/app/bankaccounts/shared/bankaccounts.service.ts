import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Configuration} from "../../app.constants";
import {Observable} from "rxjs/Rx";

@Injectable()
export class BankaccountsService {
  private configuration = new Configuration();
  private bankaccountUrl;

  constructor(private _http: Http) {
    this.bankaccountUrl = this.configuration.ServerWithApiUrl + "bankaccount/";
  }

  getAllBankaccounts() {
    return this._http.get(this.bankaccountUrl).map(res => res.json());
  }

  getBankaccount(id: string) {
    return this._http.get(this.bankaccountUrl + id).map(res => res.json());
  }

  addBankaccount(bankaccount) {
    let body = JSON.stringify({
      "id": bankaccount.id,
      "accoutNr": bankaccount.accountNr,
      "money": bankaccount.money
    });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, method: "post"});

    return this._http.post(this.bankaccountUrl, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  editBankaccount(bankaccount) {
    let body = JSON.stringify({
      "id": bankaccount.id,
      "firstname": bankaccount.firstname,
      "lastname": bankaccount.lastname
    });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, method: "post"});

    return this._http.put(this.bankaccountUrl + bankaccount.id, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  deleteBankaccount(id: string) {
    return this._http.delete(this.bankaccountUrl + id).map(res => res.json());
  }

  updateBankaccount() {
    // TODO updateBankaccount()
  }


  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}

import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BankaccountsList} from "./bankaccounts/bankaccounts-list/bankaccounts-list";
import {BankaccountsService} from "./bankaccounts/shared/bankaccounts.service";
import {BankaccountsBrowser} from "./bankaccounts/bankaccounts-browser/bankaccounts-browser";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    BankaccountsList,
    BankaccountsBrowser
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BankaccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Routes} from "@angular/router";
import {BankaccountsList} from "./bankaccounts/bankaccounts-list/bankaccounts-list";
import {BankaccountsBrowser} from "./bankaccounts/bankaccounts-browser/bankaccounts-browser";

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'bankaccounts', pathMatch: 'full'},
  {
    path: 'bankaccounts', component: BankaccountsBrowser,
    children: [
      {path: '', component: BankaccountsList},
    ]
  },
];

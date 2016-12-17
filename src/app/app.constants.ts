import {Injectable} from "@angular/core";

@Injectable()
export class Constants {
  public Server: string = "http://localhost:8080/";
  public ServerWithApiUrl = this.Server;
}

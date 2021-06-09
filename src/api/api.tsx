import Axios, { AxiosError, AxiosInstance } from "axios";

import Drones from "./service/drones";

export interface ResponseError extends AxiosError {}

class Api {
  public service: {
    drones: Drones;
  };

  constructor(private http: AxiosInstance) {
    this.service = {
      drones: new Drones(this.http),
    };
  }
}

export default new Api(Axios.create());

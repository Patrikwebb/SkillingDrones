import { AxiosInstance } from "axios";

import { DroneDetailsI, DronesI } from "./interfaces";

class Drones {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  public async getDrones() {
    const response = await this.http.get<DronesI>(
      "https://make-it-public.s3.eu-north-1.amazonaws.com/drones.json"
    );
    return response.data;
  }

  public async getDrone() {
    const response = await this.http.get<DroneDetailsI>(
      "https://make-it-public.s3.eu-north-1.amazonaws.com/data.json"
    );
    return response.data;
  }
}

export default Drones;

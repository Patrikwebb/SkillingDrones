export interface DroneI {
  id: number;
  name: string;
  batery: number;
  age: number;
  image: string;
}

export interface DronesI {
  drones: DroneI[];
}

export interface ReportI {
  drone_id: number;
  time: any;
  speed: number;
  latitude: number;
  longitude: number;
  traffic_conditions: string;
}

export interface DroneDetailsI {
  reports: ReportI[];
}

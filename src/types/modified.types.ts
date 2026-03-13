import { DOMautoqueryDevices } from './user.app.types';

export interface DeviceSizeBreakpointModified {
  id?: number;
  name?: string;
  startPoint?: number;
}

export interface ActiveDevice {
  id: number;
  name: string;
  startPoint: number;
  endPoint: number | null;
  unit: DOMautoqueryDevices['unit'];
  _mQueryRange: string;
}

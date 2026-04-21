interface DeviceSizeBreakpoint {
  name: string;
  startPoint: number;
}

export interface DOMautoqueryDevices {
  unit?: 'px' | 'em' | 'rem';
  sizes: Record<number, DeviceSizeBreakpoint>;
}

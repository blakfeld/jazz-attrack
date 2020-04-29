import {FeedingType, FeedingUnit, Parent} from "./enums";

export interface Feeding {
  amount: number;
  id?: string;
  time: Date;
  type: FeedingType;
  units: FeedingUnit;
}

export interface Changing {
  id?: string;
  pee: boolean,
  poop: boolean,
  time: Date;
}

export interface Weight {
  date: Date;
  id?: string;
  weight: number;
}

export interface Schedule {
  id?: string;
  onDuty: Parent;
  startTime: Date;
  endTime: Date;
}
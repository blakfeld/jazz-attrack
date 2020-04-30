import {Parent} from "../enums";
import {Schedule} from "../types";

const schedule: Schedule[] = [
  {
    time: '12am',
    task: 'Feeding',
    onDuty: Parent.KORY,
  },
  {
    time: '3am',
    task: 'Feeding',
    onDuty: Parent.KORY,
  },
  {
    time: '6am',
    task: 'Feeding',
    onDuty: Parent.KORY,
  },
  {
    time: '9am',
    task: 'Feeding',
    onDuty: Parent.KORY,
  },
  {
    time: '12pm',
    task: 'Feeding',
    onDuty: Parent.DANI,
  },
  {
    time: '3pm',
    task: 'Feeding',
    onDuty: Parent.DANI,
  },
  {
    time: '6pm',
    task: 'Feeding',
    onDuty: Parent.DANI,
  },
  {
    time: '9pm',
    task: 'Feeding',
    onDuty: Parent.DANI,
  },
]

export default schedule;


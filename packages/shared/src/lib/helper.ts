/* eslint-disable @typescript-eslint/no-explicit-any */
import parsePhoneNumber, { AsYouType } from 'libphonenumber-js';

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function doNothing(..._args: unknown[]) {
  return _args;
}

export class DummyMoney {
  static amountToStringComma = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  static getRandomAmount = (range = 1000, offset = 1000) => {
    return Math.floor(Math.random() * range) + offset;
  };

  static getRandomMoney(range = 1000, offset = 1000) {
    return (
      '$' +
      DummyMoney.amountToStringComma(DummyMoney.getRandomAmount(range, offset))
    );
  }
}

export function getSelectOptions(obj: Record<string, string>) {
  return Object.entries(obj).map(([key, value]) => ({
    label: value,
    value: key,
  }));
}

export function getParsedPhone(phone: string) {
  return parsePhoneNumber(phone, 'US')?.formatNational();
}

export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function formatePhoneNumber(phone: string) {
  if (!phone) return '';
  phone = phone.toString();
  if (phone.includes('(') && !phone.includes(')')) {
    return phone.replace('(', '');
  }
  if (phone.includes('+1')) {
    return new AsYouType('US').input(phone.replace('+1', ''));
  }
  return new AsYouType('US').input(phone);
}

export function isMatchingRoutePath(pathName: string, routeName: string) {
  const pathArr = pathName.split('/');
  const routhPath = routeName.replace('/', '');
  return pathArr.includes(routhPath);
}

export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (
    value !== null &&
    typeof value === 'object' &&
    !Object.keys(value).length
  ) {
    return true;
  } else {
    return false;
  }
};

export const getEventColorByType = (data: any) => {
  switch (data.signalStatus) {
    case 'critical':
      return data.signalResolutionStatus === 'open' ? '#FF4E4E' : '#FFB3B3';
    default:
      return data.signalResolutionStatus === 'open' ? '#FFBF56' : '#FFE5BB';
  }
};

export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};

export const roundOfHundered = (val1: number | 0, val2: number | 0) => {
  const num = Number(val1 || val2 ? (val1 / val2) * 100 : 0);
  return num >= 100 ? 100 : num;
};

export const getCheckInQuestionMetaData = (
  signalTypeCheck: string,
  answerMetaData: string,
) => {
  const drinkMetaData: Record<string, string> = {
    ['yes']: 'Help needed',
    ['no']: 'No help needed',
  };
  const feelingMetaData: Record<string, string> = {
    ['stressed']: 'Stressed',
    ['tired']: 'Tired',
    ['anxious']: 'Anxious',
    ['hopeless']: 'Hopeless',
    ['triggered']: 'Triggered',
  };
  const thoughtMetaData: Record<string, string> = {
    ['feelings']: 'Feelings',
    ['boredom']: 'Boredom',
    ['isolated']: 'Isolated',
    ['socialPressure']: 'Social Pressure',
    ['revisitingOldEnvironment']: 'Revisiting Old Environment',
  };
  const groupMetaData: Record<string, string> = {
    ['notEnough']: 'Not Enough',
    ['enough']: 'Enough',
  };
  switch (signalTypeCheck) {
    case 'drink':
    case 'drink_related':
      return drinkMetaData[answerMetaData] || answerMetaData;
    case 'feeling':
    case 'feeling_related':
      return feelingMetaData[answerMetaData] || answerMetaData;
    case 'thought':
    case 'thought_related':
      return thoughtMetaData[answerMetaData] || answerMetaData;
    case 'group':
      return groupMetaData[answerMetaData] || answerMetaData;
    default:
      return answerMetaData;
  }
};

export const getThroughtRelatedAnswer = (answer: string) => {
  switch (answer) {
    case '1':
      return '1 Not at all';
    case '2':
      return '2 Some';
    case '3':
      return '3 Moderately';
    case '4':
      return '4 More';
    case '5':
      return '5 Strongly';
    default:
      return answer;
  }
};

import { useState, useEffect } from 'react';
import { getDay, set, isBefore, isAfter } from 'date-fns';
import { WeekDays } from 'config/constants';
import type { ApiRestaurantDataResponse } from 'types';

const MILLISECONDS_IN_SECOND: number = 1000;
const SECONDS_IN_MINUTE: number = 60;

const useRestaurantOpenStatus = ({ days, hours }: ApiRestaurantDataResponse['opens']): boolean => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const todayDay: WeekDays = getDay(nowDate);
  const isTodayOpen: boolean = days[todayDay];

  // Recheck status every minute
  useEffect(() => {
    const interval = setInterval(() => setNowDate(new Date()), MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE);

    return () => clearInterval(interval);
  }, []);

  if (!isTodayOpen) {
    return isTodayOpen;
  }

  const openingTime: Date = set(nowDate, hours.from);
  const closingTime: Date = set(nowDate, hours.to);

  return isBefore(nowDate, closingTime) && isAfter(nowDate, openingTime);
};

export default useRestaurantOpenStatus;

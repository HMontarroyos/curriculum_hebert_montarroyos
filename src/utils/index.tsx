import { differenceInYears } from 'date-fns';

export function calculateAge(birthDate: Date): number {
  const today = new Date();
  return differenceInYears(today, birthDate);
}


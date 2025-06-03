import {
  learningProfilesByAgeGroup,
  namesByAgeGroup,
  zodiacSigns,
  ageSpecificQuestionsByAgeGroup,
} from "./ageGroupData";
import type { AgeGroup, Personality, Zodiac, ZodiacSign } from "./ageGroupData";

export const getZodiacSign = (birthDate: Date): Zodiac => {
  const month = birthDate.getMonth() + 1; // JavaScript months are 0-based
  const day = birthDate.getDate();

  for (const [sign, data] of Object.entries(zodiacSigns) as [
    Zodiac,
    ZodiacSign
  ][]) {
    const [startMonth, startDay, endMonth, endDay] = data.dates;

    // Check if date falls within sign's date range
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (startMonth > endMonth && // Handle year wrap (e.g. Capricorn Dec-Jan)
        ((month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay) ||
          month > startMonth ||
          month < endMonth))
    ) {
      return sign;
    }
  }

  return "capricorn"; // Default to Capricorn if no match found (handles Dec 22-31)
};

export const getAgeGroup = (birthDate: Date): AgeGroup => {
  const today = new Date();
  const ageInMonths =
    (today.getFullYear() - birthDate.getFullYear()) * 12 +
    (today.getMonth() - birthDate.getMonth());

  if (ageInMonths < 18) {
    return "infant";
  } else if (ageInMonths < 36) {
    return "toddler";
  } else if (ageInMonths < 48) {
    return "earlyPreschool";
  } else if (ageInMonths < 60) {
    return "preschool";
  } else {
    return "preK";
  }
};

export const getLearningProfile = (birthDate: Date): Record<string, any> => {
  const ageGroup = getAgeGroup(birthDate);
  const learningProfile = learningProfilesByAgeGroup[ageGroup];
  return learningProfile;
};

export const getPersonalityName = (
  ageGroup: AgeGroup,
  personality: Personality
): string | undefined => {
  return namesByAgeGroup[personality]?.[ageGroup];
};

export const getAgeSpecificQuestions = (ageGroup: AgeGroup) => {
  return ageSpecificQuestionsByAgeGroup[ageGroup];
};

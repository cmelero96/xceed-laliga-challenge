export const calculatePlayerAge = ({ dateOfBirth }) => {
  const now = new Date();
  const birthDate = new Date(dateOfBirth);

  // Exit the function if the date of birth was invalid
  if (birthDate instanceof Date && isNaN(birthDate)) return;

  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDif = now.getMonth() - birthDate.getMonth();
  if (monthDif < 0 || (monthDif === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }

  // Exit the function if the date of birth is in the future (negative age)
  if (age < 0) return;

  return age;
};

export const sortElementsByField = (elements, field, descending = false) => {
  const copy = [...elements];

  // Assumption: If elements[0] is a string, compare everything as string; otherwise number
  const isStringComparison = !!elements[0][field]?.localeCompare;

  const sorted = copy.sort((a, b) => {
    const f1 = a[field];
    const f2 = b[field];
    const reverseIfDescending = descending ? -1 : 1;

    if (isStringComparison) {
      return (f1 || '').localeCompare(f2 || '') * reverseIfDescending;
    } else {
      if (f1 == null) return -reverseIfDescending;
      if (f2 == null) return reverseIfDescending;

      return (f1 > f2 ? 1 : -1) * reverseIfDescending;
    }
  });

  return sorted;
};

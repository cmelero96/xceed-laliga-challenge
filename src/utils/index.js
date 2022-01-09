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

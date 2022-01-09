export const calculatePlayerAge = ({ dateOfBirth }) => {
  const now = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDif = now.getMonth() - birthDate.getMonth();
  if (monthDif < 0 || (monthDif === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

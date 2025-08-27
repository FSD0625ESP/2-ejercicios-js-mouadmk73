const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  const ageOf = (person) => {
    const deathYear = person.yearOfDeath ?? currentYear;
    return deathYear - person.yearOfBirth;
  };
  return people.reduce((oldest, person) =>
    ageOf(person) > ageOf(oldest) ? person : oldest
  );
};

// Do not edit below this line
module.exports = findTheOldest;

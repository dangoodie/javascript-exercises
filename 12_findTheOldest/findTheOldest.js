const findTheOldest = function (obj) {
  currentYear = new Date().getFullYear();

  const oldest = obj.sort((a, b) => {
    if (!a.yearOfDeath) a.yearOfDeath = currentYear;
    if (!b.yearOfDeath) b.yearOfDeath = currentYear;

    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

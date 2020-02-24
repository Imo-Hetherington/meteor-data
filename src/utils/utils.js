const filterYear = (meteors, year) => {
  const filteredMeteors = [...meteors].filter(
    meteor => meteor.year && meteor.year.slice(0, 4) === year.toString()
  );
  return filteredMeteors.length;
};

const createMeteorCount = (meteors, lowerLimit, upperLimit) => {
  const countObj = {};
  for (let i = parseInt(lowerLimit); i <= parseInt(upperLimit); i++) {
    countObj[i] = filterYear(meteors, i);
  }
  return countObj;
};

const filterPeriod = (meteors, lowerLimit, upperLimit) => {
  const filteredMeteors = [...meteors].filter(
    meteor =>
      meteor.year &&
      parseInt(meteor.year.slice(0, 4)) >= lowerLimit &&
      parseInt(meteor.year.slice(0, 4)) <= upperLimit
  );
  return filteredMeteors;
};

module.exports = { filterYear, createMeteorCount, filterPeriod };

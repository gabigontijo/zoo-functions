const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = Object.keys(hours);
const animalNames = species.map((names) => names.name);
const mondayObject = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

const scheduleAnimal = (scheduleTarget) => species.find((nameAnimal) =>
  nameAnimal.name === scheduleTarget).availability;

const createOfficeHourAndexhibition = (day, ObjSchedule) => {
  ObjSchedule[day] = {};
  ObjSchedule[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  ObjSchedule[day].exhibition = [];
  species.forEach((animalDays) => {
    if (animalDays.availability.includes(day)) {
      ObjSchedule[day].exhibition.push(animalDays.name);
    }
  });
  return ObjSchedule;
};

const getObjectHours = (day, ObjSchedule) => {
  if (day === 'Monday') {
    ObjSchedule[day] = mondayObject;
  } else {
    createOfficeHourAndexhibition(day, ObjSchedule);
  }
  return ObjSchedule;
};

const getObjectHoursNull = (ObjSchedule) => {
  Object.keys(hours).forEach((allDay) => {
    if (allDay === 'Monday') {
      ObjSchedule[allDay] = mondayObject;
    } else {
      createOfficeHourAndexhibition(allDay, ObjSchedule);
    }
  });
  return ObjSchedule;
};

function getSchedule(scheduleTarget) {
  const ObjSchedule = {};
  if (animalNames.includes(scheduleTarget)) {
    return scheduleAnimal(scheduleTarget);
  }
  if ((!animalNames.includes(scheduleTarget) && !weekDays.includes(scheduleTarget))
    || scheduleTarget === undefined) {
    return getObjectHoursNull(ObjSchedule);
  }
  return getObjectHours(scheduleTarget, ObjSchedule);
}

console.log(getSchedule());

module.exports = getSchedule;

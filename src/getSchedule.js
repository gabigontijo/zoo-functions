const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = Object.keys(hours);
const animalNames = species.map((names) => names.name);
const mondayObject = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

const scheduleAnimal = (scheduleTarget) => species.find((nameAnimal) =>
  nameAnimal.name === scheduleTarget).availability;

const createOfficeHourAndexhibition = (day, ObjSchedule) => {
  const obj = ObjSchedule;
  obj[day] = {};
  obj[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  obj[day].exhibition = [];
  species.forEach((animalDays) => {
    if (animalDays.availability.includes(day)) {
      obj[day].exhibition.push(animalDays.name);
    }
  });
  return obj;
};

const getObjectHours = (day, ObjSchedule) => {
  const obj = ObjSchedule;
  if (day === 'Monday') {
    obj[day] = mondayObject;
  } else {
    createOfficeHourAndexhibition(day, ObjSchedule);
  }
  return ObjSchedule;
};

const getObjectHoursNull = (ObjSchedule) => {
  const obj = ObjSchedule;
  Object.keys(hours).forEach((allDay) => {
    if (allDay === 'Monday') {
      obj[allDay] = mondayObject;
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

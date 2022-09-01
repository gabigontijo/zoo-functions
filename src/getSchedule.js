const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = Object.keys(hours);
const animalNames = species.map((names) => names.name);
const ObjSchedule = {};
const mondayObject = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

const scheduleAnimal = (scheduleTarget) => species.find((nameAnimal) =>
  nameAnimal.name === scheduleTarget).availability;

const createOfficeHourAndexhibition = (day) => {
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

const getObjectHours = (day) => {
  if (day === 'Monday') {
    ObjSchedule[day] = mondayObject;
  } else {
    createOfficeHourAndexhibition(day);
  }
  return ObjSchedule;
};

const getObjectHoursNull = () => {
  Object.keys(hours).forEach((allDay) => {
    if (allDay === 'Monday') {
      ObjSchedule[allDay] = mondayObject;
    } else {
      createOfficeHourAndexhibition(allDay);
    }
  });
  return ObjSchedule;
};

function getSchedule(scheduleTarget) {
  if (animalNames.includes(scheduleTarget)) {
    return scheduleAnimal(scheduleTarget);
  }
  if ((!animalNames.includes(scheduleTarget) && !weekDays.includes(scheduleTarget))
    || scheduleTarget === undefined) {
    return getObjectHoursNull();
  }
  return getObjectHours(scheduleTarget);
}

console.log(getSchedule('lions'));
module.exports = getSchedule;

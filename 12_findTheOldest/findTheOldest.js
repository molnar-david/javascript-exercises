const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson);
        const currentAge = getAge(currentPerson);
        return oldestAge > currentAge ? oldestPerson : currentPerson;
    });
};

const getAge = function(person) {
    return "yearOfDeath" in person ? person.yearOfDeath - person.yearOfBirth
                                   : new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;

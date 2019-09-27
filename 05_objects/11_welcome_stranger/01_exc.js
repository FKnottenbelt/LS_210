function greetings(person, details) {
  const job = `${details.title} ${details.occupation}`;
  const name = person.join(' ');

  console.log(`Hello, ${name}! Nice to have a ${job} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];
  const thoughts = getRandomThoughts();

  // Loop 20 times -- add users to the users array
     for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const Name = getRandomName();
    users.push({username: Name, email: `${Name}@aol.com`});
     }



  // Add users to the collection and await the results
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);


  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

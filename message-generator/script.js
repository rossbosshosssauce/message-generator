// Part 1: The Data Store
const messageComponents = {
  opening: ['Today', 'Tomorrow', 'In the near future', 'Next week'],
  action: ['you will find', 'you should avoid', 'you will master', 'you will encounter'],
  object: ['a mysterious cat', 'a coding breakthrough', 'a cold cup of coffee', 'unlimited inspiration']
};

// Part 2: The Logic Function
function generateMessage() {
  // We grab a random element from each array
  const part1 = messageComponents.opening[Math.floor(Math.random() * messageComponents.opening.length)];
  const part2 = messageComponents.action[Math.floor(Math.random() * messageComponents.action.length)];
  const part3 = messageComponents.object[Math.floor(Math.random() * messageComponents.object.length)];

  // Part 3: Return the combined string
  return `${part1}, ${part2} ${part3}.`;
}

// Part 4: Output to the console
console.log(generateMessage());
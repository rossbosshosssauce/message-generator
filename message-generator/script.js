const messageStore = {
  destination: ['Paris', 'The Moon', 'A Hidden Temple'],
  companion: ['a friendly robot', 'a stray cat', 'a wise hermit'],
  motive: ['to find gold', 'to seek inner peace', 'to learn a secret recipe']
};

function displayMessage() {
  console.log("========================================");
  console.log("   --- THE ADVENTURE GENERATOR ---   ");
  console.log("========================================");
  
  let finalMessage = [];
  
  // Example of using a loop for scalability
  for (let part in messageStore) {
    let index = Math.floor(Math.random() * messageStore[part].length);
    finalMessage.push(messageStore[part][index]);
  }
  
  console.log(`Target: ${finalMessage[0]}`);
  console.log(`With: ${finalMessage[1]}`);
  console.log(`Mission: ${finalMessage[2]}`);
  console.log("========================================");
}

displayMessage();
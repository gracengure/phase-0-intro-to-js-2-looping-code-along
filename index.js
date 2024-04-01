function writeCards(names, eventName) {
  let messages = []; // Create a new empty array to hold the messages
  
  for (let i = 0; i < names.length; i++) {
    // Build out the 'thank you' message for each name using string interpolation
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    
    // Add that message to the new array
    messages.push(message);
  }
  
  // Return the new array
  return messages;
}

// Example usage:
const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(messages);

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

// Example usage:
countDown(10);
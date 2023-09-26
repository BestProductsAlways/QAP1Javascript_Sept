// Raymond Payne
// QAP 1 Javascript Sept 29 2023
// Question 2A part 1

// The Buffer_example.js object demonstrates the use of the Buffer object in Node.js.
// In Node.js, a Buffer is a built-in class that allows for the manipulation of binary data directly in memory.
// It is particularly useful when working with binary data, such as reading from or writing to files, working with network protocols,
// or handling binary streams.

// In the example provided in Buffer_example.js, the code showcases common operations with a Buffer:

// The Buffer_example.js object demonstrates the use of the Buffer object in Node.js. In Node.js,
// a Buffer is a built-in class that allows for the manipulation of binary data directly in memory. 
// It is particularly useful when working with binary data, such as reading from or writing to files, working with network protocols,
// or handling binary streams.

// In the example provided in Buffer_example.js, the code showcases common operations with a Buffer:

// Creating a Buffer: It demonstrates how to create a Buffer from a string using Buffer.from().
// This is useful when you want to convert a text string into binary data for various purposes.

// Reading from the Buffer: After creating the Buffer, the code uses buffer.toString() to convert the binary data back into a readable string.
// This is essential when you need to interpret binary data as text.

// Writing to the Buffer: The code further demonstrates how to modify the content of the Buffer by using the buffer.write() method.
// It allows you to overwrite part of the binary data within the Buffer.

// part 2B

// Feature 1: Creating a Buffer
const buffer1 = Buffer.alloc(10); // Create a buffer of 10 bytes filled with zeros

console.log('Feature 1: Creating a Buffer');
console.log('========================================');
console.log('Buffer 1:', buffer1);
console.log('Buffer 1 Length:', buffer1.length);
console.log('----------------------------------------');

// Feature 2: Writing and Reading from a Buffer
const buffer2 = Buffer.alloc(5);
buffer2.write('Hello', 'utf-8'); // Write a string to the buffer
const message = buffer2.toString('utf-8'); // Read the buffer as a string

console.log('Feature 2: Writing and Reading from a Buffer');
console.log('========================================');
console.log('Buffer 2:', buffer2);
console.log('Buffer 2 as String:', message);
console.log('----------------------------------------');

// Feature 3: Copying and Slicing Buffers
const sourceBuffer = Buffer.from('Copy me');
const targetBuffer = Buffer.alloc(8);

sourceBuffer.copy(targetBuffer, 0, 0, sourceBuffer.length); // Copy data from source to target

const slicedBuffer = sourceBuffer.slice(0, 3); // Slice a portion of the buffer

console.log('Feature 3: Copying and Slicing Buffers');
console.log('========================================');
console.log('Source Buffer:', sourceBuffer);
console.log('Target Buffer after Copy:', targetBuffer);
console.log('Sliced Buffer:', slicedBuffer);
console.log('----------------------------------------');


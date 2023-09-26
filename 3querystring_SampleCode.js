// Raymond Payne
// QAP 1 Javascript Sept 29 2023
// Question 2A part 1


// The querystring_example.js object demonstrates the use of the querystring module in Node.js, which provides functionality for parsing
// and formatting query strings commonly used in URLs. Query strings are used to pass data between clients and servers in a human-readable format.

// Parsing a Query String: It shows how to parse a query string using the querystring.parse() method.
// This is essential when you receive query parameters from a URL and need to convert them into a structured JavaScript object
// for further processing.

// Stringifying Query Parameters: The example also demonstrates how to create a query string from a JavaScript object using querystring.stringify().
// This is useful when you want to construct query parameters to include in a URL.

// Query strings are commonly used in web applications for tasks like handling search queries, passing data between different parts
// of an application, or working with APIs that expect query parameters. The querystring module simplifies the process of parsing
// and formatting query strings, making it a valuable tool for working with URL-based data exchange in Node.js applications.

const querystring = require('querystring');

// Feature 1: Parsing a Query String
const queryString = 'name=John&age=30&city=New+York';
const parsedQuery = querystring.parse(queryString);

console.log('Feature 1: Parsing a Query String');
console.log('========================================');
console.log('Original Query String:', queryString);
console.log('Parsed Query Object:', parsedQuery);
console.log('----------------------------------------');

// Feature 2: Encoding an Object into a Query String
const dataObject = { name: 'Alice', age: 25, city: 'Los Angeles' };
const encodedQuery = querystring.stringify(dataObject);

console.log('Feature 2: Encoding an Object into a Query String');
console.log('========================================');
console.log('Object to Encode:', dataObject);
console.log('Encoded Query String:', encodedQuery);
console.log('----------------------------------------');

// Feature 3: Escaping and Unescaping Query String Components
const originalValue = 'This is a test value!';
const escapedValue = querystring.escape(originalValue);
const unescapedValue = querystring.unescape(escapedValue);

console.log('Feature 3: Escaping and Unescaping Query String Components');
console.log('========================================');
console.log('Original Value:', originalValue);
console.log('Escaped Value:', escapedValue);
console.log('Unescaped Value:', unescapedValue);
console.log('----------------------------------------');

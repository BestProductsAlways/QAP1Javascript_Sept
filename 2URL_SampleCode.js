// Raymond Payne
// QAP 1 Javascript Sept 29 2023
// Question 2A part 1


// The URL_example.js object demonstrates the use of the URL module in Node.js,
// which provides functionality for parsing and working with URLs (Uniform Resource Locators).
// URLs are commonly used to identify and access resources on the internet, such as web pages, images, and APIs.

// In this example, the code showcases how to work with URLs:

// Parsing a URL: It illustrates how to parse a URL string using the URL class from the url module.
// Parsing a URL allows you to break it down into its constituent parts, such as the protocol (e.g., "https"),
// hostname (e.g., "www.example.com"), port (e.g., 8080), pathname (e.g., "/path"), and query parameters (e.g., "param=value")

// Accessing URL Components: Once the URL is parsed, the code accesses specific components of the URL, such as the hostname and pathname,
// using properties like parsedUrl.hostname and parsedUrl.pathname. This is useful for extracting and working with different parts of a URL
// individually.

// Manipulating URL Components: The URL module also allows you to modify and manipulate URL components,
// making it easier to construct URLs for different purposes.

// This object is valuable when dealing with tasks like web scraping, building RESTful APIs, or implementing routing
// in web applications. It ensures that URLs are correctly parsed and constructed, making it easier to work with web addresses
// in Node.js applications.

// Part 2B

const { URL } = require('url');

// Feature 1: Parsing a URL
const urlString = 'https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#section';
const parsedURL = new URL(urlString);

console.log('Feature 1: Parsing a URL');
console.log('========================================');
console.log('Original URL: ' + urlString);
console.log('Parsed URL:');
console.log('  Protocol: ' + parsedURL.protocol);
console.log('  Hostname: ' + parsedURL.hostname);
console.log('  Port: ' + parsedURL.port);
console.log('  Pathname: ' + parsedURL.pathname);
console.log('  Search: ' + parsedURL.search);
console.log('  Hash: ' + parsedURL.hash);
console.log('----------------------------------------');

// Feature 2: Modifying parts of a URL
parsedURL.protocol = 'https';
parsedURL.hostname = 'updated.example.com';
parsedURL.port = '9090';

console.log('Feature 2: Modifying parts of a URL');
console.log('========================================');
console.log('Modified URL:');
console.log(parsedURL.toString());
console.log('----------------------------------------');

// Feature 3: Adding and manipulating search parameters
parsedURL.searchParams.append('param3', 'value3');
parsedURL.searchParams.set('param2', 'newvalue2');

console.log('Feature 3: Adding and manipulating search parameters');
console.log('========================================');
console.log('Updated URL:');
console.log(parsedURL.toString());
console.log('----------------------------------------');

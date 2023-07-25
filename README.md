# Domain Info Fetcher

This is a simple Node.js application that retrieves domain information from the Freenom API.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Adding Dependencies](#adding-dependencies)
4. [Environment Variables](#environment-variables)
5. [Running the Application](#running-the-application)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository: ```git clone https://github.com/kandekore/freenomapi.git

2. Change into the project directory: ```cd freenomapi

## Adding Dependencies

This project uses several dependencies, including:

- `dotenv`: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- `express`: A fast, unopinionated, minimalist web framework for Node.js.
- `node-fetch`: A light-weight module that brings `window.fetch` to Node.js.
- `cors`: Middleware that can be used to enable CORS with various options.

To add these dependencies to your project, run the following command: npm install dotenv express node-fetch cors

## Environment Variables

This project uses the `dotenv` module to load environment variables.

To add your environment variables:

1. In the root of your project, create a new file named `.env`.
2. Add the following variables to the file: ```API_EMAIL=your_email@example.com
API_PASSWORD=your_password

Replace `your_email@example.com` and `your_password` with your Freenom API email and password, respectively.

**Important**: Make sure to add the `.env` file to your `.gitignore` file to prevent your sensitive data from being committed to your repository.

## Running the Application

To start the application, run the following command in your terminal: ```node server.js


Once the server starts, you can visit `http://localhost:3000/` in your browser. 

Enter a domain name in the search field and click the "Search" button. The information about the domain will be retrieved from the Freenom API and displayed on the page.




   

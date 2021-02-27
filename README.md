## Lee Bates - Tech Test - Peak AI
- Please find attached my tech test for Peak AI, with more time I would have added handling a new item with no sessionID attached, some greater error handling and setup a db.
- I wanted to simulate a nosql db rather than use a relational easy to navigate model
- A nosql database would be perfect for this to handle more dynamic data 
- The app was built using functions that perform one task and one task only and once the 'addItemToBasket' controller was built the rest were almost built also thanks to this.
- This was done to create 'lambda-like' behaviours again to mirror the tech-stack at Peak, this also allowed for the microservice to be scalable as its not reliant on classes to control behaviours nor does it have classes that rely on each other.
- There are a few things I would change given more tiem (time has been in short supply this week)
    -- The handling of addItem when no existing item in the session 
        -- should I assign a sessionID, should it come from the browser?
    -- Adding a total basket output
    -- Greater error handling
    -- Tackling the bonus Kata for delivery, though the instructions for should we have multiple package for 10kg+ or cap it etc could be clearer
    -- Given more time I would have also wrote this in Typescript as well as javascript
    -- I would have used express validator also given more time to control the quality of data flow
    -- Without a DB to seed I wanted to demonstrate that code was creating new DB data in the 'saveBasket' util and in a real world would be pushed to the db




## Peak Technical Test Installation Instructions
- Type into the terminal'npm install' to install dev dependencies
- Type into the terminal 'npm start' to start the server
- Type into the terminal 'npm test' to start the test scripts
    - in the package.json file --watchAll --runInBand flags are used for WSL2 in windows 10 and docker due to speed issues, remove --runInBand in the script and save your file if this does not perform as expected


## Overview: 
- Your task is to build a microservice that powers the shopping cart of an ecommerce
website. You don’t need to hook your service up to a real database, the data can be stored in
memory for the purpose of demonstration. However, we also ask for a small write-up, which
explains your design choices and architectural decisions for example. This write-up could
include some notes on what database you might use for this service in production and why.

## User Stories
- As a user I should be able to add an item to the basket
- As a user I should be able to remove an item from the basket
- As a user I should be able to clear all the items from the basket
- As a user I should be able to list all items in the basket with the information ID, Title and Price






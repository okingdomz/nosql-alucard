#  NoSQL: Social Network API

## App Description

This app is used to simulate the interaction between users in a mock social network application without SQL. The users should be able to friend each other, react to thoughts posted, and delete their thoughts and reactions. Those responsibilities should only be able to happen under the authorization of those users and will be linked by their user Ids, thoughts id's , and friend id's. And for a bonus, the reactions will also have their own Id's. This should be a backbone in simulating social media interactions between users such as facebook, twitter, instagram, and more...

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.


All data was created and used for seeding purposes for th euser to practice the route functions!



## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./Assets/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./Assets/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](./Assets/18-nosql-homework-demo-03.gif)

In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](./Assets/18-nosql-homework-demo-04.gif)

In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.


### Walkthrough Video: 37%

* https://drive.google.com/file/d/17-Gv0TPQbohwsquFzm0wx07AhdkRC93M/view

  * The walkthrough video must show all of the technical acceptance criteria being met.

  * The walkthrough video must demonstrate how to start the application’s server.

  * The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.

  * The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.

  * The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.

  * Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.





---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

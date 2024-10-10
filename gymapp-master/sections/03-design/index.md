---
title: Design
has_children: false
nav_order: 4
---

# Design

This chapter explains the strategies used to meet the requirements identified in the analysis

## Architecture

- This section explains how the main components of the software are linked with each other
- A high-level view of the various system components must be provided, for example by using components diagram
- The chosen architecture must be described (for example, layered architecture)
<h1> Design </h1>

<h3> Architecture </h3>
<h5> HTML, CSS and JS:</h5>
<p> As regards the front-end aspects of the application, web technologies will be used to implement the basic functionalities that will allow the user to perform whatever action in a few clicks.</p>
<h5> Flask:</h5>
<p>Given its modularity and simplicity, it has been decided to use Flask as a back-end tool that guarantees the possibility to add new  functions and to perform actions by using a given interface. 

## Modelling

- This section explains how the domain has been modelled
- This section should contains some class diagrams
    - The application's most relevant design aspects are highlighted, showcasing how they solve the problems described in the analysis
    - Diagrams do not show implementation aspects that are not relevant, such as private fields
- This section describe how the tactical patterns and other aspects of DDD seen in class were applied

<h3>Modelling</h3>
<h4>Domain modelling:</h4>
<p>The domain model of "Six-pack" will be based on the Unified Modelling Language (UML) principles, so to ensure connections between the core business logic and the software development logic.
<h5>Class diagram:</h5>
<b>User:</b> <p> This class represents the person who wants to start using Six-pack. A user has a name, an e-mail and a password
</p>
<br>
<b>Exercise:</b> <p> This class stands for a physical activity that a user wants to do during a training session. It can be repeated multiple times both consequently or after a short break.
 An exercise has a name, number of reps, number of series, time break, a body part that is supposed to train and eventually a link to a video or an image if the user wants to add it
</p>
<b>Training session:</b> <p> This class represents nothing but an array of exercises grouped together.
A training session has a title and a number of exercises.
</p>


## Interaction
- This section explains the behavior of the system, for instance using sequence or activity diagrams
<h3>Interaction</h3>
<h5>Create a new trainig session</h5>
After having done the login, the users will find themselves in the homepage of the app.
Here they have the possibility of both finding the past training sessions and creating a new one.
<h5>Add an exercise</h5>
<p>User: Once that the users have created or retrieved a past training session, they can modify the exercises or add a new exercises by clicking the "+" button and a ready-to-use grid will appear.
The spaces of the grid need to be filled out with the name of the exercise, the number of reps, the number of series, the time break and a link to whatever the users want (images or videos).
</p>

## Behaviour
- This section explains the possible states that the system can be in and the events that cause the transition from one state to another, for instance using UML state diagrams
<h3>Flowchart diagram</h3>
<b>Start:</b> After the first login, the app is empty, with no training sessions at all.<br>
<b>Training session creation:</b> The user decide to create his/her first training session.<br>
<b>Modification of a training sessions:</b> The user can modify the training session by inserting or removing one or more exercises <br>
<b>Modification of an exercise:</b> The user can modify also just an exercise by entering in a training session and perform changes on the various section of the exercise grid.

## Data-related aspects
- This section explains all the details related to the data, for instance:
    - Data schema
    - Data persistence technologies (if used), for example: MySQL, MongoDB, ...
<br>
<b>User table:</B>Containing all the users'data
<b>Training session table:</b>Containing all the training sessions created by a single user
<b>Exercise table:</b> Containing all the exercises inserted in the various training session by the user.


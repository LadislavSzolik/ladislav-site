---
title: Learn maths online
excerpt: Web app made for children to practice maths
cover: ./src/assets/raw-images/kleiderbar/kleiderbar_app.jpg
date: 2015-08-13
---

**Table of Content**

- [Introduction](#introduction)
- [Starting the project](#starting-the-project)
- [Validating the first ideas](#validating-the-first-ideas)
- [Iterations](#iterations)
- [Conclusion](#conclusion)

## Introduction

### Who is it for?

- Children who require extra practice and visiting elementary school in Switzerland.
- They have access to a tablet or a desktop computer.

### What is it for?

- Enable children to easily visualize and practice mathematical challenges.

### Links

- Live demo site: https://maths-on-tablet.netlify.app/
- Github code: https://github.com/LadislavSzolik/maths-lessons-typescript

## Starting the project

My colleague, who worked previously as a teacher, wanted to help children from elementary schools with maths. This subject is difficult for a lot of kids and we believed that practice would improve this situation.

We wanted to create a collection of exercises. The level of inesity was taken from the official mathematics book used in Zurich, Switzerland.

// image with the book comes here

### Requirments

- Requirments specifications were created by the teacher using Google Slides.
- High fidelity mockups were produced with Sketch app.

// image from the requirements

### Technology used

- AngularJS (1.5) as frontend framework, written in Typescript
- Bootstrap CSS
- Supporting libraries: JQuery touch as we were targeting tablet devices

{% image './src/assets/raw-images/kleiderbar/kleiderbar_shop.jpeg', 'In the second-hand shop'%}

## Validating the first ideas

Static screen prototypes helped me to visualize concepts, but they did not yield results when I tested with her. Clickable, interactive prototypes were the way to go.

Apple's Swift UI library gave me the platform to create prototypes quickly. I installed each prototype directly on her phone, so she can experience it in a natural setup.

The first version validated the followings:

- enter new client in the system
- assign the client's clothes
- assign pre printed QR codes tags to these clothes

### Lessons learned

- Only QR code as a label replacement is not enough. Date of arrival, size, client name are essential for orientation.
- Using large amount of input fields, where she needs to type, was not accepted.

## Iterations

The next interations focused on eliminating manual typing:

{% image './src/assets/raw-images/kleiderbar/kleiderbar_app.jpg', 'App iterations' %}

## Conclusion

At the end of the design process the client decided to not go for a mobile solution due to small screen size of the mobiles in general. However the newly designed labels without QR were the new way of labelling instead of writing them mannually.

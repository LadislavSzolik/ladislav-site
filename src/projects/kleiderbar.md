---
title: Kleiderbar iOS app
excerpt: Design and develop native iOS inventory app prototype for a second-hand shop
cover: ./src/assets/raw-images/kleiderbar/cover.jpg
date: 2017-12-20
---

_Published on {{date | dateToFormat('yyyy-MM-dd')}}_

{% image './src/assets/raw-images/kleiderbar/cover.jpg', 'App iterations' %}

## Table of content

- [Introduction](#introduction)
- [Research](#research)
- [Early designs](#early-designs)
- [Iterations](#iterations)
- [Results](#results)

## Introduction

### Problem statment

- A second-hand children shop owner spends her evenings and weekends with tag writing and inventory. The price tags for the clothes are handwritten. This manual work which can be automated.

### Role(s) played

- UI/UX Designer, Mobile Engineer

### Activities performed

- Interviews
- Field research
- Ideation workshops
- Wire-framing
- Design High-fidelity mockups (using Adobe XD)
- Develop interactive prototype for iOS

### Links

- [Github code](#https://github.com/LadislavSzolik/Kleiderbar-Ver2)

## Research

### Initial assumptions

1. She is ineffective and makes mistakes while receiving or selling clothes. The main for this are the handwritten labels and the paper notebook with duplicate client names.
2. She would be open to use an app to manager her inventory.

### Prioritised hypotheses

1. We believe that by providing printed labels will remove the manual work. We can prove this by printing test labels and to see how it blends into her business.
2. We believe that being able to buy or sell simple with scanning the label will speed up her workflow.

### Personas

Marta

- The owner and a mother for two small kids. She uses her phone for calls and messages.
- She is not familiar with other apps.
- She likes manual work, it gives her satisfaction. However doing inventory manually cost her weekends and lead to mistakes.

{% image './src/assets/raw-images/kleiderbar/kleiderbar_shop.jpeg', 'In the second-hand shop' %}

_Inside of the second-hand shop_

## Early designs

As the static screen prototypes did not yield good testing results, I faced with the challenge of moving the project forward. We discussed together the features and ideas. Everyone liked them, now we needed to make it a reality.

As my client was the user and the project focused on creating a custom solution for a single persons problem, I invested time to build and experiment with clickable, interactive prototype.

{% image './src/assets/raw-images/kleiderbar/early_designs.png', 'First iteration of the client registration' %}

_The first iteration where I used built in iOS UI to test how easy is to add new client_

### Lessons learned

- It was critical to visit the shop and test the app there. I went that far that I always re installed the app on her own device to maximise the feedback.
- Performing actions in her natural environment provided me with further insights like she is using the handwritten label as orientation tool. She quickly scans them while searching.

## Iterations

As I learned from the usability testings, Marta sometimes receives more than 100 items. The challenge was to simplify and allow bulk item entry. The following designs illustrates the iterations:

{% image './src/assets/raw-images/kleiderbar/iterations.png', 'Simplifying item entry through iterations' %}

_The design changed from allowing single item entry to a bulk entry with imaginary_

### Lessons learned

- QR code as a label replacement was not enough. Date of arrival, size, client name were essential and needed to be visible all the time.
- Using large amount of input fields, where she needs to type, was not accepted.
- Using visual representation of the clothes simplified the workflow.

## Results

At the end of the design process the client decided to not go for a mobile solution due to small screen size of the mobiles in general. However the newly designed labels without QR were the new way of labelling instead of writing them manually.

This project was special because I spent large amount of time at the shop to observe and interview the target user.

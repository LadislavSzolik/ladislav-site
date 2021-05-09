---
title: Kleiderbar iOS app
excerpt: Digital inventory for a second-hand shop written in Swift.
cover: ./src/assets/raw-images/kleiderbar/kleiderbar_app.jpg
date: 2020-08-13
---

**Table of Content**

- [Introduction](#introduction)
- [Starting the project](#starting-the-project)
- [Validating the first ideas](#validating-the-first-ideas)
- [Iterations](#iterations)
- [Conclusion](#conclusion)

## Introduction

### Who is it for?

- A second-hand children shop owner.
- The price tags for the clothes are handwritten. She feels in control and satisfaction after doing all these handy work.
- She spends her evenings and weekends with tags writing and inventory. Manual work which can be automated.

### What is it for?

- The Kleiderbar iOS mobile app helps her to free up time, so that she can focus on growing and sustaining her business.

## Starting the project

From the shop visits I learned about her environment and workflow.

Observations to note:

- The most stressful moment is when a client, a person who brought the clothes to the store, wants back the remaining, not sold items. It is difficult to recollect those items.
- She uses the clothes tags as her primary orientation tool. For example, in one group she sorts the clothes based on date of arrival.
- She has no interest about digital devices, therefore often faces issues

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

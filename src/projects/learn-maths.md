---
title: Learn maths online
excerpt: Designed and developed web app for children to practice maths
cover: ./src/assets/raw-images/learn-maths/cover.jpg
date: 2015-08-13
---

_Published on {{date | dateToFormat('yyyy-MM-dd')}}_

{% image './src/assets/raw-images/learn-maths/cover.jpg', 'High fidelity design' %}

## Table of content

- [Introduction](#introduction)
- [Research](#research)
- [Early designs](#early-designs)
- [Iterations](#iterations)
- [Results](#results)

## Introduction

### Problem statment

- It is common not only in Switzerland, but in many other countries that elementary students face a lot of challenges with mathematics. This situation results in ignorance and losing of interesting in the subject.
- The goal of the project is to enable children visualise and practice common mathematical challenges

### Role(s) played

- UI/UX Designer, Frontend Engineer

### Activities performed

- Ideation workshops
- Wire-framing
- Design High-fidelity mockups (using SketchApp)
- Develop interactive prototype for Tablet devices

### Links

- Live demo site: https://maths-on-tablet.netlify.app/
- [Github code](#https://github.com/LadislavSzolik/maths-lessons-typescript)

## Research

### Initial assumptions

1. The customers are the parents with children who struggle to understand mathematics.
2. The goal of the parents is to feel calm when they think about the education of their children.
3. An app can keep the children longer engaged with the subject.

### Prioritised hypotheses

1. We believe that providing interactive and visual exercises will keep the children engaged with the subject and will help to understand mathematical concepts. We can demonstrate this by comparing their performance over time.
2. We believe that enabling parents to track their children’s progress will give them better understanding of how children learn and they will feel in control.

### Personas

- Lisa
  - The mother, who wants her child, Rafael to succeed. She worries about the math results.
  - She keeps herself informed about new studying methods.
- Rafael
  - The 4th grade student, who struggles to understand subtractions with multi-digit numbers.

## Early designs

Our first challenge was to identify the topics the app should focus on. We solved this by talking to teachers and understand the most common areas where students struggle. Apart from that we received a study book which was used in Kanton Zürich.

Mathematical concepts build on top of each other, therefore we needed to design the exercises like a game with multiple levels:

{% image './src/assets/raw-images/learn-maths/entry_screen.png', 'Entry screen wireframe' %}

_First wireframe with the exercise overview_

Once we had the scope, the next challenge was to make the exercise engaging and easy to implement. After researching the current technical capabilities, we decided to focus on touch and drag&drop instead of manually entering numbers. Each exercise was inspired by these two key interactions:

{% image './src/assets/raw-images/learn-maths/exercise_specifications.png', 'Exercise specifications' %}

_Defining the different types of exercises_

### Lessons learned

- Collaborating with teachers revealed several insights, for example it was advised to follow the school curriculum otherwise students will have problems to follow along.

## Iterations

Initial prototypes were designed using Sketchapp and made interactive with InVision. This level of fidelity yield good results in terms of information architecture and navigation.

{% image './src/assets/raw-images/learn-maths/design_iterations.png', 'Screen design iterations' %}

_Showcasing different type of exercises_

The challenge was to test how intuitive each exercise was. Tapping on numbers was not a problem, however to see drag & drop we needed more. After a small research we decided to mock what we can and implement the prototypes directly using code.

### Lessons learned

- The usability tests indicated that we should aim to use intuitive icons for buttons instead of texts as children prefer graphics and cannot read that quickly. Additionally it helped us to maintain internationalisation.
- Coding certain exercises takes time, however it was a big win in two areas:
  1.  It served us as a proof of concept, we were sure that we can even implement it.
  2.  It gave us confidence after testing.

## Results

The product remained as prototype as we could not increase adoption and find a sustainable business model.

However this project helped me further develop my design and front end engineering skills. I gained practice in rapid prototyping, usability testing and remote team collaboration.

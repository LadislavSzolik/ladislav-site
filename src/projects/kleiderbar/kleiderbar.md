---
title: Kleiderbar (Dressbar)
excerpt: Prototying a navite iOS app for second hand inventory management
---

## Table of Content

- [Project brief](#defining-the-brief)
- [Initial designs](#initial-designs)
- [Iterations](#iterations-on-landing-page)
- [Results](#results)

## Project brief

### Client

Owner of a children clothes second-hand shop

### Scope

## Starting the project

### Challenges

1. Infrastructure setup
2. Business requirements
3. Credit card payment integration
4. Booking system from scratch

### Solutions

1. First I tried to use already existing CMS (Content Management System) tools like WIX or Wordpress. Due to the very custom requirements I decided to build it using Laravel the PHP framework. The framework offers many built in features which speeded up development.
2. I noticed early that high level discussions about requirements weren’t effective with the client. Neither wireframes nor UI mockups communicted well. The developed sites with minimalistic design and no database were the solution to make progress.
3. Due to the pandemic the client wanted online payment instead of cash. After two weeks of research we end up using Datatrans as a payment service provider.
4. Non of the Wordpress plugins were flexible enough to create the wished booking system. Thanks to the PHP framework I could develop it from scratch.

### Leasons learned

Web frameworks evolved to the level, where a developer can faster ship solution without the need for paid site creators. Each framework has a learning curve and opinion about architecture. To find a right framework for a task is also not easy. It is critical to understand the underlying core technolgoies to be able utilize such a solution.

## Iterations on landing page

### Landing page content

The frist version of the business content was a simple MS Word document. This was the tool the client was confortable with. It was adapted and shared in a mail chain.

### Leasons learned

I tried to move towards google docs to avoid communication overhead. In the end I failed and needed to respect the tool with which the client was comfortable.

## Creating design system

### Stylesheet framework

Yet an another framework. To speed up user interface development I used Tailwind CSS. It offers ready made components and integrates well with the PHP framework.

### Desiging for desktop and mobile

The web application is responsive. In the booking order form and the table views adapting to the corresponding form factor.

## Results

### Getting feedback

We tested the web app with several people. Thanks to simple UI components, we got a positive feedback on the usability. The startup at the time of this documentation is still in an early stage and the app is a subject for change. It will be interesting to see how the project develops in the future.

### Key takeaways

- I learned that static high fidelity designs in an web app with heavy interaction requirments was slowing down our progress
- Clarity in communication is key to move the project forward. As each person is different, the first part of the project should be about finding the common way of talking to each other.

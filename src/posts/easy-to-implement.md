---
title: "Making designs easy to implement"
date: 2023-01-01
description: "In the past few months I haven't done any usability testings nor user interviews. Also, I did not organise any crazy design thinking workshop. Plus, there was no new design challenge on the horizon. I felt bad about it and I wanted to change it. As I was talking with other team mates, I realised we had bigger problems to solve. We needed to find a way to ship the already tested designs. The best way how I could help is to make my existing designs easy to implement. What do I mean by that? Let's have a look."
tags: ["post", "hand-off"]
---

In the past few months I haven't done any usability testings nor user interviews. Also, I did not organise any crazy design thinking workshop. Plus, there was no new design challenge on the horizon. I felt bad about it and I wanted to change it. As I was talking with other team mates, I realised we had bigger problems to solve. We needed to find a way to ship the already tested designs. The best way how I could help is to make my existing designs easy to implement. What do I mean by that? Let's have a look.

## 1. Design variations

For a complex app, a designer might briefly suggest the screen design and skip the edge-cases where the design would break. When the developer implements those features and stumbles upon that edge-case, he might decide to solve it by himself or quickly consult the designer. Either way, the designer does not have anymore flexibility and time to come up with a proper solution as the developer needs to ship the feature. This leads to bad design, and of course loss of credibility in our craft.

To fight this situation, I spent extra time to explore different states using actual data and text in different languages. It is up to a designer which method she or he uses, the main idea is to lower the risk of designing something what cannot be implemented.

For example, a small dropdown might not work because the item names are too long and the user won't be able to read them. Another example is using a card layout design instead of a simple table for a use case where sorting is critical and cards are not a good choice.

## 2. Interactive prototypes

I believe, after the stakeholders and users, the biggest audience of our prototypes are developers. They want to experience the application as much as possible to understand the flow and to come up with a proper solution. One can argue that we can explain the design to them with post-its and comments, because the effort to create additional prototypes is a waste of our time.

My experience is different. If a developer gets an intuitive prototype, chances are higher that she or he won't ask that many questions and the expected vision will be implemented. Modern design tools like Figma allows us to create components with variations. This allows us to create an interaction flow in no time.

For example, instead of describing when a form field is disabled, I can create a component with that form in different states and I use it in a clickable prototype, where I demonstrate that behavior. I think, this goes in the direction, where we will communicate requirements and designs with the same tool, eliminating the need to write long documents.

## 3. Present and test

Apart from designing variations and interactive prototypes, I take extra time to attend feature estimation meetings, where I stay in the background and I let the developers discover the design and ask questions.

Even after so much work it can happen that something else is implemented as it was planned. Because of that reason I also participate in software testing and bug raising.

## Conclusion

In the end we are building a software, not designs. Yes, we can be ignorant and focus on the fun part, doing user research and designing screens. But there is an alternative route, where we stretch our comfort zone and take responsibility to ship a software we all wanted, by doing things which might feel out of our scope of work.

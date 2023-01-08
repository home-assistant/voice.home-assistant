---
title: "Home Assistant Intents"
sidebar_label: "Overview"
---

Intents are a way to describe what the user wants to do. The user might want to turn a switch on, set the temperature or change the color of a light. An intent captures this information in a structured way that Home Assistant can act upon.

Take for example the sentence `Turn on the living room lights`. This sentence can be matched to an intent. The intent will contain the following information:

- The action: `turn_on`
- The area: `living room`
- The device type: `light`

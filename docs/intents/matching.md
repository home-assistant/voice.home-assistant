---
title: "Matching sentences to intents"
sidebar_label: "Matching sentences"
---

To understand the intention of the user, we need to match the user's sentence to an intent. This is done by using an **intent matcher**. An intent matcher takes definitions of sentence variations and applies that to a sentence. If it can match the sentence to an intent, it will return the intent and the extracted data.

In Home Assistant we are collecting our intent matcher definitions [on GitHub](https://github.com/home-assistant/intents). The repository aims to contain for each language and each supported intent in Home Assistant, the possible sentences a user might say.

An example definition would look like: `turn on the {area} lights`. This will match the sentence `turn on the living room lights` and extract the area `living room`.

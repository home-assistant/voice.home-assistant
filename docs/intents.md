---
title: "Home Assistant Intents"
sidebar_label: "Intents"
---

import intents from '!!yaml-loader!../intents/intents.yaml';

Intents are a way to describe what the user wants to do. The user might want to turn a switch on, set the temperature or change the color of a light. An intent captures this information in a structured way that Home Assistant can act upon.

Take for example the sentence `Turn on the living room lights`. This sentence can be matched to an intent. The intent will contain the following information:

- The action: `turn_on`
- The area: `living room`
- The device type: `light`

## Supported intents

<div>
{
  Object.entries(intents).map(
    ([intent, info]) =>
      <>
        <h3>{intent}</h3>
        <p>{info.description}</p>
        <b>Slots</b>
        {info.slots && (
          <ul>
            {Object.entries(info.slots).map(([slot, slotInfo]) => (
              <li>
                <b>{slot}</b> - {slotInfo.description}
              </li>
            ))}
          </ul>
        )}
      </>
  )
}
</div>

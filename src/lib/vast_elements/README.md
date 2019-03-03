# Vast Element Architecture

_Sample Vast XML Structure_

```
Ad
 - Inline
   - Creatives
      - TrackingEvents
      - VideoClicks
      - MediaFiles
   - Extensions
...
```

### Overview

In exploring how to parse the [VAST XML format](https://www.iab.com/guidelines/digital-video-ad-serving-template-vast-3-0/) ([PDF](https://www.iab.com/wp-content/uploads/2015/06/VASTv3_0.pdf)), I hoped to explore a clean way to handle the different elements found in a Vast tag.

Instead of writing a bulging class to handle all of these different attributes, I segmented each responsibility into it's own section, extracted as a class extending `VastElementBase`.

The idea is that once the Vast XML is loaded, each VastElement will query the XML Dom to inspect the relevant parts of the xml and provide rich functionality by extending the base `Vast` class.

### Implementing a new VastElement

There are four major methods that the extending class must support

1. `static selector()` – This should return a selector as a string, and is used to determine which elements your element class will consume

1. `static appendElementsOnFollow()` – Returns a boolean (defaults to `true`) and controls if following Vast's Wrapper VASTAdTagURI url's should append or reload this Vast Elements' knowledge of the DOM. For most elements this should be true (appending), but in a few cases such as finding a new wrapper url to follow would cause redirect loops.

1. `setup()` – this will be called once your element class is loaded, use it like a constructor.

1. `onVastReady()` – The vast file has been onVastReady and your selector has been run, you can find your elements loaded in `this.elements`

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
In exploring how to parse the VAST XML format, I hoped to explore a clean way to handle the different elements found in a Vast tag.

Instead of writing a large class to handle all of these different attributes, each section is contained in it's own class extending `VastElementBase`.

The idea is that once the Vast XML is loaded, each VastElement will query the XML Dom to inspect the relevant parts of the xml and provide rich functionality by extending the base `Vast` class.

### Implementing a new VastElement
There are four major methods that the extending class must support

1. `static selector()` – This should return a selector as a string, and is used to determine which elements your element class will consume

1. `setup()` – this will be called once your element class is loaded, use it like a constructor.

1. `processed()` – The vast file has been processed and your selector has been run, you can find your elements loaded in `this.elements`

1. `extendVastBaseWithPublicMethods()` – this is where you will extend the `Vast` main class methods. I am the least excited about this and am thinking about changing it.
```js
  extendVastBaseWithPublicMethods(){
    this.vast.videos = () => {return this.getVideos()}
  }
```



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

There are three major methods that the extending class must support

1. `static selector()` – This should return a selector as a string, and is used to determine which elements your element class will consume

1. `setup()` – this will be called once your element class is loaded, use it like a constructor.

1. `onVastReady()` – The vast file has been onVastReady and your selector has been run, you can find your elements loaded in `this.elements`

### License

Copyright (c) 2019, Vox Media, Inc.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

- Neither the name of the {organization} nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

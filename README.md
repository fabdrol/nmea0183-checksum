# nmea0183-checksum

Tiny CLI program that generates a NMEA0183 checksum for any given sentence


### Installation

```
[sudo] npm install -g nmea0183-checksum
```


### Usage (CLI)

```
$ nmea0183-checksum '$SDHDG,181.9,,,0.6,E'
> $SDHDG,181.9,,,0.6,E*32
```


### Usage (programmatically)

This program exposes a single function: `getCheckSum(sentence, [returnHex])`. 
You can use it to calculate the checksum of a given sentence. Example:

```javascript
const getCheckSum = require('nmea0183-checksum')
const sentence = '$SDHDG,181.9,,,0.6,E'

// Returns hex string 32 (default behaviour)
let checksum = getCheckSum(sentence)

// Returns 50 (base10 integer)
let checksum = getCheckSum(sentence, false)
```


### License

```
Copyright 2016 Fabian Tollenaar <fabian@decipher.industries>.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

```
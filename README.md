# RDF Privacy Preserving Summary


A JavaScript library that takes an RDF file (`file.ttl`) and array of access keys as input, and outputs a privacy-preserving summary (`file.ttl.summary`).
  
* `rdf-parse` can parse any RDF file: https://www.npmjs.com/package/rdf-parse
* `bloem`, `base64-arraybuffer`, and `murmurhash` may come in handy for creating Bloom filters. These files are good examples on how they are used for summary creation: https://github.com/LinkedDataFragments/Server.js/tree/feature-handlers-amf-2/lib/amf (Warning: these are *NOT* privacy-preserving yet)
* The output (`file.ttl.summary`) will be a directory containing 4 files: (`subjects.bloom`, `predicates.bloom`, `objects.bloom`, `graphs.bloom`)

When we load files into the Solid server, summaries will always exist in the same directory as the main file, but have the `.summary` suffix.
## Installation

> :construction: **TBD**
## Usage

> :construction: **TBD**

## License
This software is written by [Simon Steyskal](http://www.steyskal.at)

This code is released under the [MIT license](http://opensource.org/licenses/MIT).

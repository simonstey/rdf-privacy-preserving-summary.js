/* eslint-disable no-inline-comments */
/* eslint-disable line-comment-position */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
const { BloomFilter } = require('bloom-filters');

type CallbackType = (input: any) => void;
export class Bloom {
  private readonly tripleStream: any;
  private readonly query: any;
  private readonly probability: any;
  private readonly callback: any;
  private filter!: any;

  public parse(callback: CallbackType): void {
    this.filter = new BloomFilter.from([ 'alice', 'bob', 'rdf:type' ], 0.1);

    // Export a bloom filter to JSON
    return callback(this.filter.saveAsJSON());
    // Let textStream;
    // let parseOptions: ParseOptions;
    // if (!path) {

    //   parseOptions = { contentType: 'text/turtle' };
    // } else {
    //   textStream = fs.createReadStream(path);
    //   parseOptions = { path };
    // }
    // const quads: RDF.Quad[] = [];

    // rdfParser.parse(textStream, parseOptions)
    //   .on('data', quad => {
    //     console.log(quad);
    //     quads.push(quad);
    //   })
    //   .on('error', error => {
    //     console.log(`47:${JSON.stringify(error)}`);
    //     return callback(error);
    //   })
    //   .on('end', () => {
    //     console.log('All done!');
    //     callback(quads);
    //   });
  }

  public loadFilter(callback: CallbackType, filter: any): void {
    return callback(BloomFilter.fromJSON(filter));
  }

  //   TripleStream.getProperty('metadata', function (metadata) {
  //     var totalCount = metadata.totalCount;

  //     // estimate k,m. Create bloom
  //     var m = Math.ceil((-totalCount * Math.log(probability)) / (Math.LN2 * Math.LN2)),
  //       k = Math.round((m / totalCount) * Math.LN2);
  //     if (Number.isNaN(m))
  //       m = 0;
  //     if (Number.isNaN(k))
  //       k = 0;

  //     var filters = _.pick(_.assign({
  //       subject: '?s',
  //       predicate: '?s',
  //       object: '?o',
  //     }, query), function (v) {
  //       return typeof v === 'string' && v.indexOf('?') === 0;
  //     });
  //     for (var variable in filters)
  //       filters[variable] = new Filter(m, k);

  //     tripleStream.on('data', function (triple) {
  //       for (var variable in filters)
  //         filters[variable].add(Buffer.from(triple[variable]));
  //     });

  //     tripleStream.on('end', function () {
  //       for (var variable in filters) {
  //         filters[variable] = {
  //           type: 'http://semweb.mmlab.be/ns/membership#BloomFilter',
  //           filter: filters[variable].bitfield.buffer.toString('base64'),
  //           m: m,
  //           k: k,
  //         };
  //       }
  //       callback(null, filters);
  //     });
  //   });
  // }
  // }
}

// Module.exports = Bloom;

export class BloomFilter {
  private readonly tripleStream: any;
  private readonly query: any;
  private readonly probability: any;
  private readonly callback: any;

  // Constructor(tripleStream: any, query: any, probability: any, callback: any) {

  //   //   TripleStream.getProperty('metadata', function (metadata) {
  //   //     var totalCount = metadata.totalCount;

  //   //     // estimate k,m. Create bloom
  //   //     var m = Math.ceil((-totalCount * Math.log(probability)) / (Math.LN2 * Math.LN2)),
  //   //       k = Math.round((m / totalCount) * Math.LN2);
  //   //     if (Number.isNaN(m))
  //   //       m = 0;
  //   //     if (Number.isNaN(k))
  //   //       k = 0;

  //   //     var filters = _.pick(_.assign({
  //   //       subject: '?s',
  //   //       predicate: '?s',
  //   //       object: '?o',
  //   //     }, query), function (v) {
  //   //       return typeof v === 'string' && v.indexOf('?') === 0;
  //   //     });
  //   //     for (var variable in filters)
  //   //       filters[variable] = new Filter(m, k);

  //   //     tripleStream.on('data', function (triple) {
  //   //       for (var variable in filters)
  //   //         filters[variable].add(Buffer.from(triple[variable]));
  //   //     });

  //   //     tripleStream.on('end', function () {
  //   //       for (var variable in filters) {
  //   //         filters[variable] = {
  //   //           type: 'http://semweb.mmlab.be/ns/membership#BloomFilter',
  //   //           filter: filters[variable].bitfield.buffer.toString('base64'),
  //   //           m: m,
  //   //           k: k,
  //   //         };
  //   //       }
  //   //       callback(null, filters);
  //   //     });
  //   //   });
  //   // }
  // }
}

// Module.exports = BloomFilter;

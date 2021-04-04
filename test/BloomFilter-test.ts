import 'jest-rdf';
import type { BloomFilter } from 'bloom-filters';
import { Bloom } from '../lib/amf/BloomFilter';

describe('BloomFilter', () => {
  let bloomFilter: Bloom;

  beforeEach(() => {
    bloomFilter = new Bloom();
  });

  describe('Basic', () => {
    let serializedFilter: any;
    it('should return JSON', async done => {
      function callback(data: any) {
        try {
          // eslint-disable-next-line no-console
          console.log(data);
          serializedFilter = data;
          expect(data).toBeTruthy();
          done();
        } catch (error: unknown) {
          done(error);
        }
      }

      bloomFilter.parse(callback);
    });
    it('should parse serialized Filter', async done => {
      function callback(filter: BloomFilter) {
        try {
          // eslint-disable-next-line no-console

          expect(filter.has('alice')).toBeTruthy();
          expect(filter.has('asd')).toBeFalsy();
          done();
        } catch (error: unknown) {
          done(error);
        }
      }

      bloomFilter.loadFilter(callback, serializedFilter);
    });
  });

  // Describe('Parse Triples as Quads', () => {
  //   it('should parse triples correctly from stream', done => {
  //     function callback(data: RDF.Quad[]) {
  //       try {
  //         expect(data).toBeTruthy();
  //         done();
  //       } catch (error: unknown) {
  //         done(error);
  //       }
  //     }

  //     factory.parse(callback);
  //   });
  //   it('should parse triples correctly from file', async done => {
  //     function callback(data: RDF.Quad[]) {
  //       try {
  //         expect(data).toBeTruthy();
  //         done();
  //       } catch (error: unknown) {
  //         done(error);
  //       }
  //     }

  //     factory.parse(callback, 'test/file1.ttl');
  //   });

  //   it('should throw error while parsing', done => {
  //     const badFactory: SummaryFactory = new SummaryFactory();
  //     function callback(data: RDF.Quad[]) {
  //       try {
  //         expect(data).toBeInstanceOf(Error);
  //         done();
  //       } catch (error: unknown) {
  //         done(error);
  //       }
  //     }

  //     badFactory.parse(callback, undefined, `<http://ex.org/s> <http://ex.org/p> .`);
  //   });
  // });
});

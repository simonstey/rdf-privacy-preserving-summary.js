import 'jest-rdf';
import type * as RDF from 'rdf-js';
import { SummaryFactory } from '../lib/SummaryFactory';

describe('SummaryFactory', () => {
  let factory: SummaryFactory;

  beforeEach(() => {
    factory = new SummaryFactory();
  });

  describe('Missing File', () => {
    it('should throw path error', async done => {
      const badFactory: SummaryFactory = new SummaryFactory();

      function callback(data: RDF.Quad[]) {
        try {
          expect(data).toBeTruthy();
          done();
        } catch (error: unknown) {
          done(error);
        }
      }

      badFactory.parse(callback, 'asd.ttl');
    });
  });

  describe('Parse Triples as Quads', () => {
    it('should parse triples correctly from stream', done => {
      function callback(data: RDF.Quad[]) {
        try {
          expect(data).toBeTruthy();
          done();
        } catch (error: unknown) {
          done(error);
        }
      }

      factory.parse(callback);
    });
    it('should parse triples correctly from file', async done => {
      function callback(data: RDF.Quad[]) {
        try {
          expect(data).toBeTruthy();
          done();
        } catch (error: unknown) {
          done(error);
        }
      }

      factory.parse(callback, 'test/file1.ttl');
    });

    it('should throw error while parsing', done => {
      const badFactory: SummaryFactory = new SummaryFactory();
      function callback(data: RDF.Quad[]) {
        try {
          expect(data).toBeInstanceOf(Error);
          done();
        } catch (error: unknown) {
          done(error);
        }
      }

      badFactory.parse(callback, undefined, `<http://ex.org/s> <http://ex.org/p> .`);
    });
  });
});

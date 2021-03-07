/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
import * as fs from 'fs';
import type * as RDF from 'rdf-js';
import type { ParseOptions } from 'rdf-parse';
import rdfParser from 'rdf-parse';

type CallbackType = (input: any) => void;

export class SummaryFactory {
  // Private readonly algorithm: string;

  // private readonly inputEncoding: crypto.Encoding;

  // private readonly outputEncoding: crypto.BinaryToTextEncoding;

  // private readonly ivlength: number;

  // private readonly encryptionKey?: string;

  // public constructor() {

  // }
  // `<http://ex.org/s> <http://ex.org/p> <http://ex.org/o1>, <http://ex.org/o2>.`

  public parse(callback: CallbackType, path?: string, triples?: string): void {
    let textStream;
    let parseOptions: ParseOptions;
    if (!path) {
      textStream = require('streamify-string')(triples || `<http://ex.org/s> <http://ex.org/p> <http://ex.org/o1>, <http://ex.org/o2>.`);

      parseOptions = { contentType: 'text/turtle' };
    } else {
      textStream = fs.createReadStream(path);
      parseOptions = { path };
    }
    const quads: RDF.Quad[] = [];

    try {
      rdfParser.parse(textStream, parseOptions)
        .on('data', quad => {
          console.log(quad);
          quads.push(quad);
        })
        .on('error', error => {
          console.log(`47:${JSON.stringify(error)}`);
          return callback(error);
        })
        .on('end', () => {
          console.log('All done!');
          callback(quads);
        });
    } catch (error: unknown) {
      console.log(`55:${JSON.stringify(error)}`);
      return callback(error);
    }
  }
}
// Export interface ISummaryFactoryOptions {
//   algorithm?: string;
//   inputEncoding?: crypto.Encoding;
//   outputEncoding?: crypto.BinaryToTextEncoding;
//   ivlength?: number;
//   encryptionKey?: string;
// }

//   INPUT:
//     Q: set of quads, P: set of policies
//   OUTPUT:
//     QPK: hashmap of quads to policies and keys
//   public static CreateAccessKeys(Q, P) {

//   }

// QPK = new Map()
// FOREACH q in Q
//   FOREACH p in P
//     k = GenerateKey(q,p)
//     QPK = AddKey(QPK, q, p, k)
// RETURN QPK

// Public static getTransformedQuadStream(
//   quadSource: IQuadSource,
//   transformers: IQuadTransformer[],
// ): RDF.Stream & Readable {
//   const quadStream = quadSource.getQuads();
//   if (transformers.length > 0) {
//     const transformedQuadStream = new QuadTransformStream(transformers);
//     quadStream.on('error', (error: Error) => transformedQuadStream.emit('error', error));
//     quadStream.pipe(transformedQuadStream);
//     return transformedQuadStream;
//   }
//   return quadStream;
// }

/**
       * Read quads from a given source, fragment it into the sink, and close the sink.
       */
//   public fragment(): string {
//     const key = Buffer.from('ciw7p02f70000ysjon7gztjn7c2x7GfJ', 'latin1'); // Key must be 32 bytes for aes256
//     const iv = crypto.randomBytes(ivlength);

//     const text = '72721827b4b4ee493ac09c635827c15ce014c3c3';

//     console.log('Ciphering "%s" with key "%s" using %s', text, key, algorithm);

//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     let ciphered = cipher.update(text, inputEncoding, outputEncoding);
//     ciphered += cipher.final(outputEncoding);
//     const ciphertext = `${iv.toString(outputEncoding)}:${ciphered}`;

//     console.log('Result in %s is "%s"', outputEncoding, ciphertext);

//     const components: string[] = ciphertext.split(':');
//     const iv_from_ciphertext = Buffer.from(components.shift()!, this.outputEncoding);
//     const decipher = crypto.createDecipheriv(algorithm, key, iv_from_ciphertext);
//     let deciphered = decipher.update(components.join(':'), outputEncoding, inputEncoding);
//     deciphered += decipher.final(inputEncoding);

//     console.log(deciphered);

//     return ciphertext;
//     // Assert.equal(deciphered, text, 'Deciphered text does not match!');
//   }

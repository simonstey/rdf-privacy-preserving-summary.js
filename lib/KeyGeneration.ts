/* eslint-disable no-console */
import * as crypto from 'crypto';

export class KeyGeneration {
  private readonly algorithm: string;

  private readonly inputEncoding: crypto.Encoding;

  private readonly outputEncoding: crypto.BinaryToTextEncoding;

  private readonly ivlength: number;

  private readonly encryptionKey?: string;

  public constructor(options: IKeyGeneratorOptions) {
    this.algorithm = options.algorithm || 'aes256';
    this.inputEncoding = options.inputEncoding || <crypto.Encoding>'utf8';
    this.outputEncoding = options.outputEncoding || <crypto.BinaryToTextEncoding>'hex';
    // AES blocksize
    this.ivlength = options.ivlength || 16;
    this.encryptionKey = options.encryptionKey;
  }

  public encrypt(text: string, secretKey?: string): string {
    const iv = crypto.randomBytes(this.ivlength);

    const encKey = secretKey || this.encryptionKey;

    if (!encKey) {
      console.log('no encryption key provided!');
      return text;
    }
    const encKeyBuffer = crypto.createHash('sha256').update(encKey).digest();

    console.log(encKey);
    // Buffer.from(encKey), iv);
    const cipher = crypto.createCipheriv(this.algorithm, encKeyBuffer, iv);
    let encrypted = cipher.update(text, this.inputEncoding, this.outputEncoding);

    // Encrypted = Buffer.concat([ encrypted, cipher.final(this.outputEncoding) ]);
    encrypted += cipher.final(this.outputEncoding);
    const ciphertext = `${iv.toString(this.outputEncoding)}:${encrypted}`;

    return ciphertext;
  }

  public decrypt(text: string, secretKey?: string): string | undefined {
    const textParts = text.split(':');
    const decKey = secretKey || this.encryptionKey;

    if (!decKey) {
      console.log('no decryption key provided!');
      return text;
    }

    const decKeyBuffer = crypto.createHash('sha256').update(decKey).digest();

    console.log(decKey);

    const iv = Buffer.from(textParts.shift()!, this.outputEncoding);
    // Const encryptedText = Buffer.from(textParts.join(':'), this.outputEncoding);
    // Buffer.from(decKey), iv);
    const decipher = crypto.createDecipheriv(this.algorithm, decKeyBuffer, iv);
    // Let decrypted = decipher.update(encryptedText);

    // decrypted = Buffer.concat([ decrypted, decipher.final() ]);

    //   const decipher = crypto.createDecipheriv(algorithm, key, iv_from_ciphertext);

    try {
      let deciphered = decipher.update(textParts.join(':'), this.outputEncoding, this.inputEncoding);
      deciphered += decipher.final(this.inputEncoding);

      console.log(deciphered);
      return deciphered;
    } catch {
      console.log('Wrong dec. key');
    }
  }
}
export interface IKeyGeneratorOptions {
  algorithm?: string;
  inputEncoding?: crypto.Encoding;
  outputEncoding?: crypto.BinaryToTextEncoding;
  ivlength?: number;
  encryptionKey?: string;
}

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

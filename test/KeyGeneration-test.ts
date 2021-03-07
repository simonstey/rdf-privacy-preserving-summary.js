import 'jest-rdf';
import type { IKeyGeneratorOptions } from '../lib/KeyGeneration';
import { KeyGeneration } from '../lib/KeyGeneration';

describe('KeyGeneration', () => {
  let keyGen: KeyGeneration;

  beforeEach(() => {
    keyGen = new KeyGeneration({
      algorithm: 'aes256',
      inputEncoding: 'utf8',
      outputEncoding: 'hex',
      ivlength: 16,
      encryptionKey: 'ciw7p02f70000ysjon7gztjn7c2x7GfJ',
    });
  });

  describe('Encryption/Decryption', () => {
    it('should correctly round-trip encryption/decryption', () => {
      const cipher: string = keyGen.encrypt('asdasd');
      const deciphered = keyGen.decrypt(cipher);
      const deciphered_customKey = keyGen.decrypt(cipher, 'ciw7p02f70000ysjon7gztjn7c2x7GfJ');
      const deciphered_wrongCustomKey = keyGen.decrypt(cipher, 'wrong_key');
      expect(cipher).toBeTruthy();
      expect(deciphered).toBeTruthy();
      expect(deciphered).toEqual('asdasd');
      expect(deciphered_customKey).toEqual('asdasd');
      expect(deciphered_wrongCustomKey).not.toEqual('asdasd');
    });
  });

  describe('Missing EncKeys', () => {
    it('should return if keys are missing', () => {
      const obj = new KeyGeneration({
        algorithm: 'aes256',
        inputEncoding: 'utf8',
        outputEncoding: 'hex',
        ivlength: 16,
      });
      const cipher2: string = obj.encrypt('asdasd');
      const deciphered2 = obj.decrypt(cipher2);
      expect(cipher2).toEqual('asdasd');
      expect(deciphered2).toEqual('asdasd');
    });
  });

  describe('check props', () => {
    it('should be able to deal with empty constructor', () => {
      const conf = <IKeyGeneratorOptions> {

      };
      const obj2 = new KeyGeneration(conf);
      expect(conf).toBeTruthy();
      expect(obj2).toBeTruthy();
    });
  });
});

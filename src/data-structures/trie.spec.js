import { expect } from 'chai';
import { TrieNode } from './trie.js';

describe('trie', () => {
  it('Should build a Trie from an array', () => {
    const testInput = [
      'this',
      'is',
      'a',
      'test',
      'of',
      'the',
      'emergency',
      'broadcast',
      'system',
      'analysis',
      'anaphylactic',
      'center',
      'of',
      'therapeutics',
    ];

    const trie = new TrieNode(testInput);

    expect(trie.contains('analysis')).to.eql(true);
    expect(trie.contains('anaphylactic')).to.eql(true);
    expect(trie.contains('turkey')).to.eql(false);
    expect(trie.getAllWords().sort()).to.eql(
      Array.from(new Set(testInput.sort())),
    );
  });

  it('Inserts new strings', () => {
    const trie = new TrieNode();

    trie.insert('banana');
    trie.insert('ball');
    trie.insert('box');
    trie.insert('bananas');
    trie.insert('test');

    expect(trie.getAllWords().sort()).to.eql([
      'ball',
      'banana',
      'bananas',
      'box',
      'test',
    ]);
  });

  it('Checks if words are contained within the trie', () => {
    const testInput = ['this', 'is', 'a', 'test'];
    const trie = new TrieNode(testInput);

    expect(trie.contains('this')).to.eql(true);
    expect(trie.contains('is')).to.eql(true);
    expect(trie.contains('a')).to.eql(true);
    expect(trie.contains('test')).to.eql(true);
    expect(trie.contains('thi')).to.eql(false);
  });
});

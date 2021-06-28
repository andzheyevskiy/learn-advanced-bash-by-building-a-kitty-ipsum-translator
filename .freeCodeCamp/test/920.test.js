const assert = require('assert');
const { getLastCommand, getFileContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    let lastCommand = await getLastCommand();
    const fileContents = await getFileContents('../kitty_info.txt');

    if (lastCommand[4] === '1') {
      lastCommand.splice(4, 1);
    }

    const correctCommand = lastCommand[0] === 'wc' && (lastCommand[1] === '-m' || lastCommand[1] === '--chars') && lastCommand[2].op === '<' && lastCommand[3] === 'kitty_ipsum_2.txt' && lastCommand[4].op === '>>' && lastCommand[5] === 'kitty_info.txt';

    assert(correctCommand && /1606/.test(fileContents));
  });
});

const ArgumentType = require('../../extension-support/argument-type')
const BlockType = require('../../extension-support/block-type')

class LocalStorage {
  constructor () {}

  getInfo () {
    return {
      id: 'localstorage',
      name: 'LocalStorage',

      blocks: [
        {
          opcode: 'readLocalStorage',

          blockType: BlockType.REPORTER,

          text: '[NAME]',
          arguments: {
            NAME: {
              type: ArgumentType.STRING,
              defaultValue: 'highscore'
            }
          }
        },
        {
          opcode: 'setLocalStorage',

          blockType: BlockType.COMMAND,

          text: 'set [NAME] to [VALUE]',
          arguments: {
            NAME: {
              type: ArgumentType.STRING,
              defaultValue: 'highscore'
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: '12'
            }
          }
        }
      ]
    }
  }

  readLocalStorage ({ NAME }) {
    return localStorage.getItem(NAME)
  }

  setLocalStorage ({ NAME, VALUE }) {
    return localStorage.setItem(NAME, VALUE)
  }
}

module.exports = LocalStorage

'use strict'

/**
 * Copyright 2016 Fabian Tollenaar <fabian@decipher.industries>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const getCheckSum = require('../index')
const exec = require('child_process').exec
const join = require('path').join
const chai = require('chai')
const expect = chai.expect

chai.use(require('chai-things'))

describe('getCheckSum', () => {

  it('Should return hex string 32', (done) => {
    const sentence = '$SDHDG,181.9,,,0.6,E'
    const checksum = getCheckSum(sentence)

    expect(checksum).to.be.a('string')
    expect(checksum).to.equal('32')
    done()
  })

  it('Should return number 50', (done) => {
    const sentence = '$SDHDG,181.9,,,0.6,E'
    const checksum = getCheckSum(sentence, false)

    expect(checksum).to.be.a('number')
    expect(checksum).to.equal(50)
    done()
  })

  it('CLI program should return sentence "$SDHDG,181.9,,,0.6,E*32"', (done) => {
    const sentence = '$SDHDG,181.9,,,0.6,E'
    const cmd = `'${join(__dirname, '../bin/nmea0183-checksum')}' '${sentence}'`

    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        return done(err)
      }

      expect(stdout).to.be.a('string')
      expect(stdout.trim()).to.equal('$SDHDG,181.9,,,0.6,E*32')
      done()
    })
  })

})
var fs = require('fs');
var path = require('path');

var test = require('tape');
var pixelmatch = require('pixelmatch');

var predictible = require('./predictible');
var byebyte = require('../index');

var width = 400;
var height = 198;

test('[shuffle] basic opts', function(assert) {
    var getRandomInt = predictible();
    var fileBuffer = fs.readFileSync(path.join(__dirname, './logo.jpg'));
    var expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'shuffle-basic-opts.jpg'));

    var out = byebyte.shuffle(fileBuffer, {min:.3, max:.5, getRandomInt});

    var diff = pixelmatch(expected, out, null, width, height, {threshold: 0.1});

    assert.equal(0, diff, 'there is no difference between a previous and now');

    assert.end();
});

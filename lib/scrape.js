'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var puppeteer = require('puppeteer');

var scrape = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var browser, page, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return puppeteer.launch({ headless: true });

                    case 2:
                        browser = _context.sent;
                        _context.next = 5;
                        return browser.newPage();

                    case 5:
                        page = _context.sent;
                        _context.next = 8;
                        return page.goto('https://yumba.ca/#/on-the-menu');

                    case 8:
                        _context.next = 10;
                        return page.evaluate(function () {
                            var data = []; // Create an empty array that will store our data
                            var elements = document.querySelectorAll('#entreeMeals .meal-name span'); // Select all Products

                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var element = _step.value;
                                    // Loop through each product
                                    var name = element.innerText;
                                    data.push(name); // Push an object with the data onto our array
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }

                            return data; // Return our data array
                        });

                    case 10:
                        result = _context.sent;


                        browser.close();
                        return _context.abrupt('return', result);

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function scrape() {
        return _ref.apply(this, arguments);
    };
}();

module.exports = scrape;
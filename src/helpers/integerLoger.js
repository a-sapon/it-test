const isNambLoger = function (value) {
    if(!Number.isInteger(value)) {
        console.log(` Value ${value} does NOT integer parameters! `);
        return false;
    };

    // console.log(` Good! Value ${value} is integer parameters! `);

    return true;
}

export default isNambLoger;
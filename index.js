function receivesAFunction(cb) {
    cb("Spy")
}

function returnsANamedFunction() {
    return function test() {
        console.log('TEST')
    }
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}
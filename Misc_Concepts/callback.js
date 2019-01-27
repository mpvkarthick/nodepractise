function testingCallBack(callbackFn){
    console.log("Inside Function, gonna invoke Call Back");
    callbackFn();

}

function testingCallBackWithParam(callbackFn){
    console.log("Inside Function, gonna invoke Call Back with param");
    callbackFn('Value');

}

var cb = new testingCallBack(function (){
    console.log('Callback Invoked');
});

testingCallBack(function (){
    console.log('Callback Invoked Again');
});

testingCallBackWithParam(function (param){
    console.log('Callback Invoked With Param '+param);
});

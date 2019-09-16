function foo(bar){
    if(bar === undefined){
        throw new Error('missing parameter');
    }
    return bar 
}

mandatory = () =>{
    throw new Error('missing parameter');
}

foo = (bar = mandatory()) => {
    return bar 
}

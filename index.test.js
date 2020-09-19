describe ('calculateTaxes tests', function(){
it ('should calculate the high bracket', function (){
    expect(calculateTaxes(50000)).toEqual(12500);
    expect (calculateTaxes(100000)).toEqual(25000);


});

it ('should calculate the low bracket', function (){
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(5000)).toEqual(750);
    
})

})

describe ('removeDupes test', function (){
    it ('should remove duplicates from an array', function(){
        expect(removeDupes([5, 2, 3, 5, 4, 4])).toEqual([5, 2, 3, 4]);
        expcect(removeDupes([1, 2, 3])).toBeInstanceOf(Array);
    })

    it ('should remove duplicates from a string', function(){
        expect(removeDupes('hello')).toEqual('helo');
        expect(removeDupes('hello')).toBeInstanceOf(String);
    })
})


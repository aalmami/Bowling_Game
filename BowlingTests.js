// JavaScript source code
/// AbdulQader Almami
/// Kent State University


var sr = 0;
test("roll gutter game", function () {
    
    countRolling(0, 20);
        equal(score(), 0, "gutter game score in roll equal to " +score())
    
})

test("can roll all 1s ", function () {
    /* roll(1)*/
    countRolling(1, 20);
        equal(score(), 20, "ones game score in roll " + score())

})

test("random roll pin between 0 and 10", function () {
    /* roll(1)*/
    var rondm = 0;
    var sum_rondm = 0;
    for (var i = 0; i < 20; i++) {
        rondm = Math.floor(Math.random() * 10) + 0;
        rollRondom(rondm)
        sum_rondm = sum_rondm + rondm;
        equal(scoreRondom(), sum_rondm, "roll number=" + i + " random=" + rondm + " sum rondom=" + sum_rondm + " score =" + scoreRondom())
    }
})


test(" roll a spare ", function () {
    /* roll(1)*/
    roll(5,0);
    roll(5, 1);
    roll(1,2);
    countRmeind(0, 17);
    equal(score(), 12, "spare 12 game score equal to 12 ")
})


test(" roll two spare ", function () {
    /* roll(1)*/
    
    roll(5,0);
    roll(5,1);
    roll(1,2);
    roll(9,3);
    roll(3,4);

    countRmeind(0, 15);
    equal(score(), 27, "spare 27 game score equal to 27 ")
})

test("rolling a strike ", function () {
    roll(0,0);
    roll(0,1);
    roll(10,2);
    roll(0,3);
    roll(3,4);
    roll(2,5);

    countRmeind(0,14);
    equal(score(), 20, "spare 12 game score equal to 20 ")
})


test("two strikes ", function () {
    roll(0, 0);
    roll(0, 1);
    roll(10, 2);
    roll(0, 3);
    roll(3, 4);
    roll(2, 5);
    roll(10, 6);
    roll(0, 7);
    roll(4, 8);
    roll(5, 9);

    countRmeind(0, 10);
    equal(score(), 48, " score Two strikes game score equal to 48 ")
})

test("a two strikes and a spare", function () {
    roll(10, 0);
    roll(0, 1);
    roll(10, 2);
    roll(0, 3);
    roll(4, 4);
    roll(6, 5);
    roll(1, 6);
    roll(2, 7);

    countRmeind(0, 12);
    equal(score(), 54, " score a strike and a spare game score equal to 45 ")
})


test("a two strikes and a spare and an extra roll #21", function () {
    roll(10, 0);
    roll(0, 1);
    roll(10, 2);
    roll(0, 3);
    roll(2, 4);
    roll(4, 5);
    
    for (var i = 6; i < 18; i++)
    {
        roll(0, i)
    }
    roll(6,18)
    roll(4,19)

    roll(8,20) ///
    equal(score(), 60, " score a strike and a spare game score equal to 45 ")
})

/*test("is number i Even? ", function () {
    var x = 4;
    equal(isEvn(x),1," the number x="+x+" is even")
    for (var i = 0; i < 20; i++){

        equal(isEvn(i),1," the number x="+i+" is even")
    }
})*/
var countRolling = function (pn, rol) {
    for (var i = 0; i < rol; i++) {
        roll(pn,i);
    }
}
var countRmeind = function (pn, rol) {
    var startposition = 0;
    startposition = 20 - rol;
    for (var i = startposition; i < 20; i++) {
        roll(pn,i);
    }
}


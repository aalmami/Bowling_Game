
// JavaScript source code
/// AbdulQader Almami
/// Kent State University

var rolls = [];
var frm = 0;
function game() {}
var roll = function (pins,trynum) {
        rolls[trynum] = pins;
        equal(rolls[trynum], pins, " read in Roll fun pins =" + pins + " rolls[trynum=" + trynum + "] = " + rolls[trynum])
}
var smrondm = 0;
var rollRondom = function (pins) {
    equal(pins, pins, " pins ="+pins+" sum ramndom="+smrondm)
    smrondm = smrondm + pins;
}
var scoreRondom = function () {
    return smrondm;
}



var isEvn = function (n) {    /// to identify even number so we can use them in spare & strike calculation
    var num = 0;
    num = n;
    if (num % 2 === 0) {
        return 1;
    }
    else
        return 0;
}


var score = function () {

    var results = 0;
    var spar = 0;
    var pouns = 0;
    var sum_pouns = 0;
    var sum_p = 0;
    var extra = 0;
    var rrrrr = 0;
    var spareExist = 0;
    var strikeExist = 0;
    var extraRoll = 0;
    for (var i = 0; i < 20; i++) {
        equal(rolls[i], rolls[i], "in Score function ---- Spare the rolss[i=" + i + "] = " + rolls[i])
        if (i < 17) {
            if (isEvn(i) == 1) {
                if (rolls[i] + rolls[i + 1] == 10 && rolls[i]!=10) {  //// for spare
                    pouns = rolls[i + 2];
                   
                    equal(rolls[i + 2], pouns, "rollssss[2(i)=" + i + "+2] = " + rolls[i + 2] + " pouns= " + pouns)
                    sum_pouns = sum_pouns + pouns;
                    spareExist = 1;
                }
                //if (isEvn(i) == 1) {
                if (rolls[i] == 10) {      //// for strike
                    if (rolls[i + 1] != 0)
                    {
                        equal(0, 0, "Error the all pins have been knockdown 2nd roll should be zero")
                    }  
                    rolls[i + 1] = 0; //// next roll is zero because (max score in 1 frame is 10)
                    extra = rolls[i + 2] + rolls[i + 3]
                   
                        equal(rolls[i + 2] + rolls[i + 3], extra, "pouns duh = "+pouns+" strike found at i " + i + " rolls[i]" + rolls[i] + " the pouns will be (extra)=" + extra)
                        sum_p = sum_p + extra;
                        strikeExist = 1
                       // spar = spar + sum_p; ///////######
                        spareExist=0;
                    }
               // }
            }
        }
        if (i==18 && rolls[i]==10)
        {
            extraRoll = rolls[20];
        }
        else if(i==18 && rolls[i]+rolls[i+1]==10){
            extraRoll = rolls[20];
        }
        equal(spar,spar," spar in i="+i+" is (before adding) "+spar)
        spar = spar + rolls[i];
        
    }
    spar = spar + extraRoll;
    equal(sum_p, sum_p, "sum_p= " + sum_p)
    equal(strikeExist, strikeExist, " strikeExist= " + strikeExist)
    equal(spareExist, spareExist, " spareExist= " + spareExist)
    equal(sum_pouns, sum_pouns, "sum_pouns= " + sum_pouns)
    if (spareExist == 1) {
        spar = spar + sum_pouns;
        equal(spar, spar, " ~~~~~~sum_pouns" + sum_pouns + "~~~~~~-spar=" + spar + "-~~~~ After adding Strike exist sum_ppouns,  spar in i=" + i + " is " + spar)
    }
    if (strikeExist == 1)
    {
        spar = spar + sum_p; //// try adding strike pouns
        equal(spar, spar, " -------sum_p="+sum_p+" -----spar="+spar+"---- After adding sprike exist sum_p,  spar in i=" + i + " is " + spar)
    }
    spareExist = 0;
    strikeExist = 0;
    return spar;
}



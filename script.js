/**
 * Created by h205p3 on 10/5/17.
 */


function sleep_in(weekday,vacation) {
    if(weekday===false || vacation===true) {
        return true;
    }else{
        return false;
    }
}



function monkey_trouble(a_smile, b_smile) {
    if (a_smile===true && b_smile===true){
        return true;
    }else if (a_smile===false && b_smile===false){
        return true;
    }else if (a_smile===true && b_smile===false){
        return false;
    }else if (a_smile===false && b_smile===true){
        return false;
    }
}


function string_times (str, int){
    var x="";
    for (var i=1;i<=int; i++){
        x+=str;
    }
    return x;
}


function front_times (str, int){
    var x="";
    var front=str.substring (0,3);
    for (var i=1;i<=int; i++){
        x+=front;
    }
    return x;
}


function string_bits (str){
    var x="";
    for (var i=0;i<str.length; i++){
        if (i%2===0){
            x+=str[i];
        }
    }
    return x;
}


function caughtSpeeding (int, boolean){
    if (boolean===true){
        if (int<=65){
            return 0;
        }else if (int>=66&&int<=85){
            return 1;
        }else if (int>=86){
            return 2;
        }
    }else if (boolean===false){
        if (int<=60){
            return 0;
        }else if (int>=61&&int<=80){
            return 1;
        }else if (int>=81){
            return 2;
        }
    }
}


function fizz_buzz(int){
    if (int%3!==0 && int%5!==0){
        return int + "!";
    }else if (int%3===0 && int%5!==0){
        return "Fizz";
    }else if (int%3!==0 && int%5===0){
        return "Buzz";
    }else if (int%3===0 && int%5===0){
        return "FizzBuzz";
    }
}



function teaParty (tea,candy){
    if (tea<5 || candy<5){
        return 0;
    }else if (tea/candy>=2 || candy/tea>=2){
        return 2;
    }else if (tea>=5 && candy>=5){
        return 1;
    }
}


function blackjack (a,b){
    if (a<=21 && b<=21){
        if (21-a<=21-b){
            return a;
        }else if (21-a>21-b){
            return b;
        }
    }else if (a>21 || b>21){
        if (a>21 && b>21){
            return 0;
        }else if (a>21 && b<=21){
            return b;
        }else if (a<=21 && b>21){
            return a;
        }
    }
}


function loneSum (a,b,c){
    if (a!==b && b!==c && c!==a){
        return a+b+c;
    }else if (a===b && b!==c && c!==a){
        return c;
    }else if (a!==b && b===c && c!==a){
        return a;
    }else if (a!==b && b!==c && c===a){
        return b;
    }else if (a===b && b===c && c===a){
        return 0;
    }
}

function tester() {

    document.getElementById("output").innerHTML = loneSum(1,1,3);
    document.getElementById("output1").innerHTML = loneSum(1,7,13);
    document.getElementById("output2").innerHTML = loneSum(2,22,22);
    document.getElementById("output3").innerHTML = loneSum(20,51,51);
}











// 1: Show the usage of ||, &&, ?? and !! with code examples

const num1 = 10, num2 = 20;

true || false;                // answer ->
false || false;               // answer ->
false || num1;                // answer ->
0 || num2;                    // answer ->
"text" || true                // answer ->
num1 > 0 || num2 < 0          // answer ->
false || num3;                // answer ->

true && true;                 // answer ->
true && false;                // answer ->
true && num1;                 // answer ->
num1 && num2;                 // answer ->
num2 && num1;                 // answer ->
"text" && (num1 + num2)       // answer ->
false && num3;                // answer ->
num1 > 0 && num2 < 0          // answer ->

undefined ?? 10;              // answer ->
null ?? 20;                   // answer ->
false ?? num1;                // answer ->
0 ?? num2;                    // answer ->

!!10;                         // answer ->
!!"";                         // answer ->
!!0;                          // answer ->
!!"Denys";                    // answer ->
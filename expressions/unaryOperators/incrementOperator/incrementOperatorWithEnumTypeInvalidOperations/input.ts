// ++ operator on enum type

enum ENUM { };
enum ENUM1 { A, B, "" };

// enum type var
var ResultIsNumber1 = ++ENUM;
var ResultIsNumber2 = ++ENUM1;

var ResultIsNumber3 = ENUM++;
var ResultIsNumber4 = ENUM1++;

// enum type expressions
var ResultIsNumber5 = ++(ENUM[1] + ENUM[2]);
var ResultIsNumber6 = (ENUM[1] + ENUM[2])++;

// miss assignment operator
++ENUM;
++ENUM1;

ENUM++;
ENUM1++;

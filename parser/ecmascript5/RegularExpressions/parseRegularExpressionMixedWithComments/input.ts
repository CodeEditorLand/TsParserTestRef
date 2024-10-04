var regex1 = / asdf /;
var regex2 = /**/ / asdf /;
var regex3 = /**/ 1; //**/ asdf /       // should be a comment line
var regex4 = /**/ / / ** /asdf /;
var regex5 = /**/ / asdf/ ** / /;

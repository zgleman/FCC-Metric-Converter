/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.slice(0, input.search(/[a-z]/i));
    
     if (result == '') {
       result = 1;
       return result;
     } else if (/\/[0-9.]*\//.test(result)){
       result = 'invalid number';
       return result;
     } else if(/\.[0-9/]*\./.test(result)){
       result = 'invalid number';
       return result;        
               }
    else 
       result = eval(result);
    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.slice(input.search(/[a-z]/i));
    var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    if (units.includes(result)){
    return result;
    } else {
      return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit == 'invalid unit') {
      return 'invalid unit'
    } else {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    var result = expect[input.indexOf(initUnit.toLowerCase())];
      
    return result;
    }};

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['gallons','liters','miles', 'kilometers','pounds','kilograms'];
    var result = expect[input.indexOf(unit.toLowerCase())];;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    if (initNum == 'invalid number' && initUnit == 'invalid unit'){
      return 'invalid number and unit';
    } else if (initNum == 'invalid number') {
      return 'invalid number';
    } else if (initUnit == 'invalid unit') {
      return 'invalid unit';
    } else {
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()){
        case 'gal':
        result = initNum*galToL;
        break;
        case 'l':
        result = initNum/galToL;
        break;
        case 'mi':
        result = initNum*miToKm;
        break;
        case 'km':
        result = initNum/miToKm;
        break;
        case 'lbs':
        result = initNum*lbsToKg;
        break;
        case 'kg':
        result = initNum/lbsToKg;
        break;
    }
        
    return result
    }
  
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (/invalid/.test(returnNum)) {
      return returnNum;
    } else {
    
    var result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toFixed(5) + ' ' + this.spellOutUnit(returnUnit);
    return result;
    }
  };
  
}

module.exports = ConvertHandler;

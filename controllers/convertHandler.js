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
    console.log(result);
     if (result == '') {
       result = 'invalid number';
       return result;
     } else if (/\/[0-9]*\/||\.[0-9]*\./.test(result)){
       result = 'invalid number';
       return result;
     } else 
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
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  
  const firstCap = (string) => {
    return string.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  };

  
  return tutorials.map(function (tutorials) {
    
    let newtut = tutorials.split(' ');
    
    for (let i = 0; i < newtut.length; i++) {
      newtut[i] = firstCap(newtut[i]);
    }
    
    return newtut.join(' ');
  });
}



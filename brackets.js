const config = [{ open: '(', close: ')' }, { open: '[', close: ']'}, { open: 'a', close: 'b'} ];
const str1 = '[a[()()][]b]';
const str2 = '[[(])]';

const brackets = (str, config) => {

  let result = { isValid: true };

  const openningConfigBrackets = config.map(item => item.open);
  const closingConfigBrackets = config.map(item => item.close);
  const openningBrackets = [];
  
  for (let i = 0; i < str.length; i++) {
    if (openningConfigBrackets.includes(str[i])) {
      openningBrackets.push(str[i]);
    } else if (closingConfigBrackets.includes(str[i])) {
      const lastOpenningBracket = openningBrackets.pop();
      if (openningConfigBrackets.indexOf(lastOpenningBracket) !== closingConfigBrackets.indexOf(str[i])) {
        result = { isValid: false, invalidAtIndex: i};
        break;
      }
    } else {
      result = { isValid: false, invalidAtIndex: i };
      break;
    }
  }

  return result;
};

console.log(brackets(str1, config));
console.log(brackets(str2, config));
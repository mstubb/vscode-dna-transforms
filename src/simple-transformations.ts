import Transformation from "./transformation";

function reverse_string (str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function complement_dna(dna){
    function matchBase(match, offset, string) {
      const base = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G', 'a': 't', 't': 'a', 'g': 'c', 'c': 'g',
                     'W':'W', 'S':'S', 'M':'K', 'K':'M', 'R':'Y', 'Y':'R', 'w':'w', 's':'s', 'm':'k', 'k':'m', 'r':'y', 'y':'r',
                     'B':'V', 'D':'H', 'H':'D', 'V':'B', 'N':'N', 'Z':'Z', 'b':'v', 'd':'h', 'h':'d', 'v':'b', 'n':'n', 'z':'z'};
      return `${base[match]}`;
    }
    return dna.replace(/[ATGCWSMKRYBDHVNZatgcwsmkrybdhvnz]/g, matchBase);
  };

export class UppercaseTransformer extends Transformation {
    getCommandName(): string {
        return "uppercase";
    }
    
    transform(input: string, cb: (output: string) => void): void {        
        cb(input.toUpperCase());
    }
}

export class LowercaseTransformer extends Transformation {
    getCommandName(): string {
        return "lowercase";
    }
    
    transform(input: string, cb: (output: string) => void): void {        
        cb(input.toLowerCase());
    }
}

export class CapitalcaseTransformer extends Transformation {
    getCommandName(): string {
        return "capitalcase";
    }
    
    transform(input: string, cb: (output: string) => void): void {
        let capitalizeNextChar = true;
        let newString = "";
        for (let i = 0; i < input.length; i++) {
            let char = input.charAt(i);

            if (capitalizeNextChar) {
                char = char.toUpperCase();
            }
            else {
                char = char.toLowerCase();
            }

            newString += char;

            capitalizeNextChar = (char == "\n" || char == "\t" || char == " ");
        }

        cb(newString);
    }
}

export class ReverseTransformer extends Transformation {
    getCommandName(): string {
        return "reverse";
    }
    
    transform(input: string, cb: (output: string) => void): void {
        cb(reverse_string(input));
    }
}


const rapid = (string) => {

            let vowels = {
            'a': true,
            'e': true,
            'i': true,
            'o': true,
            'u': true
        };

        let result = "";

        for (let i = 0; i < string.length; i++) {


        
        let letter = string[i].toLowerCase();
        if (!vowels[letter]) {
      result += string[i];
        }
        } ;
        return result.toUpperCase();
};
        

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));
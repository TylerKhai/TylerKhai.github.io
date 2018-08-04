/* STRING MANIPULATION/STRING METHODS:
    
    string methods help us work with strings.
    
    string.length
        returns the length of the string.
    
    string.indexOf(searchValue, starting position)
        returns the position of the first occurrence of a specified value in a string.
        
    string.lastIndexOf(searchValue, starting position)    
        returns the position of the last occurrence of a specified value in a string.
        
// NOTE: the starting position will default to 0 if not specified for both indexof and lastindexof.

    string.slice()
        extracts a part of a string and returns the extracted part in a new string.
       
        var str = "Hello world!";
        var res = str.slice(1, 5);
       // will return "ello"
       The first character has the position 1, the second has position 5, 
        
    string.replace()
        replaces a specified value with another value in a string:
        
            Ex:
                str = "Please visit Microsoft!";
                var n = str.replace("Microsoft", "W3Schools"); // will output "Please visit W3Schools"
                
                
    string.toUpperCase()
        converted to upper case
            we would use this when we want our string to be in uppercase.
            
            Ex:
                var text1 = "Hello World!";       // String
                var text2 = text1.toUpperCase();  // text2 is text1 converted to upper ("HELLO WORLD").
                
    string.concat()
        joins two or more strings.
            
            Ex:
                var text1 = "Hello";
                var text2 = "World";
                var text3 = text1.concat(" ", text2); //joins both text1 and text2 ("Hello World").
                
    string.charAt()
        returns the character at a specified index (position) in a string
        
            Ex:
                var str = "HELLO WORLD";
                str.charAt(0); // returns H <=(this returned the character at index position 0)
                
                
    string.split()
        we can convert a string into an array with this method.
        
            Ex:
                var txt = "a,b,c,d,e";   // String
                txt.split(",");          // Split on commas
                txt.split(" ");          // Split on spaces
                txt.split("|");          // Split on pipe
*/
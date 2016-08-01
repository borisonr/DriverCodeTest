# Driver Code Test

My approach to solving this code test was to split the task up into smaller tasks. First I tackled merging two strings (or DNA sequences). I thought through the comparison logically, and leveraging the fact that the overlap must be more than half a string's characters, I figured that there would be 4 cases for overlap: 
1) If the beginning half of one string is at the beginning of the second string
2) If the beginning half of one string is at another index of the second string
3) If the ending half of one string is at the beginning of the second string
4) If the ending half of one string is at another index of the second string
I then figured out how to treat each of those four cases.

Next, I tackled how I would apply that help function to an array of 50 strings and decided to go through pairing up strings and reducing the array until there was one long string element, that would be the final sequence.

Finally, I leveraged fs to parse through the text file and divide it up into an array of strings using regular expressions to get rid of white space and the fragments' names.

I tested each stage of this process using repl.it with simple strings such as "ATTG" and "TGAC".

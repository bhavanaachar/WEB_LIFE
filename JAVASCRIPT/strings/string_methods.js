//instance string methods
//1.at(): Returns caharecter at specified position at both positive/ negative index
// let text="Hello World"
// console.log(text.at(1));  //positive indexing
// console.log(text.at(-1));  //negative indexing


//2. charAt(): Returns the charecter at specified index. Works for only positive index
// let text="Hello World"
// console.log(text.charAt(1));
// console.log(text.charAt(-1)); //dosent work


//charCodeAt
// let text="Hello"
// console.log(text.charCodeAt(0));  //72
// console.log(text.charCodeAt(4));  //111


//3.concat(): concates one or more string and returns a new string
// let str1="Hello"
// let str2="World"
// let new_s=str1.concat(str2)
// console.log(new_s);


//4. includes(): checks if a string contains a specified substring or not
// const str="Hello world"
// console.log(str.includes("He"));  //true
// console.log(str.includes("wor")); //true
// console.log(str.includes("bye"));  //false


//5.indexOf(): returns the first occrance index of a substrin, or it returns -1  if not found
// const str="Hello world"
// console.log(str.indexOf("world"));  //6
// console.log(str.indexOf("o",6));  //5
// console.log(str.indexOf("bye")); //-1



//6. lastIndexOf(): returns the last occurance index of substring or it returns -1 if not found
// const strr="Hello world, Hello!"
// console.log(strr.lastIndexOf("Hello"));  //13
// console.log(strr.lastIndexOf("l"));  //16



//8. split():splits a string into an array based on specific cahrecter
//const str="Javascript is a wonderfull language"
// console.log(str.split(""));  //['H','e','l','l','o',' ','w','o','r','l','d']
// console.log(str.split(" "));  //['hello','World']
// console.log(str.split("  ")); //['Hello World']
// console.log(str.split("",3));

//9.subString(): extracts a part of string between 2 specified indexes
// const str="Hello World"
// console.log(str.substring(0,5)); //hello
// console.log(str.substring(6));   //world


//10. toUpperCase(): converts to upper case 
// const str="Hello"
// console.log(str.toUpperCase()); //HEllo


//11. toLowerCase(): converts to lower case
// console.log(str.toLowerCase()); //hello

//12. trim(): removes white spaces from both sides and not modify the original string
// const str="  Hello World  "
// console.log(str.length); //15
// console.log(str.trim()); //Hello World
// console.log(str.trim().length); //11
// console.log(str);


//13. trimStart(): removes space from starting
// const str="  hello world  "
// console.log(str.length) //15
// console.log(str.trimStart()); //hello world
// console.log(str.trim().length); //13


//14. trimEnd(): remove space at end
// console.log(str.trimEnd());  //  hello
// console.log(str.trimEnd().length); //13

//15.toString(): coverts a string object to primitive string
// const str=new String("Hello")
// console.log(str);                   // [String: 'Hello']
// console.log(typeof str);            //object
// console.log(str.toString());        //Hello
// console.log(typeof str.toString()); //string


//toLocalLowerCse():
//toLocalUpperCase():

//16.startsWith: always returns a boolean value
// let link="https://www.google.com"
// //console.log(link.startsWith("https"));
// console.log(link.endsWith("com"));

//17.repeat(): repeats the string specifies number of times
// const str="Hello "
// console.log(str.repeat(4));

//18.padStart(): 
// const str="somu"
// console.log(str.padStart(10,"a"));

//19.padEnd():
// console.log(str.padEnd(2,"*"));

//20.replace(): replaces specified substring with new substring, only affets first occurance of string
// let data="ramu ramu"
// console.log(data.replace("ra","so"));

//21. replaceAll(): replaces all the occurance of the specified substring with new substring
// let data1="ramu ramu"
// console.log(data1.replaceAll("ra","so"));

//let str="Javascript is wonderful language"
// console.log(str.slice(4));
// console.log(str.slice(-14));
// console.log(str.slice(11,22));
// console.log(str.slice(-2,-15));
// console.log(str.slice(-19));
 
// console.log(str.substring(-19)); //whole string
// console.log(str.substring(-2,-15)); //whole string
// console.log(str.substring(22,11)); // is wonderfu
// console.log(str.substring(4));

//2.without lrn
//let data="Javascript is wonderful language"
//let c=0
// for(let i=0;data[i]!==undefined;i++)
// {
//     c++
// }

// 3.with len
// let data="Javascript is wonderful language"
// let c=0
// for(let i=0;i<data.length;i++){
//     c++
// }
// console.log("Length",c);

//4.count of vowels
// let data = "Javascript is wonderful Language";
// let vow = 0;
// for (let i = 0; i < data.length; i++) {
//     if ("AEIOUaeiou".includes(data[i])) {
//         vow++;
//     }
// }
// console.log("Vowels count:", vow);

//5.convert first charecter of sentence to upper using methods
// let data = "javascript is wonderful Language";
// let result = data[0].toUpperCase()+data.slice(1)
// console.log(result);

//6. remove spaces from string
// let data = "    Javascript is wonderful Language    ";

// console.log(data.trim());

// console.log(data.replaceAll(" ", ""));






















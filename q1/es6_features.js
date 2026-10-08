/**
 * Create a script with a function named lowerCaseWords that takes a mixed array as input.
    The function will do the following.
        o return a promise that is resolved or rejected
        o filter the non-strings and lower case the remaining words
 */
const mixedArray = ['PIZZA', 10, true,25,false,'Wings']

const lowerCaseWords = (mixedArray)=>{
    let prmoise_words = new Promise((resolve,reject)=>{
        let isArray = Array.isArray(mixedArray)

        if(isArray){
            let filteredStrings = mixedArray.filter((currentElement)=>{
                return typeof currentElement === "string"
            })

            let loweredWords = filteredStrings.map((currentElement)=>{
                return currentElement.toLowerCase()
            })
            resolve(loweredWords)
        }else{
            reject("Error: Input must be an array")
        }
    })
    return prmoise_words;
    
}

lowerCaseWords(mixedArray)
    .then((result) => console.log(result))  
    .catch((error) => console.log(error))

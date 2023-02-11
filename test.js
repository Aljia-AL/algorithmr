var str ="you are welcome.";
console.log(str.length);

let i =0;
let nb_words = 0;
let nb_voyels = 0;
do {
    nb_words +=1;
    i+=1

} while(str[i]!==' ');

// question 3
for (i;i< str.length;i++){
    if(str[i]==='a' || str[i]==='e' ||  str[i]==='i' ||str[i]==='u'){
     nb_voyels+1
    }
}
console.log(nb_voyels);
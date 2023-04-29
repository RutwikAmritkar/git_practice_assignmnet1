function checkPrime(num){
factor=0;
 for(let Si=0;i<num;i++){
    if(num%i==0){
       factor++;
       }
    }
  if(factor==2){
     return true;
     }
     else{
        false;
     }
   }
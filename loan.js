   let creditLimit = 301;

   const loanOut = function(amount){
    return new Promise((resolve, reject) => {
        creditLimit <= 0  ? reject("Sorry no money")  :(creditLimit < amount ? (resolve(creditLimit), creditLimit = 0): (resolve(amount), creditLimit -= amount)  )

    });
   };

   console.log("Asking for $150, which should be okay ...");
   loanOut(150)
     .then((amountReceived) => {
       console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
     })
     .catch((err) => {
       console.log(`\t-> Error: ${err}!`);
     });           
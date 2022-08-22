const confirmHealth = (snack) => {
        let {protein , fiber , added_sugar} = snack;
        if (typeof protein !== "number" || typeof fiber !== 'number' || typeof added_sugar !== 'number') {
        return null    
       } else {
           if(added_sugar < 5){
             if(protein >= 5 || fiber >=5){
                 return true
             } else {
               return false
             }
         } else {
             return false
         }
       }
       

    
};

module.exports = confirmHealth;





// let resetButton=document.getElementById("resetItem-btn");

// resetButton.addEventListener('click',function(){
//     doneList.remove();
// })




let addItemsList = document.getElementById('addItem-btn');

addItemsList.addEventListener('click', function() {
    let toDoItems = document.getElementById("List4Items");
    let inputText = document.createElement('input');
    let buttonChange = document.createElement('button');
    let buttonDone = document.createElement('button');
    let buttonDelete = document.createElement('button');
    let liItems= document.createElement('li');
    
    let inputHolder = document.getElementById('addItem-input');// input 
    inputText.value=inputHolder.value;
    inputText.setAttribute('disabled',null);

    buttonChange.innerHTML='Ändra';
    buttonDone.innerHTML='Färdig';
    buttonDelete.innerHTML='Radera';
    
    let errorM=""; // variable för errormeddelanden
    let errorA= document.getElementById('errorSection');


    errorA.innerHTML=errorM;
    errorA.style.color='red';


    if(inputText.value === ""){
        errorM='Du kan ej skapa tomma sysslor!\n';
        errorA.innerHTML=errorM;
        
        
    }
    
    else if(inputText.value !== ""){
       
        liItems.append(inputText,buttonChange,buttonDone, buttonDelete,);
        toDoItems.append(liItems);
    }

      
        buttonChange.addEventListener("click", function(){

            if(buttonChange.innerHTML === "Ändra"){
                buttonChange.innerHTML = "Spara";
            }else {
                buttonChange.innerHTML === "Spara";
                buttonChange.innerHTML = "Ändra";
            }
        });
        
    


    
    
    
   
    

     
        
  
          
   



        buttonChange.addEventListener('click',function(){
           let changeInput= buttonChange.previousSibling;
           changeInput.toggleAttribute('disabled');


        
           

           let errorM=""; // variable för errormeddelanden
           let errorA= document.getElementById('errorSection');
       
       
           errorA.innerHTML=errorM;
           errorA.style.color='red';

           
           newText=buttonChange.previousSibling.value;

           if(inputText.value === ""){
                errorM='Hej Sibar\n';

                
             changeInput.toggleAttribute('disabled');
                
             buttonChange.innerHTML='Spara';
                
             errorA.innerHTML=errorM;
                
            
            } 
           
            else if(inputText.value !== ""){
               
             newText=buttonChange.previousSibling.value;
                
                
            
           
             
               

            

            }
            
          

        })

        
        
        


   

    
    
            buttonDelete.addEventListener('click',function(){
                buttonChange.remove();
                buttonDone.remove();
                inputText.remove();
                buttonDelete.remove();
                liItems.remove();
            })
            
  
            let doneList = document.getElementById('doneListItems');
            buttonDone.addEventListener('click',function(e){

             let errorM=""; 
             let errorA= document.getElementById('errorSection');

    
    
             errorA.innerHTML=errorM;
             errorA.style.color='red';
        
        
                if(inputText.value === ""|| e.target.previousSibling.innerHTML==='Spara'){
                    errorM='Ge mej vg snälla :)!\n';
                    errorA.innerHTML=errorM;
                    
            
            
                } 
                else if(inputText.value !== ""){

                    buttonDone= e.target.parentNode;
                
                    e.target.remove();
                    doneList.append(buttonDone);
                }
            
             
        
       
 
 
            })

    let resetButton=document.getElementById("resetItem-btn");

    resetButton.addEventListener('click',function(){
        buttonChange.remove();
        buttonDone.remove();
        inputText.remove();
        buttonDelete.remove();
        liItems.remove();
        document.getElementById('errorSection').innerHTML="";
    
        

       
        


            

    })

         

       
    

    

      


})
    
  




   

   




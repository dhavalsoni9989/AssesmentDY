const print = (n) => {
    for(i=1;i<=n;i++){
        if((i%5 == 0) && (i%7 == 0)){
            console.log("GroClinics");
            continue;
        }   
        if(i%5 == 0){
            console.log("Gro");
            continue;
        }
        if(i%7 == 0){
            console.log("Clinic");
            continue;
        }
        console.log(i);
    }
}

print(35);
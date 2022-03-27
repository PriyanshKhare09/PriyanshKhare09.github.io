var names= new Array();
names[0]='Yaakov';
names[1]='John';
names[2]='jen';
names[3]='Jason';
names[4]='Priyansh';
names[5]='frank';
names[6]='larry';
names[7]='jim';
names[8]='Laura';
names[9]='Paula';


for (var i=0; i<names.length;i++){
    if(names[i].charAt(0)==="j"||names[i].charAt(0)==="J"){
        console.log("Goodbye "+names[i]);
    }
    else{
        console.log("Hello "+names[i])
    }
}

function definitiva(){
    let p1=parseFloat(document.getElementById('p1').value);
    let p2=parseFloat(document.getElementById('p2').value);
    let p3=parseFloat(document.getElementById('p3').value);
    let pf=parseFloat(document.getElementById('pf').value);
    let tf=parseFloat(document.getElementById('tf').value);

    let definitiva=((((p1+p2+p3)/3)*0.55)+(pf*0.3)+(tf*0.15));
    document.writeln("Su definitiva es " + definitiva);
    //document.writeln(definitiva);
    if(definitiva>=3){
        document.writeln(", por cuanto usted APROBÓ algoritmos");
    }else{
        document.writeln(", por cuanto usted REPROBÓ algoritmos");
    }
}
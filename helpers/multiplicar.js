const fs = require('fs') ;
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 5) => {
    try{

        if(listar){
            // console.log('hello'.green); // outputs green text
            // console.log('i like cake and pies'.underline.red) // outputs red underlined text
            // console.log('inverse the color'.inverse); // inverses the color
            // console.log('OMG Rainbows!'.rainbow); // rainbow
            // console.log('Run the trap'.trap); // Drops the bass
            console.log('======================'.cyan);
            console.log('     Tabla del: ', base);
            console.log('======================'.cyan);
        }
    
        let salida, consola ='';
        const por = 'x'.inverse;
        const equ = '='.red;
        for (let i = 1 ; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${por} ${i} ${equ} ${base * i}\n`;
        }
        
        if(listar){
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`.underline.blue;
    }
    catch (err) {
        throw err
    }
   
}


module.exports = {
    crearArchivo
}
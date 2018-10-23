function promesa(){
    const numero = 40
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            numero > 5 
            ? resolve('Se resolvio')
            : reject('Se rechazo')
        },1000)
    });
}

promesa()
    .then(resp => console.log('Then',resp))
    .catch(err => console.log('Catch', err))
    
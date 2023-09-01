function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

asincrona(function (error, dato) {
    if( error ){
        console.error('Tenemos un error');
        console.error(error);

        // throw err; // en asincornas no va a funcionar

        return false;
    }

    console.log('Todo ha ido bien, mi data es ', dato);
})
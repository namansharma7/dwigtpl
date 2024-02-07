const { validationResult } = require('express-validator');

const userRegister = (req, res)=>{

    const errors = validationResult(req).mapped();
    console.log(errors);

    if( errors !== undefined) {

        const fields = Object.keys( errors );
        
        if( fields.length ){
            const fieldsError = {};

            for( let value of fields ) {

                fieldsError[value] = errors[value].msg;
            }

            return res.render('register',fieldsError);
        }
    }
    return res.render('register');
}

module.exports = [
    userRegister
];
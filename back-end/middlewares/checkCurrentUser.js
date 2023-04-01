const jwt = require('jsonwebtoken');

exports.checkCurrentUser = (req,res,next) => {
    // Access Authorization from header
    const Authorization = req.header('authorization');

    if (!Authorization) {
        req.user = null;
        next();

    } else {
        // get token from authorization
        const token = Authorization.replace('Beare ', '');

        // verify token
        try {
            const {userId} = jwt.verify(token, process.env.APP_SECRET);
            req.USER ={userId}
            next();
        } catch (error) {
            req.user = null;
            next();
        }
    }
}
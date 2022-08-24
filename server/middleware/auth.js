import jwt from "jsonwebtoken";

const secret = 'test';

// wants to like a post 
// click the like button => auth middleware(NEXT) = like controller ...

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; // google auth

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
            // sub is simply google's name for a specific id that differentiates every single google user
        }

        next();
        //pass the action in the second thing
    } catch (error) {
        console.log(error);
    }
};

export default auth;
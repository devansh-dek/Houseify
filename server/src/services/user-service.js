const { UserRepository } = require('../repository/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_KEY } = require('../config/serverConfig');
const userRepository = new UserRepository();

class UserService {

    async create(data) {
        try {
            const result = await userRepository.create(data);
            return result;
        }
        catch (error) {
            console.log("eror in service", error);
            throw error;
        }
    }
    async login(username, password) {
        try {
            const user = await userRepository.getByUsername(username);
            //compare password
            const isPasswordCorrect = this.checkPassword(password, user.password);
            if (!isPasswordCorrect) {
                console.log("Passwrod doesnt match");
                throw { wrror: 'Incorrect Password' }
            }
            const newJWT = this.createToken({ username });
            return newJWT

        }
        catch (error) {
            console.log("error in logic service ", error);
            throw error;
        }
    }
    async isAuthenticated(token) {
        try {
            const response = await this.verifyToken(token);
            if (!response) {
                throw { error: 'Invalid token' }
            }
            const user = await userRepository.getByUsername(response.username);

            return user;
        }
        catch (error) {
            console.log("Couldnt run authenitcation", error);
            throw error;
        }
    }
    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '5d' });
            return result;
        }
        catch (error) {
            console.log("Couldnt create token", error);
            throw error;
        }
    }
    checkPassword(userPassword, orginalPassword) {
        try {
            return bcrypt.compareSync(userPassword, orginalPassword);
        }
        catch (error) {
            console.log("Couldnt genearte the password");
            return error;
        }
    }
    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        }
        catch (error) {
            console.log("Could verify token in service - user", error);
            throw error;
        }
    }
}
module.exports = UserService
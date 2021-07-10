// ======================== //
// AUTH SERVICE             //
// ======================== //

// CONFIG
const API_KEY = process.env.APP_API_KEY
const API_SECRET = process.env.APP_API_SECRET

const checkAccess = (key, secret) => {
    if (API_KEY == key && API_SECRET == secret){
        return true
    }
    return false
}

module.exports = checkAccess
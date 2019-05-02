import jsonwebtoken from 'jsonwebtoken'
class JWT {
    async tokenByID(user) {
        console.log("I am here", user)
        let payload = {
            email: user.email,
            username: user.username
        }
      return jsonwebtoken.sign(payload, process.env.SECRET, {
        expiresIn: 86400 // expires in 24 hours
      });
    }
    async decodeToken(token) {
      return jsonwebtoken
        .verify(token, process.env.SECRET, async (err, decoded) => {
          if (decoded) return decoded;
        })
        .then(res => res)
        .catch(err => new Error("Token being deprecated, Access Denied!"));
    }
  }
  export default JWT;
import { User } from "@prisma/client";
import { prismaClient } from "../clients/db";
import JWT from 'jsonwebtoken'
import { JWTUser } from "../interfaces";

const JWT_SECRET="$idh@nt"

class JWTService {
    public static async generateTokenForUser(user: User){
        // const user = await prismaClient.user.findUnique({where: {id: userId}})
        const payload : JWTUser= {
            id: user?.id,
            email: user?.email
        }
        console.log('-------', payload)
        const token = JWT.sign(payload, JWT_SECRET)
        return token
    }

    public static decodeToken(token: string){
        return JWT.verify(token, JWT_SECRET) as JWTUser
    }
}

export default JWTService
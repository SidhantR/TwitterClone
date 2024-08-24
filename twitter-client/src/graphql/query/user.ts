import { graphql } from "../../gql";

const verifyUserGoogleTokenQuery = graphql(`#graphql
    query VerifyUserGoogleToken($token: String!) {
        verifyGoogleToken(token: $token)
    }
`);

export default verifyUserGoogleTokenQuery
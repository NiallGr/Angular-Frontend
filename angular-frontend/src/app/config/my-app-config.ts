// Configurations for OKTA *Should be populated with your own  OKTA credentials*
export default {

    oidc: {
        clientId: '0oaudwjxdZtfqyBbi5d6',
        issuer: 'https://dev-30126090.okta.com/oauth2/default',
        // Local 
        redirectUri:'http://localhost:4200/login/callback',
        // Hosted 
        // redirectUri:'http://dinner-2-door-frontend.s3-website.ca-central-1.amazonaws.com/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}

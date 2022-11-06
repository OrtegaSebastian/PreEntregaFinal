
const Config={
    fileSystem: {
        path: './DB'
    },
    mongoDB:{
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase:{
        "type": "service_account",
        "project_id": "pruebafinalecommercebackend64",
        "private_key_id": "ce96b48d2a7ae89a45c7bd96461fde445f168b74",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDR9a9fSyCs4Zqd\n9LaG4/JZn8HJl6GM94YN/Q5HvuAPcRKlTYPDKAT7NTywhzkgcR3N/7fbuEtF/jUC\nAKNOuwCAp2WIYvZTWlAPlxlBxYdJ3JnnFh0b3ElavXaPVYFBY1/F+oYP1vzK9hgK\nhJD5aFmAOZlNCUtPtMXSofJ3O3x0953BL8hPdnD3ZMqeDNE+D5ihknNE5KqmaeCn\nmvp1MTGaMzM3VCltHxTu2kSrnUrls1h93uokjsikoLrveG436ZfstnZ8IOXmc974\nITEmW/TK7/dXRDU98goBiyfzI2IVw7ObXEfRl5Ai8yBifKFJ2DPDL6RRFwqXS7MW\n7QfjRadpAgMBAAECgf97KHfhQ1sSDe7PDjyt411wNRtMpSVJCz4XS9k/PI0x1vdD\nql8f8C771r6YI2SJzdCDMFJ+ZXHCHNtQfA9PSgzWwAVO0L4CfCIlAvz4bRBuwyLZ\nP/TTODnPKv6Lasc8aTjvaNo6xbaDV4JtU6sL9v8zt+sKGpQ9V6IIFqGjpGvc2lIy\nbyCe+FW7Gy6LqzIHgxlukiRiJrOqT5u5qJTu9LJROduqbKxzbl9leJhGmAwyaY5h\nZ0anwY6ZNeHcT7Ha3Zuu0wYce6rgdAf2nc0IklyATgS8tumw7m3SuMoY7LHR9nlR\nT4FZJaoqtECCWd1I6XBCK+O4N9siV8fXcMEPw5kCgYEA+KAwf0zMy8Y1lGXF+zQL\niJOO2QUKEEkqszdZS3oXRmJ7gZHumm7BGycfBLdTBlEHtczdX+I1Lf2gylKXxAjO\n0OQ32VHZFhIWZ5Wthhv6tEuIffX/0xToRnWjZfteJ249b0J7Hk3K5WEboHM4gKnN\nLwjZgzNesuT31JCbWdCnjRUCgYEA2C/nt7oLLTs6ucv+imhG5dCi317kZvc5B020\nzPEXtVX3m6sqcxPIQay4tSmrLDfUHltEnKCgRjrb42v2Kgrq0pmD8alGMzq60U+7\nYuaDPhmv5LWKTrdeOrsZARGLnxpUCwsckBlGiUNYEHoHihbn+Vs//8ZPFgfLofmV\nI7LVzgUCgYB/0AH+f2HM5AGJX2SPBitjs8+8uz14L9T2ut550bMDaP9rFbVeyM8X\nAV6N0xyoY6GeEUpAz45dLUSqnhkNGyYO9zPK0avTD8taxvSku99/LlFlx8ATKG1c\nQ3+TnszBYofMmZWnd4B1uR01t+X1JtWnd1oye4cUWmcZbJmga4anHQKBgQCZOYrw\ni2o0itBas50bmED3zeJCk00rNXo0FP1abF6zZdTzfmO94H2FHthjfr8VvhQX1/RP\nVwGCBWGoVPLKZaZ90dTUyXc6BBw5ElvsAxluQGKMpab7l7evxMA6I6dkAxMiKKP7\n9g4qZ5LZSsRhOU79S5GWxYV0Rd4sVWtBPBWRyQKBgQDy5BF5RwdC/3vBb9t5fL4u\nVgL2F2A07GTeOB+0vh6zt5KCUo8VhvrYmTd78PO4Tm0pkJUgc0RbNPRw1bVSxshV\nQC+RTcMBhsMKuKTiv8+lbCD9ScznVXCINqQN0cZ9FkPr2NjWUIG5B/Rn847wy32q\nngIplUQrYpKg6R0ZIejydQ==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-hpyqc@pruebafinalecommercebackend64.iam.gserviceaccount.com",
        "client_id": "108589687974544722934",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hpyqc%40pruebafinalecommercebackend64.iam.gserviceaccount.com"
    },
}
export default Config
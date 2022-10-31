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
        "project_id": "ecommerce-backend-55d84",
        "private_key_id": "06cbfe7c15be0a49c502b470344cce02be57653c",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBfBdojYw9jSof\n80adp/BvWbiyX+iBYixRPSu9NjzMl7aypB4Y3KIgCvWO2VBv94mfFScXsyiDnP2x\nDnAThcNwtAUHBZfkIeAUentUae9PPSXJN8J5E+z+ecWHvxrJwAZtG8t52o+qSlOb\nD474nJwTLwDjCwm7AcM4pr64DkU6R1Z2Nsn7NpfwfpTDLVPLTwjUUhsnj++FtkX2\nsnggFG4cRcKn3CpGWO52qNnRXvh+OjLzYCCH5J3zRSpE0z1Kk924qDjVnD8xMav6\nhzh8OOQNkP3MnEpNNzeRaHk0Pvvhtd6/V5NFPxf2ZBcEdHOh2F+T/gbjVU2mqDCX\noqRLQPa9AgMBAAECggEAMjQtqr5XrjzrukCYiR3jYDEqoHYMUU4U67twlvb0za1s\nBWxaNt9A3gmZ78fpfDQBrJqDez3MfGIG3aM+Z4Jk1OCREWJdKB+2Efo5+AxIwQm/\nvTdPqbUG4HzeSTvICqNdx3/XyzVv46LHkMt3sICKatveYgsiKjjp29BAWmexhM47\nzP/pNUpKo0CuVRwKNA7F+OJ1rB9q0NITIoxdL4VDPNHR5voBbhP6d6kXPgvr5Duh\ne3LsMCz3x1R4C9xHFIFbr6fGhjesUKmyBRHuGchTeighrL31o+einqviVxBK0ZQF\nn9xJNByY8hXwENefcI+n4TtJItjjlAJZQ2foHo+djQKBgQD1n3/idtJK0Msk31iS\nSEG4vcaA3N3IxfcZqwjef/C8p89e9Hg9QRXnJ+dONtyC/54XHnNuxfmYDUcOaIvv\nnQjqyUq6jVXw+WqPnHe+ljj69Pw73p8h0cNHRWhNE0hk1jvCAQ7LbPICWPXSM6cS\nIuRXrkVNklHOV0YuNXuxqsnj8wKBgQDJqLKQyScbMfy6Zbb9GIMsWqUYsdzBmE5P\nlrdZSOhSgXBAXwMHlx4jFqPQebBFOlSLXlmeTkSROOxt5ubtE72PGBSVB5U6S71g\nGcZDmf+mlBQDz0DaHHDBGMNShKyN5MojbeFPkcJbeN2ImAWTHMg3RnVo/89T0cj+\nCVBHez1WjwKBgBlgcEMCibmHFuXpWWpLotambMLVjuh2Y5A4VoM+bq3fHJKv6VhS\nyCOIwOIY0vGJ3ViAIeb490+ZV5UKgiKwc8JmJ51cituJuVO7E7gSJzLuarz4xDIn\nTOipKByGeH1KkQP7Pf8Qc3SAom0kPwelqTfR3oEkM+WAqNSPXAdAIPm3AoGBAJVD\nbfCnQ2/ovxVFBn4uL6Gb8onl1O3jC0vz1gCba4LuViT/bqGmpGL6dgRwnh2PwFZs\nXs9DRZNsW+w5NgKTUwLgoxNwSm+c8i54xXzyNv2Yq3vqYylOVdNHvgONOp/IkipJ\nQbWAwSitvORHChFLA5OObodqmY6EQE5wnGBcgxlXAoGAeAm7EBbUzeNl8wEjArPd\nS7rg+jxwpsi6Enb/zMWRRL2KHQjzscUPSqUFlQom0Hs1xx25D33BotvkDwS86/Wc\nvozZ/Yd24fxcerQHknSlgRoMAWlFQchHzbl7QO8XnWNDqdK/ycHoC2syNSQ0v5i9\nHZ9Xa6PZDYp8h4DMaD03JRo=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-uf0wt@ecommerce-backend-55d84.iam.gserviceaccount.com",
        "client_id": "103239454425788065764",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uf0wt%40ecommerce-backend-55d84.iam.gserviceaccount.com"
    },
}
export default Config
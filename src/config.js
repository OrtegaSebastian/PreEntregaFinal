
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
        "private_key_id": "b011022c499f0e2cc65d53e222fe2f9fee6fb52c",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6DO6EOOycpNhg\nXwU557Y4bn0pwpDO5hTrbl9pzOQBRCfSn3Zgdpc1V0uUqtLUO4EMX20TFeDlrZtU\nfSQiy+EPrprPi3PjrMQsJh8+FNugkP0MXqJHCjliutV8+7r80CwKafAyVQoO0aFK\n41J0JEQTON8e8vE6R52uOSyccdzt6x1pE67/lPO5If7sr5fiNquF8jxaRb7rc26b\nO3FqkZMEkoD9Aq4anOCFP7LJqcYQvHCt14tv+1j2wR2RhqxwHmOMzdQ2wbPA86eE\njOWATYVE7y9GuTuoBXt+nHgKexn/7yMxv5E196t7zWzgJYrdUyfyBKdQATip72l2\nMdjD+3shAgMBAAECggEAAKjtv6QV0sFLz514cJuxVqZYVttbI67xrAz8KomtRyBQ\n+vQKR+OHWG7dfxgodJrqUAlduFa4al89e5M7YnfD/CR586UppIH4zl9HzDLLL0qb\nd5n8jAafetDVDJFSqq5wjuHJTvm5y2ga7zwsgOpI5xT+x1+Lb+5ebbEY42i3iFQL\nJlNrXYPuw/j4DlZZmW8+DKaOpY8//PQWlfEDRkw22BLkhYmNiqg327oaIPwbA/Rp\nhOHbBv2uW+6y+tiRanLbeC8x6LGTsnah7otoDsgYMGTjRPtJcUGF1bIRl2oVzQPf\ne7ARp2meECRBLJXliv0OMkEdDUB1kIuKiDiNXcyKQQKBgQD1J3xRdrmaP3gdZWi8\nKU6dBxKN0HudthG/kfV9c0oa9pnFP2UPFkSOf66vWo+LR1o4WEuL22MJVPE6xUVy\npIW8SLCStRGASrnOM6tS0Z6xQY8BK9w2SY5788H258TDDUDMZmMpZ2fGUZZgLNJZ\nl4cQFP/P7FLSYAkmo/PLFz3aVQKBgQDCSA/fr89K5ScoSeOQFvB06mGt644tOLlR\nwcLmh8AXzG0Qb/NQ9TDWu3QMRXui+vZhARC/gTbiqHpx+74+y0umXRSWT1khy8Rt\nT+WPSyZqub8FYH3WwnrvwsLQwalA7uEvoUTmqintBGtxln1kLt3g0oVcXxSJZ4Tk\nH5w+eylBnQKBgQCNxcPzKIG1XjcMaPTku86mqMxmDscuMXiaHMKnReD5LttGYp8C\n1pHXBqfy6KBSn3ThWM53luvzHZhTsHm1Dsf4VuEmNmhklNJXGTJetrLbN1qIBuFW\n07r+m7z0GJyFYEi07BE0hIRTACPCgqky/poxBrPZfoV2++rO2cnHDS3L8QKBgBd5\nu6lMxiCHpf6hRwUPMIkAFUN9thVSyFnPruxKNPTrN7aHwH/k0Lzxs6kT8EeWSZUZ\nGtv5Ehe7QehqAef2irKUhrtO5TdHNvn6cIOrEf5NaX6N1UbRAyfbgczVyczV0JH/\ny6KPpzdDlHQKOiaT3y2eYozx1DpyLsWd6DRIj4ilAoGBAMocFTFty8Q7GkReldCS\nosyS1IqPArc523jnPFm5HA19ZQKIVqCinnJcNFL5cgsrnzxcZ1vzWVHsgHxt4aTi\n4Gc/BjGs1mDUrWByz/0gpaEwY3L3WBGDtlWXacTXllKzoQhiRjWksNn43Uj22is5\nHxsTxkBUbzAVxI9I7xJER8/n\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-hpyqc@pruebafinalecommercebackend64.iam.gserviceaccount.com",
        "client_id": "108589687974544722934",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hpyqc%40pruebafinalecommercebackend64.iam.gserviceaccount.com"
    },
}
export default Config
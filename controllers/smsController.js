import dotenv from "dotenv";
dotenv.config();

export const sendSms = async (req, res) => {
    // send sms using africa's talking
    const body = `username=${encodeURIComponent(process.env.AT_USERNAME)}&` +
                 `to=${encodeURIComponent("+255653728418")}&` +
                 `message=${encodeURIComponent("Hello World!")}&` +
                 `from=${encodeURIComponent(process.env.AT_FROM)}`;

    await fetch(
        process.env.AT_BASE_URL + "/messaging",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
                "apiKey": process.env.AT_API_KEY,
            },
            body: body
        }
    ).then((res) => res.json())
        .catch((err) => {
            console.log(err);
            return err;
        });

    return res.status(200).json({
        status: "success",
        message: "SMS sent successfully"
    });
}

// import AfricasTalking from 'africastalking';
// const africastalking = AfricasTalking({
//   apiKey: process.env.AT_API_KEY, 
//   username:'sandbox'});


// export async function sendSms() {
//     try {
//   const result = await africastalking.SMS.send({
//     to: '+255653728418', 
//     message: 'Hey AT Ninja! Wassup...',
//     from: process.env.AT_FROM
//   });
//   console.log(result.response.status + " was returned");
// } catch(ex) {
//   console.error(ex);
// } 
// };
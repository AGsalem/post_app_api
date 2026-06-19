import {rateLimit} from'express-rate-limit'
const limit =rateLimit({
    windowMs:5*60*1000,
    limit:10,
    message:{error:"too many request please try again after 5 minute "}
})
export default limit
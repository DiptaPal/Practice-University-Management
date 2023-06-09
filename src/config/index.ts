import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT || 5000,
  mongo_url: process.env.MONGO_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
}

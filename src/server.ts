import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.mongo_url as string)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}
main()

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`)
})

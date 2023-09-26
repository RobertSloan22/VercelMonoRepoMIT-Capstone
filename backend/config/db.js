
// database connection file to MongoDB
import { mongoose } from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://rstechsolutionsmeco:mitcapstone2023@cluster0.5qgxggh.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`mongodb connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.underline.bold)
    process.exit(1)
  }
}

export default connectDB
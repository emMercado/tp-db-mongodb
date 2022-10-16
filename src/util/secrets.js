import { connect } from 'mongoose'

(async () => {
    try {
        const db = await connect(`mongodb://localhost:27017/persons`)
        console.log("conected", db.connection.name)
    } catch (error) {
        console.error("error")
    }
})();
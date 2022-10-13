


const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = 'FinalProyect';
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.55l2k.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};


export default { dbUri, mongooseOptions }

/* module.exports = {
    dbUri, mongooseOptions
} */
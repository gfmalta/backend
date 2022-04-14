import * as mongoose from 'mongoose'

const TasklistSchema = new mongoose.Schema({
    name: String,
    list: [{
        type: mongoose.Schema.Types.Mixed,
        ref: 'List'
    }],
})

const Tasklist = mongoose.model('Tasklist', TasklistSchema);
export default Tasklist;
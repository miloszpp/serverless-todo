import { config } from '../common/config';
import { firebaseSecret } from '../common/config-secret';
import { AddTaskCommand, Task } from '../common/model';

var request = require('request');

module.exports = function (context, callback) {
    const tasksUrl = `${config.firebase.databaseURL}/tasks.json?auth=${firebaseSecret}`;
    const command = <AddTaskCommand>context.body;
    console.log(`Received command: ${JSON.stringify(command)}`);

    const task: Task = {
        content: command.content,
        created: Date.now()
    };

    const requestOptions = {
        method: 'POST',
        url: tasksUrl,
        json: task
    };

    request(requestOptions, () => callback(null, "Finished"));
}
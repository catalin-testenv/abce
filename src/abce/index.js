
import _ from 'lodash';

export default class Abce {
    constructor(arg) {
        console.log('Abce', _.assign({}, arg, {y: true}));
        if ('production' !== process.env.NODE_ENV) {
            console.log('not production');
        }
    }
}
console.log('a')

import { Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';

var o = Observable.create( (c) => {
    console.log(c)
})
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import 'materialize-css/dist/css/materialize.min.css';

Template.body.helpers({
    notes: [
        {text: 'My note 1'},
        {text: 'My note 2'},
        {text: 'My note 3'}
    ]
})


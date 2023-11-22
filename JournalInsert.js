import {View, Text} from 'react-native'

export default class JournalInsert extends Component{

    constructor(props){
        super(props);
        this.state={Type:'',Date:'', Mood:'', Title:'', Message:''};
    }
}
import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input onChange={this.onUpdateSearch}
                   type="text"
                   className="form-control search-input"
                   value={this.state.term}
                   placeholder="Найти сотрудника"/>
        )
    }
}

export default SearchPanel;
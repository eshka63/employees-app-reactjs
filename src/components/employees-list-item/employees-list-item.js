import {Component} from 'react';
import './employees-list-item.css';


class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: ''
        }

    }

    onAddValue = (e) => {
        this.setState({
            salary: e.target.value
        })
        // this.prop.getDataNewSalary(this.state.salary);
    }


    render() {
        const {name, salary, onDelete, onToggleProp, active, rise} = this.props;
        // console.log(salary);
        const {newSalary} = this.state;
        let className = 'list-group-item d-flex justify-content-between';
        if (active) {
            className += ' increase';
        }
        if (rise) {
            className += ' like';
        }

        return (
            <li className={className} id="liList">
            <span onClick={onToggleProp}
                  className="list-group-item-label"
                  data-toggle="rise">
                {name}</span>
                <input type="text"
                       className="list-group-item-input"
                       onChange={this.onAddValue}
                       value={newSalary}
                       defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" data-toggle="active" onClick={onToggleProp}
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button onClick={onDelete} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

    // onrise = () => {
    //     this.setState(({rise}) => ({ //
    //         rise: !rise
    //     }))
    // }


}

export default EmployeesListItem;
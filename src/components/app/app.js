import {Component} from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'John', salary: 500, active: true, rise: false},
                {id: 2, name: 'Alex', salary: 1250, active: true, rise: false},
                {id: 3, name: 'Elyor', salary: 22250, active: false, rise: false}
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id) // совпод по id элем убери из this.state.data
            }
        })
    }

    addItem = (name, salary) => {
        const newData = {
            name,
            salary,
            active: false,
            like: false,
            rise: false,
            id: this.maxId++
        };
        this.setState(({data}) => {
            const newArr = [...data, newData];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        console.log(id);
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]} // из сфор нов массива меняет знач на true/false
                }
                return item;
            })
        }))
    }

    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'active':
                return items.filter(item => item.active);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    // getDataNewSalary = (id) => {
    //     console.log(id);
    //     // console.log(prop);
    //
    // }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.active).length;
        const visibleData = this.filterPost(this.searchItem(data, term), filter);
        return (
            <div className="app">
                <AppInfo name="Smart Pay"
                         increased={increased}
                         employees={employees}/>
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                        term={this.state.term}/>
                    <AppFilter
                        onFilterSelect={this.onFilterSelect}
                        filter={filter}/>
                </div>
                <EmployeesList
                    // getDataNewSalary={this.getDataNewSalary}
                    onToggleProp={this.onToggleProp}
                    onDelete={this.deleteItem}
                    data={visibleData}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
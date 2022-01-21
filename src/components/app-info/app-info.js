import "./app-info.css";

const AppInfo = ({name, increased, employees}) => {
    return (
        <div className="app-info">
            <h3>Учет сотрудников в компании {name}</h3>
            <h4>Общее число сотрудников: {employees}</h4>
            <h5>Премию получат: {increased}</h5>
        </div>
    )
}

export default AppInfo;
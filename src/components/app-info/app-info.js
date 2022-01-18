import "./app-info.css";

const AppInfo = ({name}) => {
    return (
        <div className="app-info">
            <h3>Учет сотрудников в компании {name}</h3>
            <h4>Общее число сотрудников:</h4>
            <h5>Премию получат:</h5>
        </div>
    )
}

export default AppInfo;
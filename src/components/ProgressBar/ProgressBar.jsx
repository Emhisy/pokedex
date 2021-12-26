import './ProgressBar.css'

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const fillerStyles = {
        width: `${completed}%`,
        backgroundColor: `${bgcolor}`,
    }

    return (
        <div id={"container-styles"}>
            <div style={fillerStyles} id={"filler-styles"}/>
        </div>
    );
};

export default ProgressBar;
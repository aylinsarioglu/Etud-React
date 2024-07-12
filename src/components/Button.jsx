const Button = (props) => {
    return <button style = {{
        background:props.color,
    }}  className="btn"> {props.title}</button> ;
};

export default Button;

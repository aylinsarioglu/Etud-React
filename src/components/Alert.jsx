import bell from "../images/indir.png";


const Alert = (props) => {
    return ( 
    <div>
       <h1 className={`alert ${props.theme}`} >

          {/* icon */}
          {/* <img src={bell} width={40} /> */}

        {props.icon && <img src={bell} width={40} /> }
      
      
       { props.theme === "uyarı" 
        ? "Bu bir uyarı mesajıdır"
        : props.theme === "hata" 
        ? "Üzgünüz bir hata oluştu"
        : props.theme === "bilgi"
        ? "İşlem başarıyla gerçekleşti"
        : "tema bilgisi verilmeli" }
       </h1>
    </div>
    );
};

export default Alert;
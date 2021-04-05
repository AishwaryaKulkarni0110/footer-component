import React from 'react'
import styles from './styles.module.css'
import getUserLocale from 'get-user-locale';
const userLocale = getUserLocale();
const finalLocale = userLocale.split('-');
export const Footer = (props) => {
  return <div style={{ position: props.position ,bottom:0}} className={props.theme}>


    {props.copyright.map((item, i) => {
      if (item.locale === finalLocale[0]) {

        return (<p style={{ float: "left", padding: "7px", marginLeft: "10px", fontSize: "15px", fontFamily: "Daimler CS" }}>&copy;{new Date().getFullYear()} {item.data}</p>)
      }
    }
    )}
    <p style={{ float: "right", padding: "3px" }}>


      {props.contact.map(({ type, src, link }) =>
        <a href={link}>

          <img className={'svg_' + props.theme} src={src} style={{ width: "20px", marginRight: "10px" }} />


        </a>


      )}

    </p>
    <p style={{ float: "right", padding: "7px", marginRight: "10px", fontSize: "15px", fontFamily: "Daimler CS" }}> Contact: </p>


  </div>
}

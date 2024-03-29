import React from 'react'
import linkedlin from "../../portadas/linkedlin.png"
import git from "../../portadas/github.png"
import { Link } from "react-router-dom";
import stylos from "../About/About.module.css"

function About() {
    return (
        <div>
            <div className={stylos.body}>
                <div className={stylos.conteiner}>
                    <Link to="/home">
                        <button className={stylos.link}>
                            HOME
                        </button>
                        {/* <p className={stylos.link}>HOME</p> */}
                    </Link>
                </div>

                <div className={stylos.datos}>
                    <div className={stylos.name}>
                        <p>Kevin Jeremias Barrios</p>
                    </div>
                    <div className={stylos.subtitle}>
                        <p>Full Stack Developer en processo</p>
                        <p> | HTML | CSS | Javascript | React | Redux | Node | Express | SQL</p>
                    </div>

                </div>
                <div className={stylos.ks}>
                    <a href="https://www.linkedin.com/in/kevinjbarrios/" target="_blank" >
                        <img className={stylos.ksli}  target="_blank" src={linkedlin} alt="linkedin" />
                    </a>
                    <a href='https://github.com/Jerebrrs' target="_blank" >
                        <img className={stylos.ksgh} target="_blank" src={git} alt="git" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default About
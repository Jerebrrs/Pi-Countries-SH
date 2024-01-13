import React from 'react'
import linkedlin from "../../portadas/linkedlin.png"
import git from "../../portadas/github.png"
import { Link } from "react-router-dom";
import stylos from "../About/About.module.css"

function About() {
    return (
        <div>
            <div className={stylos.conteiner}>


                <div className={stylos.lin}>
                    <button>
                        <Link to="/home">
                            <p className={stylos.link}>HOME</p>
                        </Link>
                    </button>
                </div>
                <div className={stylos.datos}>
                    <div className={stylos.name}>
                        <p>Kevin Jeremias Barrios</p>
                    </div>
                    <div className={stylos.subtitle}>
                        <p>Full Stack Developer en processo</p>
                    </div>

                </div>
                <div className={stylos.ks}>
                    <a href="https://www.linkedin.com/in/kevinjbarrios/">
                        <img className={stylos.ksli} src={linkedlin} alt="linkedin" />
                    </a>
                    <a href='https://github.com/Jerebrrs'>
                        <img className={stylos.ksgh} src={git} alt="git" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default About
import React from 'react'
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import Header from '../Component/Header';
import AboutBody from '../Component/About/AboutBody';
const About = () => {

    return (
        <div>
            <Header/>
            <AboutBody/>
        </div>
    )
}

export default About
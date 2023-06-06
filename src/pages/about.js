import * as React from 'react'
import {imageform} from '../components/layout.module.css';

const   AboutPage = () => {
  return (
    <main className = {imageform}>
        <div className = "container">
            <h2>Discuss your next project</h2>
            <p>Pick our brains about your project or idea, fill out this form and we will be in touch: </p>
            <br></br>
        </div>
    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage

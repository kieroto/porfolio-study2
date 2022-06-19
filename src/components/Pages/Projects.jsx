import { useState } from 'react'

import Header from './../Layouts/Header';
import Footer from './../Layouts/Footer';

function Projects() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />

            <main id="main-content">
                <h1>Welcome to the Projects!</h1>
                <p>You can do this, I believe in you.</p>
            </main>
            
            <Footer />
        </>
    );
}

export default Projects;
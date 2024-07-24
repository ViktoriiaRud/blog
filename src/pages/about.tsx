import * as React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo.js";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <img src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"} alt={'sea'}/>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />
export default AboutPage;
import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <img src={"https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={'sea'}/>
        </Layout>
    )
}


export default AboutPage;
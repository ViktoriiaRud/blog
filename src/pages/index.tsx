import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo.js";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home">
            <img src={"https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={'sea'}/>
        </Layout>
    )
}

export const Head = () => <Seo title="Blog" />

export default IndexPage
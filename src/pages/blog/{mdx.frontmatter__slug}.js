import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
    const { mdx } = data;
    const image = getImage(mdx.frontmatter.hero_image);

    return (
        <>
            <Layout>
                <h2>{mdx.frontmatter.dataAboutClient}</h2>
                {image && <GatsbyImage image={image} alt={mdx.frontmatter.hero_image_alt} />}
                {children}
            </Layout>
        </>
    );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export const query = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                dataAboutClient
                hero_image {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
                hero_image_alt
            }
            body
        }
    }
`;

export default BlogPost;
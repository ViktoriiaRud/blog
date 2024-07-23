import React from 'react';
import {graphql} from 'gatsby';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {getImage, GatsbyImage} from "gatsby-plugin-image";

import Container from "../../components/atoms/container";
import {StyledTitle, StyledWrapperTitleButton, WrapperBanner, StyledWrapperTitle} from "./blog-post.styles";

const BlogPost = ({data, children}) => {
    const {mdx} = data;
    const image = getImage(mdx.frontmatter.hero_image);

    return (
        <>
            <Layout>
                <WrapperBanner>
                    <Container>
                        <StyledWrapperTitleButton>
                            <StyledWrapperTitle>
                                <h2>{mdx.frontmatter.titleTechnology}</h2>
                                <StyledTitle>
                                    <h1>{mdx.frontmatter.subTitleTechnology}</h1>
                                </StyledTitle>
                                <p>{mdx.frontmatter.descriptionTitleTechnology}</p>
                            </StyledWrapperTitle>
                        </StyledWrapperTitleButton>
                    </Container>
                </WrapperBanner>


                {image && <GatsbyImage image={image} alt={mdx.frontmatter.hero_image_alt}/>}
                {children}
            </Layout>
        </>
    );
};

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title}/>;

export const query = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                titleTechnology
                subTitleTechnology
                descriptionTitleTechnology
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
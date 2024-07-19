import * as React from 'react';
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import Container from "../../components/atoms/container";
import NavigateTopic from "../../components/molecules/navigate-topic";
import Seo from "../../components/seo";
import { useState } from "react";
import Button from "../../components/atoms/button";

import { dataNavigateTopic, dataNavigateTopicCard } from "../../data/data-third-page-see-all-case-studiess";
import {StyledWrapperButton} from "../../components/atoms/button/button.styles";

import {
    Card,
    CardContainerTopicCard,
    CardFace,
    StyledButtonWidth,
    StyledContentBack,
    StyledContentFront,
    StyledContentText,
    StyledImgTopicCard,
    StyledWrapperIconFront,
    StyledWrapperIconTitle,
    StyledWrapperTopicCard,
    WrapperNavigateTopicCard
} from "../../components/organisms/navigate-topic-card/navigate-topic-card.styles";

const BlogPage = ({ data }) => {
    const [isShown, setIsShown] = useState(null);
    const blogPosts = data.allMdx.nodes;

    return (
        <Layout>
            <WrapperNavigateTopicCard>
                <Container>
                    <NavigateTopic {...dataNavigateTopic} />
                    <StyledWrapperTopicCard id={'blog-navigate'}>
                        <CardContainerTopicCard>
                            {dataNavigateTopicCard.navigateTopicCard.cards
                                ? dataNavigateTopicCard.navigateTopicCard.cards.map((card, index) => {
                                    const blogPost = blogPosts[index]; // Map each card to a specific blog post
                                    return (
                                        <Card
                                            key={card.title}
                                            onMouseEnter={() => setIsShown(index)}
                                            onMouseLeave={() => setIsShown(null)}
                                        >
                                            {isShown !== index && (
                                                <CardFace>
                                                    <StyledContentFront>
                                                        <StyledWrapperIconTitle>
                                                            <StyledContentText>
                                                                <h2>{blogPost.frontmatter.title}</h2>
                                                            </StyledContentText>
                                                            <StyledWrapperIconFront/>
                                                        </StyledWrapperIconTitle>
                                                        <h3>{card.description}</h3>
                                                    </StyledContentFront>
                                                </CardFace>
                                            )}
                                            {isShown === index && (
                                                <CardFace>
                                                    <StyledContentBack>
                                                        <StyledImgTopicCard>
                                                            <img src={card.srcImage} alt={card.altText} />
                                                        </StyledImgTopicCard>
                                                        <StyledButtonWidth>
                                                            <StyledWrapperButton>
                                                                {blogPost && (
                                                                    <article key={blogPost.id}>
                                                                        <Link to={`/blog/${blogPost.frontmatter.slug}`}>
                                                                            <Button variant="black" size="sm" to={`/blog/${blogPost.frontmatter.slug}`}>
                                                                                {card.titleButton}
                                                                            </Button>
                                                                        </Link>
                                                                    </article>
                                                                )}
                                                            </StyledWrapperButton>
                                                        </StyledButtonWidth>
                                                    </StyledContentBack>
                                                </CardFace>
                                            )}
                                        </Card>
                                    );
                                })
                                : null}
                        </CardContainerTopicCard>
                    </StyledWrapperTopicCard>
                </Container>
            </WrapperNavigateTopicCard>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    slug
                }
                excerpt
            }
        }
    }
`;

export const Head = () => <Seo title="My Blog Posts" />;
export default BlogPage;
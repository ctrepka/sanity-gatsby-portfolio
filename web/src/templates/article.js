import { graphql } from "gatsby";
import React from "react";
import Article from "../components/article";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    sampleProject: sanityArticle(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
    }
  }
`;

const ArticleTemplate = props => {
  const { data, errors } = props;
  const article = data && data.sampleProject;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {article && <SEO title={article.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {article && <Article {...article} />}
    </Layout>
  );
};

export default ArticleTemplate;

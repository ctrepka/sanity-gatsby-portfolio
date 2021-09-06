import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ArticlePreviewGrid from '../components/article-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query ArticlesQuery {
  articles: allSanityArticle(
    limit: 12
    sort: {
      fields: [publishedAt], order:DESC
    }
    filter:{ slug:{ current: {ne: null}}, publishedAt: {ne: null}}
  ) {
    edges {
      node {
        id
        publishedAt
        mainImage {
          asset {
            _id
          }
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
        categories {
          title
        }
      }
    }
  }
}
`

const ArticlesPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const articleNodes =
    data && data.articles && mapEdgesToNodes(data.articles).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Blog Articles' />
      <Container>
        <h1 className={responsiveTitle1}>Blog Articles</h1>
        {articleNodes && articleNodes.length > 0 && <ArticlePreviewGrid nodes={articleNodes} />}
      </Container>
    </Layout>
  )
}

export default ArticlesPage

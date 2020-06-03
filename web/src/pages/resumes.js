import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query resumePageQuery {
    projects: allSanitySampleResume(
      limit: 12
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const ResumesPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.resumes && mapEdgesToNodes(data.resumes).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Projects' />
      <Container>
        <h1 className={responsiveTitle1}>Resumes</h1>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default ResumesPage

import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Resume from '../components/resume'

export const query = graphql`
query {
    sanityResume: sanityResume(slug: {current: {eq: "resume"}}) {
      title
      slug {
        _key
        _type
        current
      }
      _rawLeftColumn
      _rawRightColumn
    }
  }   
`

const ResumePage = props => {
    const { data, errors } = props
    const resume = data && data.sanityResume
    console.log(data)
    return (
        <Layout>
            {errors && <SEO title='GraphQL Error' />}
            {resume && <SEO title={resume.title || 'Untitled'} />}

            {errors && (
                <Container>
                    <GraphQLErrorList errors={errors} />
                </Container>
            )}
            {resume && <Resume {...resume} />}
        </Layout>
    )
}

export default ResumePage

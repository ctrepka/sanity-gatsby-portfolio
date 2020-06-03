import React from 'react'
import {Link} from 'gatsby'
import BlockContent from './block-content'
import Container from './container'

import styles from './resume.module.css'

function Resume (props) {
  const {title, _rawLeftColumn, _rawRightColumn} = props
  return (
    <article className={[styles.mainContent]}>
      <Container >
          <div className={styles.grid}>
            <div className={styles.leftCol}>
                <h1 className={styles.title}>Christopher Repka</h1>
                { _rawLeftColumn&& <BlockContent blocks={ _rawLeftColumn || [] } />}
            </div>
            <div className={styles.rightCol}>
                { _rawRightColumn && <BlockContent blocks={ _rawRightColumn || [] } />}</div>
            </div>
      </Container>
    </article>
  )
}

export default Resume

import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import styles from './article-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function ArticlePreview (props) {
  return (
    <Link className={styles.root} to={`/article/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
        <div className={styles.dateRange}>
          <span>Published {props.publishedAt ? new Date(props.publishedAt).toLocaleDateString() : 'null'}</span>
        </div>
      </div>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
          <div>
            {props.categories ? props.categories.map( (c,i) => {
              return <span className={styles.category}>{c.title}</span>
            }) : null }
          </div>
        </div>
      )}
    </Link>
  )
}

export default ArticlePreview

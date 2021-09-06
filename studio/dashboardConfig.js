export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed68cc9015ea1775f2b734c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8kcnhv87',
                  apiId: '8182bfe6-25f8-4d8c-bd84-9def8547236a'
                },
                {
                  buildHookId: '5ed68cc99b1b7b62c330dba6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-na29uhwm',
                  apiId: '03e89a57-2042-43e6-9f12-8cc9134e5a9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ctrepka/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-na29uhwm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

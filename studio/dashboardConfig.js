export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e9fb13b33ab7dfff8cf8e2a',
                  title: 'Sanity Studio',
                  name: 'appsauderpo-studio',
                  apiId: '99352df2-573e-489a-8824-0a9984fbbf75'
                },
                {
                  buildHookId: '5e9fb13b1e62430ffeedfa56',
                  title: 'Landing pages Website',
                  name: 'appsauderpo',
                  apiId: 'd120bdfc-6c6f-4511-be33-9d2976ef6158'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leomartinsjf/appsauderpo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://appsauderpo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

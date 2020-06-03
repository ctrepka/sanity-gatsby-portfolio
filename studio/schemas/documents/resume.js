export default {
    name: 'resume',
    type: 'document',
    title: 'Resume',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Some frontend will require a slug to be set to be able to show the project',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'leftColumn',
            type: 'projectPortableText',
            title: 'Left Column'
        },
        {
            name: 'rightColumn',
            type: 'projectPortableText',
            title: 'Right Column'
        },
    ],
}
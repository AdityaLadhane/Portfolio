export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Free-text category (e.g., electronics, photography, video)',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Planned', value: 'planned' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this project on the landing page',
      initialValue: false
    },
    {
      name: 'details',
      title: 'Project Details',
      type: 'object',
      fields: [
        {
          name: 'overview',
          title: 'Overview',
          type: 'text'
        },
        {
          name: 'components',
          title: 'Components',
          type: 'array',
          of: [{ type: 'string' }]
        },
        {
          name: 'buildProcess',
          title: 'Build Process',
          type: 'text'
        },
        {
          name: 'challenges',
          title: 'Challenges',
          type: 'text'
        },
        {
          name: 'results',
          title: 'Results',
          type: 'text'
        },
        {
          name: 'futureImprovements',
          title: 'Future Improvements',
          type: 'text'
        },
        {
          name: 'technicalSpecs',
          title: 'Technical Specifications',
          type: 'object',
          fields: [
            {
              name: 'specs',
              title: 'Specifications',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'key', title: 'Key', type: 'string' },
                    { name: 'value', title: 'Value', type: 'string' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

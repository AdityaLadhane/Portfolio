export default {
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon/Emoji',
      type: 'string',
      description: 'Emoji or icon representation',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., Electronics, Photography, Development',
      validation: Rule => Rule.required()
    },
    {
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
          { title: 'Expert', value: 'Expert' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'usage',
      title: 'Usage Frequency',
      type: 'string',
      description: 'e.g., Daily, Weekly, Regular, Project-based',
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: Rule => Rule.required().min(0)
    }
  ]
}

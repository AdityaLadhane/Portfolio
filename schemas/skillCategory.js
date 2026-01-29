export default {
  name: 'skillCategory',
  title: 'Skill Category',
  type: 'document',
  fields: [
    {
      name: 'key',
      title: 'Key',
      type: 'string',
      description: 'Unique identifier (e.g., electronics, creative, technical)',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., Cpu, Camera, Code)',
      validation: Rule => Rule.required()
    },
    {
      name: 'color',
      title: 'Color Gradient',
      type: 'string',
      description: 'Tailwind gradient classes (e.g., from-blue-400 to-cyan-400)',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'level',
              title: 'Proficiency Level',
              type: 'number',
              description: 'Percentage (0-100)',
              validation: Rule => Rule.required().min(0).max(100)
            },
            {
              name: 'years',
              title: 'Years of Experience',
              type: 'string',
              description: 'e.g., "3+ years"'
            },
            {
              name: 'experience',
              title: 'Experience Description',
              type: 'string'
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
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

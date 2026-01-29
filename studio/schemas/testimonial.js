export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position/Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company/Organization',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Avatar Image',
      type: 'image',
      options: {
        hotspot: true
      },
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

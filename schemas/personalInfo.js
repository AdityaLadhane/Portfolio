export default {
  name: 'personalInfo',
  title: 'Personal Information',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'age',
      title: 'Age',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'education',
      title: 'Education',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url'
        },
        {
          name: 'github',
          title: 'GitHub URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url'
        }
      ]
    },
    {
      name: 'story',
      title: 'Story',
      type: 'object',
      fields: [
        {
          name: 'journey',
          title: 'Journey',
          type: 'text'
        },
        {
          name: 'education',
          title: 'Education Story',
          type: 'text'
        },
        {
          name: 'philosophy',
          title: 'Philosophy',
          type: 'text'
        }
      ]
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name (e.g., Cpu, Camera, Video, Zap)'
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string'
            },
            {
              name: 'color',
              title: 'Color Gradient',
              type: 'string',
              description: 'Tailwind gradient classes (e.g., from-blue-400 to-cyan-400)'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Lucide icon name'
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'gradient',
              title: 'Gradient',
              type: 'string',
              description: 'Tailwind gradient classes'
            }
          ]
        }
      ]
    },
    {
      name: 'currentFocus',
      title: 'Current Focus',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'futureDreams',
      title: 'Future Dreams',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}

import { defineField } from "sanity";

const event =  {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Event Name',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'type',
        type: 'string',
        title: 'Event Type',
        options: {
          list: [
            { title: 'Adventure', value: 'adventure' },
            { title: 'Arts & Culture', value: 'arts_culture' },
            { title: 'Attractions', value: 'attractions' },
            { title: 'Family & Kids', value: 'family_kids' },
            { title: 'Nature & Sightseeing', value: 'nature_sightseeing' },
            { title: 'Outdoor Tours', value: 'outdoor_tours' },
            { title: 'Shopping & Entertainment', value: 'shopping_entertainment' },
            { title: 'Wellbeing', value: 'wellbeing' },

          ],
          layout: 'dropdown'
        },
        validation: (Rule: any) => Rule.required().error('Event type is required')
      },
      {
        name: 'event_img',
        type: 'image',
        title: 'Event Image',
        options: {
          hotspot: true
        },
        validation: (Rule: any) => Rule.required().error('Event image is required')
      },
      {
        name: 'location',
        type: 'string',
        title: 'Location',
        validation: (Rule: any) => Rule.required().error('Location is required')
      },
      {
        name: 'geoLocation',
        type: 'geopoint',
        title: 'GeoPoint',
        validation: (Rule: any) => Rule.required().error('GeoPoint is required')
      },
      {
        title: 'Discover URL',
        name: 'discoverUrl',
        type: 'url'
      }
    ]
  };

export default event;
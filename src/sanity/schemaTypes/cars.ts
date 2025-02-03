// src\sanity\schemaTypes\index.ts
const carSchema = {
    name: 'car',
    type: 'document',
    title: 'Car',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Car Name',
      },
      {
        name: 'brand',
        type: 'string',
        title: 'Brand',
        description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
      },
      {
        name: 'type',
        type: 'string',
        title: 'Car Type',
        description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
      },
      {
        name: 'fuelCapacity',
        type: 'string',
        title: 'Fuel Capacity',
        description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)',
      },
      {
        name: 'transmission',
        type: 'string',
        title: 'Transmission',
        description: 'Type of transmission (e.g., Manual, Automatic)',
      },
      {
        name: 'seatingCapacity',
        type: 'string',
        title: 'Seating Capacity',
        description: 'Number of seats (e.g., 2 People, 4 seats)',
      },
      {
        name: 'pricePerDay',
        type: 'string',
        title: 'Price Per Day',
        description: 'Rental price per day',
      },
      {
        name: 'originalPrice',
        type: 'string',
        title: 'Original Price',
        description: 'Original price before discount (if applicable)',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
        description: 'Tags for categorization (e.g., popular, recommended)',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Car Image', 
        options: {
          hotspot: true
        }
      },
    
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Detailed description of the car',
      },
      {
        name: 'availability',
        type: 'object',
        title: 'Availability',
        fields: [
          {
            name: 'isAvailable',
            type: 'boolean',
            title: 'Is Available',
            description: 'Is the car currently available for rent?',
          },
          {
            name: 'availableFrom',
            type: 'datetime',
            title: 'Available From',
            description: 'Date and time when the car becomes available',
          },
          {
            name: 'availableTo',
            type: 'datetime',
            title: 'Available To',
            description: 'Date and time until the car is available',
          },
        ],
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
      },
     
    ],
  };
  export default carSchema
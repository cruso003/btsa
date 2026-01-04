export interface Event {
  id: string;
  name: string;
  icon: string;
  message: string;
  startDate: { month: number; day: number };
  endDate: { month: number; day: number };
  ctaText?: string;
  ctaLink?: string;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'pink';
  priority: number; // Higher number = higher priority if multiple events overlap
}

export const events: Event[] = [
  // New Year
  {
    id: 'new-year',
    name: 'New Year 2026',
    icon: '🎊',
    message: 'Happy New Year! Join us in building a better 2026 for African communities.',
    startDate: { month: 1, day: 1 },
    endDate: { month: 1, day: 15 },
    ctaText: 'Support Our Mission',
    ctaLink: '/get-involved/donate',
    color: 'purple',
    priority: 10
  },
  
  // International Women's Day
  {
    id: 'womens-day',
    name: "International Women's Day",
    icon: '👩',
    message: "Celebrating International Women's Day! 62.5% of our team are women leaders driving change.",
    startDate: { month: 3, day: 8 },
    endDate: { month: 3, day: 8 },
    ctaText: 'Meet Our Team',
    ctaLink: '/about/team',
    color: 'pink',
    priority: 8
  },
  
  // World Recycling Day
  {
    id: 'recycling-day',
    name: 'World Recycling Day',
    icon: '♻️',
    message: 'Happy World Recycling Day! See how we turn plastic waste into building materials.',
    startDate: { month: 3, day: 18 },
    endDate: { month: 3, day: 18 },
    ctaText: 'Our Plastic-to-Bricks Project',
    ctaLink: '/projects/plastic-to-pavement-bricks',
    color: 'green',
    priority: 7
  },
  
  // World Water Day
  {
    id: 'water-day',
    name: 'World Water Day',
    icon: '💧',
    message: 'World Water Day: Clean water access is essential. Our sustainable homes include rainwater harvesting.',
    startDate: { month: 3, day: 22 },
    endDate: { month: 3, day: 22 },
    ctaText: 'Learn More',
    ctaLink: '/about/our-story',
    color: 'blue',
    priority: 7
  },
  
  // Earth Day
  {
    id: 'earth-day',
    name: 'Earth Day',
    icon: '🌍',
    message: 'Happy Earth Day! Building sustainable homes while protecting our planet.',
    startDate: { month: 4, day: 22 },
    endDate: { month: 4, day: 22 },
    ctaText: 'See Our Impact',
    ctaLink: '/about/sdg-alignment',
    color: 'green',
    priority: 9
  },
  
  // World Environment Day
  {
    id: 'environment-day',
    name: 'World Environment Day',
    icon: '🌳',
    message: 'World Environment Day: Zero deforestation, 100% sustainable building solutions.',
    startDate: { month: 6, day: 5 },
    endDate: { month: 6, day: 5 },
    ctaText: 'Our Environmental Impact',
    ctaLink: '/about/sdg-alignment',
    color: 'green',
    priority: 9
  },
  
  // International Youth Day
  {
    id: 'youth-day',
    name: 'International Youth Day',
    icon: '👥',
    message: 'International Youth Day: Empowering African youth with skills that transform lives.',
    startDate: { month: 8, day: 12 },
    endDate: { month: 8, day: 12 },
    ctaText: 'Youth Empowerment Project',
    ctaLink: '/projects/liberia-youth-empowerment',
    color: 'orange',
    priority: 8
  },
  
  // SDG Action Day
  {
    id: 'sdg-day',
    name: 'SDG Action Day',
    icon: '🎯',
    message: 'SDG Action Day: Aligned with UN Sustainable Development Goals for a better Africa.',
    startDate: { month: 9, day: 25 },
    endDate: { month: 9, day: 25 },
    ctaText: 'Our SDG Alignment',
    ctaLink: '/about/sdg-alignment',
    color: 'blue',
    priority: 9
  },
  
  // World Habitat Day (First Monday of October - approximated to Oct 7)
  {
    id: 'habitat-day',
    name: 'World Habitat Day',
    icon: '🏠',
    message: 'World Habitat Day: Building affordable, sustainable homes for African families.',
    startDate: { month: 10, day: 7 },
    endDate: { month: 10, day: 7 },
    ctaText: 'Support Housing',
    ctaLink: '/get-involved/donate',
    color: 'orange',
    priority: 10
  },
  
  // World Cities Day
  {
    id: 'cities-day',
    name: 'World Cities Day',
    icon: '🏘️',
    message: 'World Cities Day: Creating sustainable urban communities across Africa.',
    startDate: { month: 10, day: 31 },
    endDate: { month: 10, day: 31 },
    ctaText: 'Our Projects',
    ctaLink: '/projects',
    color: 'blue',
    priority: 7
  },
  
  // Holiday Season / Year-End Giving
  {
    id: 'holiday-giving',
    name: 'Holiday Season',
    icon: '🎄',
    message: 'Season of Giving: Your year-end donation builds homes and transforms lives.',
    startDate: { month: 12, day: 1 },
    endDate: { month: 12, day: 31 },
    ctaText: 'Make a Difference',
    ctaLink: '/get-involved/donate',
    color: 'green',
    priority: 8
  }
];

export function getCurrentEvent(): Event | null {
  const now = new Date();
  const currentMonth = now.getMonth() + 1; // JavaScript months are 0-indexed
  const currentDay = now.getDate();

  // Filter events that are currently active
  const activeEvents = events.filter(event => {
    const { startDate, endDate } = event;
    
    // Check if current date falls within the event range
    if (startDate.month === endDate.month) {
      // Same month event
      return currentMonth === startDate.month && 
             currentDay >= startDate.day && 
             currentDay <= endDate.day;
    } else {
      // Cross-month event (e.g., Dec 15 - Jan 15)
      return (
        (currentMonth === startDate.month && currentDay >= startDate.day) ||
        (currentMonth === endDate.month && currentDay <= endDate.day) ||
        (currentMonth > startDate.month && currentMonth < endDate.month)
      );
    }
  });

  // Return the highest priority active event
  if (activeEvents.length === 0) return null;
  
  return activeEvents.reduce((highest, current) => 
    current.priority > highest.priority ? current : highest
  );
}

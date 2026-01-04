# Dynamic Event Banner System

## Overview
The BTSA website now features an automatic event banner system that displays relevant messages for international days, seasonal events, and special occasions related to our mission.

## Features

✅ **Automatic Detection**: Detects current date and displays relevant events  
✅ **Dismissible**: Users can dismiss banners (saved in localStorage)  
✅ **Responsive Design**: Optimized for mobile, tablet, and desktop  
✅ **Color-Coded**: Each event type has its own color scheme  
✅ **Priority System**: If multiple events overlap, shows the highest priority one  
✅ **Call-to-Action**: Optional CTA buttons link to relevant pages

## Current Events (11 Total)

### International Days
1. **🎊 New Year** (Jan 1-15) - Purple
2. **👩 International Women's Day** (Mar 8) - Pink
3. **♻️ World Recycling Day** (Mar 18) - Green
4. **💧 World Water Day** (Mar 22) - Blue
5. **🌍 Earth Day** (Apr 22) - Green
6. **🌳 World Environment Day** (Jun 5) - Green
7. **👥 International Youth Day** (Aug 12) - Orange
8. **🎯 SDG Action Day** (Sep 25) - Blue
9. **🏠 World Habitat Day** (Oct 7) - Orange
10. **🏘️ World Cities Day** (Oct 31) - Blue
11. **🎄 Holiday Season** (Dec 1-31) - Green

## How It Works

### 1. Event Configuration
Events are defined in `/lib/events.ts`:

```typescript
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
}
```

### 2. Automatic Display
- The `getCurrentEvent()` function checks the current date
- Returns the highest priority active event
- Banner displays automatically if an event is active

### 3. User Dismissal
- Users can click the X button to dismiss
- Dismissed events are saved to `localStorage`
- Won't show again for that specific event

## Adding New Events

To add a new event, edit `/lib/events.ts`:

```typescript
{
  id: 'unique-event-id',
  name: 'Event Name',
  icon: '🎉', // Emoji icon
  message: 'Your message here',
  startDate: { month: 6, day: 15 }, // June 15
  endDate: { month: 6, day: 15 }, // Same day or different
  ctaText: 'Optional CTA Text',
  ctaLink: '/optional/link',
  color: 'green', // green, blue, orange, purple, pink
  priority: 8 // 1-10, higher = more important
}
```

## Updating Existing Events

### Annual Updates
Each year, review and update:
- Event dates (if they change)
- Messages (to keep them fresh)
- CTA links (if pages change)

### Seasonal Adjustments
- Update "New Year" message for the current year
- Refresh "Holiday Season" messaging
- Update any year-specific references

## Color Scheme

| Color | Use Case | Example Events |
|-------|----------|----------------|
| 🟢 Green | Environment, sustainability | Earth Day, Environment Day, Recycling Day |
| 🔵 Blue | Water, cities, SDGs | Water Day, Cities Day, SDG Day |
| 🟠 Orange | Youth, housing | Youth Day, Habitat Day |
| 🟣 Purple | Celebrations, new beginnings | New Year |
| 🩷 Pink | Women, diversity | Women's Day |

## Priority System

When multiple events overlap, the highest priority event is displayed:

- **Priority 10**: Major celebrations (New Year, Habitat Day)
- **Priority 9**: Core mission events (Earth Day, Environment Day, SDG Day)
- **Priority 8**: Important observances (Women's Day, Youth Day, Holiday Season)
- **Priority 7**: Supporting events (Recycling Day, Water Day, Cities Day)

## Technical Details

### Files
- `/lib/events.ts` - Event configuration
- `/components/btsa/EventBanner.tsx` - Banner component
- `/app/page.tsx` - Integration point

### localStorage Key
- `dismissedEvents` - Array of dismissed event IDs

### Responsive Breakpoints
- Mobile: Full-width, stacked layout
- Tablet: CTA button visible
- Desktop: Full layout with all elements

## Maintenance

### Quarterly Review
- Check upcoming events
- Update messages if needed
- Test banner display

### Annual Tasks (January)
1. Update New Year event for current year
2. Review all event dates
3. Refresh messaging
4. Clear old dismissed events from localStorage (optional)

## Testing

To test specific events during development, temporarily modify the date check in `/lib/events.ts`:

```typescript
// For testing, uncomment and set desired date:
// const now = new Date(2026, 3, 22); // April 22, 2026 (Earth Day)
const now = new Date(); // Normal operation
```

## Future Enhancements

Potential improvements:
- Admin panel to manage events
- A/B testing for messages
- Analytics tracking for CTA clicks
- Multi-language support
- Custom animations per event type

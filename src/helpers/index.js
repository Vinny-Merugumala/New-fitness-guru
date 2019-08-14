export const isCurrentLocation = (currentVenue, venue) =>
  currentVenue.id === venue.id;

export const calculateAverageCoordinates = venues => {
  const length = venues.length || 1;
  return venues
    .map(venue => [venue.location.lng, venue.location.lat])
    .reduce(
      (acc, [lng, lat]) => {
        acc[0] += lng;
        acc[1] += lat;
        return acc;
      },
      [0, 0]
    )
    .map(sum => sum / length);
};

export const filterLocations = (venues, filter) => {
  return venues.filter(venue => {
    return (
      venue.name.toLowerCase().includes(filter.toLowerCase()) || //check name
      (venue.location.address &&
        venue.location.address.toLowerCase().includes(filter.toLowerCase()))
    );
  });
};

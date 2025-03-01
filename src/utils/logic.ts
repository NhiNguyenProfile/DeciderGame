// import { decisions } from "../data/decisions";

// export const getEventsForYear = (year: number) => {
//   const economyEvents = decisions.filter(
//     (d) =>
//       d.left.effect?.economy !== undefined ||
//       d.right.effect?.economy !== undefined
//   );
//   const environmentEvents = decisions.filter(
//     (d) =>
//       d.left.effect?.environment !== undefined ||
//       d.right.effect?.environment !== undefined
//   );
//   const armyEvents = decisions.filter(
//     (d) =>
//       d.left.effect?.army !== undefined || d.right.effect?.army !== undefined
//   );

//   const getRandomEvent = (events: typeof decisions) =>
//     events.length > 0
//       ? events[Math.floor(Math.random() * events.length)]
//       : null;

//   return [
//     getRandomEvent(economyEvents),
//     getRandomEvent(environmentEvents),
//     getRandomEvent(armyEvents),
//   ].filter(Boolean);
// };

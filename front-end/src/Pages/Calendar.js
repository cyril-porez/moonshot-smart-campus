// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { Modal, Button } from 'react-bootstrap';
// import '../style/MyCalendar.css'; // Importer le fichier CSS

// // Configurer moment en français
// moment.locale('fr');

// // Configurer le localisateur de date avec moment
// const localizer = momentLocalizer(moment);

// // Définir des événements d'exemple
// const events = [
//   {
//     title: 'Rendez-vous 1',
//     start: new Date(),
//     end: new Date(),
//   },
//   {
//     title: 'Rendez-vous 2',
//     start: new Date(moment().add(1, 'days')),
//     end: new Date(moment().add(1, 'days')),
//   },
// ];

// const MyCalendar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [eventInfo, setEventInfo] = useState(null);

//   const handleSelectEvent = (event) => {
//     setEventInfo(event);
//     setShowModal(true);
//   };

//   const customDayPropGetter = (date) => {
//     const today = moment().startOf('day');
//     const day = moment(date).startOf('day');
//     const isPast = day.isBefore(today);
//     const isFuture = day.isAfter(today);
//     const isToday = day.isSame(today);

//     return {
//       className: isPast ? 'past' : isFuture ? 'future' : isToday ? 'today' : '',
//     };
//   };

//   return (
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500, width: '100%' }}
//         onSelectEvent={handleSelectEvent}
//         dayPropGetter={customDayPropGetter} // Appliquer les styles personnalisés aux jours
//         messages={{
//           allDay: 'Toute la journée',
//           previous: 'Précédent',
//           next: 'Suivant',
//           today: "le mois actuel",
//           month: 'Mois',
//           week: 'Semaine',
//           day: 'Jour',
//           agenda: 'Agenda',
//           date: 'Date',
//           time: 'Heure',
//           event: 'Événement',
//           noEventsInRange: 'Aucun événement dans cette période',
//         }}
//       />

//       <Modal
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         centered
//         size="lg"
//         style={{ zIndex: 1050 }} // Assurez-vous que le modal est au-dessus du calendrier
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Détails de l'événement</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {eventInfo ? (
//             <>
//               <h5>{eventInfo.title}</h5>
//               <p>Date: {eventInfo.start.toLocaleString()}</p>
//             </>
//           ) : (
//             <p>Pas d'information sur l'événement.</p>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Fermer
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default MyCalendar;



import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/MyCalendar.css'; // Importer le fichier CSS

// Configurer moment en français
moment.locale('fr');

// Configurer le localisateur de date avec moment
const localizer = momentLocalizer(moment);

// Définir des événements d'exemple
const events = [
  {
    title: 'Rendez-vous 1',
    start: new Date(),
    end: new Date(),
  },
  {
    title: 'Rendez-vous 2',
    start: new Date(moment().add(1, 'days')),
    end: new Date(moment().add(1, 'days')),
  },
];

const MyCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventInfo, setEventInfo] = useState(null);
  const navigate = useNavigate();

  const handleSelectEvent = (event) => {
    setEventInfo(event);
    setShowModal(true);
  };

  const handleNavigate = () => {
    setShowModal(false); // Fermer la modal
    navigate('/Suivi2'); // Rediriger vers la page de suivi
  };

  const customDayPropGetter = (date) => {
    const today = moment().startOf('day');
    const day = moment(date).startOf('day');
    const isPast = day.isBefore(today);
    const isFuture = day.isAfter(today);
    const isToday = day.isSame(today);

    return {
      className: isPast ? 'past' : isFuture ? 'future' : isToday ? 'today' : '',
    };
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: '100%' }}
        onSelectEvent={handleSelectEvent}
        dayPropGetter={customDayPropGetter} // Appliquer les styles personnalisés aux jours
        messages={{
          allDay: 'Toute la journée',
          previous: 'Précédent',
          next: 'Suivant',
          today: "le mois actuel",
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour',
          agenda: 'Agenda',
          date: 'Date',
          time: 'Heure',
          event: 'Événement',
          noEventsInRange: 'Aucun événement dans cette période',
        }}
      />

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        style={{ zIndex: 1050 }} // Assurez-vous que le modal est au-dessus du calendrier
      >
        <Modal.Header closeButton>
          <Modal.Title>Détails de l'événement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {eventInfo ? (
            <>
              <h5>{eventInfo.title}</h5>
              <p>Date: {eventInfo.start.toLocaleString()}</p>
            </>
          ) : (
            <p>Pas d'information sur l'événement.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleNavigate}>
            Go to Tracking Page
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyCalendar;

// src/Calendar.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import frLocale from '@fullcalendar/core/locales/fr';
import Modal from 'react-modal';
import '../style/Calendar.css'; // Import custom CSS for styling

const Shulader = () => {
  const [events, setEvents] = useState([
    { title: 'Burnup', start: '2024-07-23', allDay: true, resourceId: 'a' },
    { title: 'English Workshop', start: '2024-07-25T10:00:00', end: '2024-07-25T11:00:00', resourceId: 'b' },
    { title: 'Consultation Technique', start: '2024-07-24T14:00:00', end: '2024-07-24T16:00:00', resourceId: 'a' },
    { title: 'Consultation Technique', start: '2024-07-27T09:00:00', end: '2024-07-27T11:00:00', resourceId: 'b' },
    { title: 'Soutenance Antoine', start: '2024-07-26T14:00:00', end: '2024-07-26T16:00:00', resourceId: 'c' },
    { title: 'Suivi de projet', start: '2024-07-27T14:00:00', end: '2024-07-27T16:00:00', resourceId: 'a' },
    { title: 'Point Obligatoire, 11am, AG', start: '2024-07-28T11:00:00', resourceId: 'c' },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '', resourceId: '' });
  const [resources] = useState([
    { id: 'a', title: 'Salle A' },
    // { id: 'b', title: 'Salle B' },
    // { id: 'c', title: 'Salle C' },
  ]);

  const handleDateClick = (arg) => {
    setNewEvent({ ...newEvent, start: arg.dateStr });
    setModalIsOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    setModalIsOpen(false);
    setNewEvent({ title: '', start: '', end: '', resourceId: '' });
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, resourceTimelinePlugin]}
        initialView="resourceTimelineWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,resourceTimelineWeek',
        }}
        locales={[frLocale]}
        locale="fr"
        resources={resources}
        events={events}
        editable={true}
        selectable={true}
        dateClick={handleDateClick}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Créer un événement"
      >
        <h2>Créer un événement</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Titre:</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Début:</label>
            <input
              type="datetime-local"
              name="start"
              value={newEvent.start}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Fin:</label>
            <input
              type="datetime-local"
              name="end"
              value={newEvent.end}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Ressource:</label>
            <select
              name="resourceId"
              value={newEvent.resourceId}
              onChange={handleInputChange}
              required
            >
              {resources.map(resource => (
                <option key={resource.id} value={resource.id}>
                  {resource.title}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Créer l'événement</button>
        </form>
      </Modal>
    </div>
  );
};

export default Shulader;

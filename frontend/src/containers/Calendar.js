import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class CalendarPage extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"

        events={[
            { title: 'AP Physics 1 Exam', date: '2022-05-12' },
            { title: 'AP Seminar Presentations', date: '2022-04-18' }
          ]}
      />
    )
  }
}
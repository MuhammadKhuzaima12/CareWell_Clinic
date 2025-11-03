const user_aps = document.getElementById("user_aps");

const show_aps = async () => {
    const appointments = await get_appointments();
    if (appointments.length === 0) {
        sweet_alert("No Appointments Found", "error");
        setTimeout(() => sweet_alert("Book an Appointments", "info"), 1800)
        setTimeout(() => window.location.replace("../booking_appointments/ba.html"), 3200)
        return;
    } else {
        appointments.forEach(appointment => {
            user_aps.innerHTML += `
        <ul>
          <span>${appointment.doctor}</span>
          <li>${appointment.patient}</li>
          <li>${appointment.day}</li>
          <li>${appointment.time}</li>
          <button onclick="del_appointment(${appointment.id})">Delete Appointment</button>
        </ul>
        `;
        });
    }
}
show_aps()
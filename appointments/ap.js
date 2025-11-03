const user_aps = document.getElementById("user_aps");
const no_appointments_div = document.getElementById("no_appointments");
const book_btn = document.getElementById("book_btn");
const loader = document.getElementById("loader");

const show_aps = async () => {
    // Show loader
    loader.classList.remove("d-none");
    no_appointments_div.classList.add("d-none");
    user_aps.innerHTML = "";

    try {
        const appointments = await get_appointments();

        // Hide loader after data loads
        loader.classList.add("d-none");

        if (!appointments || appointments.length === 0) {
            no_appointments_div.classList.remove("d-none");
            return;
        }

        // Hide "no appointments" and show list
        no_appointments_div.classList.add("d-none");

        appointments.forEach((appointment) => {
            user_aps.innerHTML += `
            <ul>
                <li><strong>Doctor:</strong> ${appointment.doctor}</li>
                <li><strong>Patient:</strong> ${appointment.patient}</li>
                <li><strong>Day:</strong> ${appointment.day}</li>
                <li><strong>Time:</strong> ${appointment.time}</li>
                <button onclick="del_appointment(${appointment.id})">Delete Appointment</button>
            </ul>
            `;
        });
    } catch (error) {
        console.error("Error fetching appointments:", error);
        loader.classList.add("d-none");
        no_appointments_div.classList.remove("d-none");
        no_appointments_div.querySelector("p").innerText = "Error loading appointments.";
    }
};

// Redirect to booking page
book_btn.addEventListener("click", () => {
    window.location.replace("../booking_appointments/ba.html");
});

// Run function
show_aps();


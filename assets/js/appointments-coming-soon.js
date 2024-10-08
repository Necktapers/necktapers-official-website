appointmentButton = document.getElementById('make-appointment-header-btn-id');
appointmentButtonThumb = document.getElementById('fa-long-arrow-alt-right-id');
comingSoonAlert = document.getElementById('coming-soon-alert');
id="fa-long-arrow-alt-right-id"
function removeAlert(){
  comingSoonAlert.innerHTML = "";
  comingSoonAlert.style.display="none";
}
function createComingSoonAlert(){
  //comingSoonAlert.style.marginTop = "30px";
  comingSoonAlert.style.position = "fixed";
  comingSoonAlert.style.display="block";
  comingSoonAlert.style.top = "45%";
  comingSoonAlert.style.backgroundColor = "#ffc107";
  comingSoonAlert.style.padding = "10px 10px 10px 10px";
  comingSoonAlert.style.borderRadius = "10px";
  comingSoonAlert.style.left = "5%";
  comingSoonAlert.style.zIndex = "100000";
  comingSoonAlert.innerHTML = "Walk-ins only (bookings to go live soon)";
  setTimeout(removeAlert,4000);
}
appointmentButton.addEventListener('click',createComingSoonAlert);
appointmentButtonThumb.addEventListener('click',createComingSoonAlert);

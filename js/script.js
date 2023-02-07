
// GLOBAL VARIABLES
const date_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const actual_date_CET = new Date().toLocaleDateString('de-DE', date_options);
const actual_date_EST = new Date().toLocaleDateString('en-EN', date_options, { timeZone: 'America/New_York'});


const button_html = document.getElementById('convert-time');
const date_html = document.getElementById("date");

let button_switched;

// FUNCTIONS DECLARING
const setTime_CET = () => {
    const actual_time_CET = new Date().toLocaleTimeString('de-DE');
        document.getElementById('clock').innerHTML = `<h3>${actual_time_CET}</h3>`;
  };

const setTime_EST = () => {
    const actual_time_EST = new Date().toLocaleTimeString('en-EN', { timeZone: 'America/New_York'});
        document.getElementById('clock').innerHTML = `<h3>${actual_time_EST}</h3>`;
  };
  
const setDate_CET = () => {
  setTime_CET();
  button_switched = false;
  date_html.innerHTML = `<p>${actual_date_CET}</p>`;
  button_html.innerHTML = 'Convert to EST Time';
}

const setDate_EST = () => {
  setTime_EST();
  button_switched = true;
  date_html.innerHTML = `<p>${actual_date_EST}</p>`
  button_html.innerHTML = 'Convert to CET Time';   
};

const dateFunc = (setDate) => {
  setInterval(() => {
    setDate();
    if(!button_switched){
      button_html.onclick = () => {setDate = setDate_EST};
    } else if (button_switched) {
      button_html.onclick = () => {setDate = setDate_CET};
    } 
  }, 1000);  
};

// FUNCTION START
dateFunc(setDate_CET);










// https://rapidapi.com/ipfind/api/find-any-ip-address-or-domain-location-world-wide/

const url = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8&ip=204.141.32.155';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '873dbe322aea47f89dcf729dcc8f60e8',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};

const fetchIpInfo = (ip) => {
   return fetch(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8&ip=${ip}`, options)
    .then(respuesta => respuesta.json())
    .catch(err => console.error(err))
}

const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $submit = document.querySelector('#submit');
const $results = document.querySelector('#results');

$form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {value} = $input;
    if (!value) return ;

    $submit.setAttribute('disable', 'disable');
    $submit.setAttribute('aria-busy', 'true');
    

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disable');
    $submit.removeAttribute('aria-busy');
}) 


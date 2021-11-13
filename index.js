import {dogProfile} from './data.js';
const rowElement = document.getElementById('cards-row');
// const rowElementNew = document.getElementsByClassName('card-list-new');


document.addEventListener('keyup', e => {
    rowElement.innerHTML = '';
    const searched = e.target.value.toLowerCase();
    const filtered_profiles = dogProfile.filter(profile => {
        return profile.name.toLowerCase().includes(searched) || profile.age.toString().includes(searched);
});
newProfiles(filtered_profiles);
});

const newProfiles = (profiles) => {
    // const divRow = document.createElement('div');
    // divRow.className = 'row-content';

    const newDiv = profiles.map(p => {
    const div = document.createElement('div');
    div.className = 'row-item';
    const card = document.createElement('div');
    card.className = 'card';
    div.appendChild(card);
    const img = document.createElement('img');
    img.setAttribute('src', p.src);
    img.className = 'profile-img';
    card.appendChild(img);
    const head4 = document.createElement('h4');
    head4.innerHTML = `<b>${p.name}</b>`;
    head4.className = 'profile-name';
    const parah = document.createElement('p');
    parah.innerHTML = `Age: ${p.age}`;
    const div2 = document.createElement('div');
    div2.className = 'container';
    card.appendChild(div2);
    div2.appendChild(head4);
    div2.appendChild(parah);
    return div;
    });

    newDiv.map(item => {
        rowElement.appendChild(item);
    });

    return rowElement
};

newProfiles(dogProfile);

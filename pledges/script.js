let pledge = [
    { project: 'Skyrocket Your Team', partners:[{name: 'Cordial AB', detail:'40-hour consultancy package (business model & strategy)'}, {name: 'Pernica d.o.o.', detail:'Free proposal writing for an EU/Estonian grant'}]},
    { project: 'Dynamic - DYNAMIC row for Coronavirus emergency', partners:[{name: 'Google', detail:'1000/2000 euros credit for the cloud service'}]},
    { project: 'Ciclogreen', partners:[{name: 'Telefónica', detail:'<br/> - 4 months of office space in one of our hubs in Madrid or Bacelona (Spain, that’s why it’s better if it is a Spanish project)<br /> - Acceleration services (group and individual mentorships, and acceleration services like we do in our Open Future program) <br /> - Possibility of a pitch to the investments committee and the possibility of an investment up to 250k€"'}]},
    { project: 'Platex - Reusable Face Masks', partners:[{name: 'stekiradio', detail:'1 year advertisment at stekiradio '}]},
    { project: 'sostenibl.es', partners:[{name: '', detail:''}]},
    { project: 'TBA', partners:[{name: 'WeWork Labs', detail:'"Pilot" program using Dynamic Row Srl App for Wework offices. The discussion will continue on monday'}]},
    { project: 'BrightAct', partners:[{name: 'Cordial AB', detail:'40-hour consultancy package (business model & strategy)'}]},
    { project: 'SmartCoach4Resilience', partners:[{name: 'Cordial AB', detail:'40-hour consultancy package (business model & strategy)'}]},
    { project: 'We stay liquid', partners:[{name: 'Typeform', detail:'Netoworking opportunities - probono consulting support'}]},
    { project: 'Team Discover', partners:[{name: 'STARTUP3', detail:''}]},
    { project: 'Art Hub', partners:[{name: 'Manual.to', detail:'Offer to all winning projects from manual.to . Manual.to are offering their multilingual, and dual-coded documentation technology to winning projects in order to make information more easily and widely accessible across languages, territories and devices. A sampla of the service designed especially for EUvsVirus: https://euvsvirus.manual.to/'}]},
    { project: 'PolyVent - the global ventilator design formula', partners:[{name: 'Engineers Without Borders - NL', detail:'They house our team of volunteers, allow us to use their organisation structure and help channel human and other resources, share contacts to countries like Brazil, Argentina, where ventilator shortage is a problem.'}]},
    { project: 'Deepprojects UG', partners: [{name: 'Ayuntamiento de Logroño', detail:''}, {name: 'PwC Luxembourg', detail:''}, {name: '@ Biocat', detail:''}, {name: 'Abn Amro & Dell Technologies', detail:''}]},
    { project: 'PolyVent - the global ventilator design formula', partners:[{name: 'Technology Transfer Office, Aristotle University of Thessaloniki, Greece', detail:'Offers to be the mediator in connecting PolyVent team with the research teams of the Aristotle University of Thesaloniki (and possibly cooperating hospitals) that are doing research on similar fields of the project to discuss prototyping opportunities.'}]},
    { project: 'Occupation-Shifter (by Skilllab)', partners:[{name: 'Auxxo', detail:''}]},
    { project: 'Covid Genomics', partners:[{name: 'Practica Capital ', detail:''}]},
    { project: 'BrightAct', partners:[{name: 'WELLSTREET ', detail:''}]},
    { project: '#WeStudyTogether', partners:[{name: 'Web2Learn', detail:'100h of free of charge consulting services, for a duration of up to 3 months. These services include: elaborating a needs analysis and a market analysis; finding suitable testbeds for further testing/prototyping; refining the product and adjusting to the market; aligning the product to current learning and teaching methodologies and participatory learning paradigms.'}]},
    { project: 'itda: Local community platform', partners:[{name: 'Web2Learn', detail:'100h of free of charge consulting services, for a duration of up to 3 months. These services include: elaborating a needs analysis and a market analysis; finding suitable testbeds for further testing/prototyping; refining the product and adjusting to the market; aligning the product to current learning and teaching methodologies and participatory learning paradigms.'}]},
    { project: 'Green Lockdown- GOME', partners:[{name: 'Zelos', detail:'IT and other Resources to run an MVP on Zelos platform'}]},
    { project: 'Prevention of Domestic Violence: YANA.help', partners:[{name: 'Zelos', detail:'IT and other Resources to run an MVP on Zelos platform'}]},
    { project: 'FakeMash', partners:[{name: 'Intesa Sanpaolo', detail:'Short-list selection of projects to the call Startup Initiatives program organized in partnership with one of the major players on the media advertising scene at European level'}]},
    { project: 'Crithink App', partners:[{name: 'Intesa Sanpaolo', detail:'Short-list selection of projects to the call Startup Initiatives program organized in partnership with one of the major players on the media advertising scene at European level'}]},
    { project: 'Buyer Brain', partners:[{name: 'Intesa Sanpaolo', detail:'Short-list selection of projects to the call Startup Initiatives program organized in partnership with one of the major players on the media advertising scene at European level'}]},
    { project: 'The Keexle Open Source Project', partners:[{name: 'Intesa Sanpaolo', detail:'Short-list selection of projects to the call Startup Initiatives program organized in partnership with one of the major players on the media advertising scene at European level'}] }
]

function project(teams) {
    let pledgeWrapper = teams
        .map(team => `
            <div id="pledge_wrapper">
                <h2>${team.project}</h2>
                <ul>
                    ${team.partners.map(partner => `<li>${partner.name}: ${partner.detail}</li>`)}
                </ul>
            </div>
            `
        )
        .join('')
    document.getElementById('pledges').innerHTML = pledgeWrapper;
}
project(pledge);
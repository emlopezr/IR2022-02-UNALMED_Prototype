// -------------------- HTML Elements --------------------

// Buttons

const help = document.querySelector('#help');
const team = document.querySelector('#team');

// Dynamic Relationships

const balancesRule = document.querySelector('#balancesRule');
const editsRule = document.querySelector('#editsRule');
const editsGraphicElement = document.querySelector('#editsGraphicElement');
const generatesWorkProduct = document.querySelector('#generatesWorkProduct');
const buildsRule = document.querySelector('#buildsRule');
const specifiesSpace = document.querySelector('#specifiesSpace');
const createsEvent = document.querySelector('#createsEvent');
const createsPlot = document.querySelector('#createsPlot');
const describesChallenge = document.querySelector('#describesChallenge');
const definesFlow = document.querySelector('#definesFlow');
const implementsInterface = document.querySelector('#implementsInterface');
const determinesGraphicElement = document.querySelector('#determinesGraphicElement');

// Conditionals and Events

const conditionalRules = document.querySelector('#conditionalRules');
const conditionalInterfaces = document.querySelector('#conditionalInterfaces');
const triggerEvent = document.querySelector('#triggerEvent');

// Goal Relationships

const developingGame = document.querySelector('#developingGame');
const refiningRule = document.querySelector('#refiningRule');
const guaranteeingBalances = document.querySelector('#guaranteeingBalances');
const allowingBuilds = document.querySelector('#allowingBuilds');
const ensuringSpecifies = document.querySelector('#ensuringSpecifies');
const estabilshingSpace = document.querySelector('#estabilshingSpace');
const makingHasCoherence = document.querySelector('#makingHasCoherence');
const guaranteeingCreates = document.querySelector('#guaranteeingCreates');
const elaboratingPlot = document.querySelector('#elaboratingPlot');
const developingChallenge = document.querySelector('#developingChallenge');
const takingCareOfDescribes = document.querySelector('#takingCareOfDescribes');
const allowingDefines = document.querySelector('#allowingDefines');
const developingFlow = document.querySelector('#developingFlow');
const developingInterface = document.querySelector('#developingInterface');
const allowingDetermines = document.querySelector('#allowingDetermines');
const developingGraphicElement = document.querySelector('#developingGraphicElement');

// -------------------- LocalStorage for class concepts --------------------

let rules = JSON.parse(localStorage.getItem('rules')) || []
let spaces = JSON.parse(localStorage.getItem('spaces')) || []
let events = JSON.parse(localStorage.getItem('events')) || []
let plots = JSON.parse(localStorage.getItem('plots')) || []
let challenges = JSON.parse(localStorage.getItem('challenges')) || []
let flows = JSON.parse(localStorage.getItem('flows')) || []
let graphicElements = JSON.parse(localStorage.getItem('graphicElements')) || []

// -------------------- Forms for class concepts --------------------

const formBuildsRule = `
    <form id="formBuildsRule">
        <div class="formInput">
            <label for="idRule">Identifier</label>
            <input type="text" name="idRule">
        </div>

        <div class="formInput">
            <label for="spacesRule">Associated spaces</label>
            <input type="text" name="spacesRule" placeholder="IDs separated by a comma">
        </div>

        <div class="formInput">
            <label for="eventsRule">Associated events</label>
            <input type="text" name="eventsRule" placeholder="IDs separated by a comma">
        </div>

        <div class="formInput">
            <label for="plotsRule">Associated plots</label>
            <input type="text" name="plotsRule" placeholder="IDs separated by a comma">
        </div>

        <div class="formInput">
            <label for="challengesRule">Associated challenges</label>
            <input type="text" name="challengesRule" placeholder="Names separated by a comma">
        </div>

        <div class="formInput">
            <label for="flowsRule">Associated flows</label>
            <input type="text" name="flowsRule" placeholder="IDs separated by a comma">
        </div>

        <div class="formInput">
            <input type="submit" value="Save">
        </div>
    </form>
`
const formSpecifiesSpace = `
    <form id="formSpecifiesSpace">
        <div class="formInput">
            <label for="idSpace">Identifier</label>
            <input type="number" name="idSpace">
        </div>

        <div class="formInput">
            <label for="descriptionSpace">Description</label>
            <input type="text" name="descriptionSpace">
        </div>

        <div class="formInput">
            <label for="typeSpace">Type</label>
            <select name="typeSpace">
                <option value="linear">Linear</option>
                <option value="grid">Grid</option>
                <option value="web">Web</option>
                <option value="independent">Independent points</option>
                <option value="fragmented">Fragmented</option>
            </select>
        </div>

        <div class="formInput">
            <input type="submit" value="Save">
        </div>
    </form>
`
const formCreatesEvent = `
    <form id="formCreatesEvent">
        <div class="formInput">
            <label for="idEvent">Identifier</label>
            <input type="number" name="idEvent">
        </div>

        <div class="formInput">
            <label for="descriptionEvent">Description</label>
            <input type="text" name="descriptionEvent">
        </div>

        <div class="formInput">
            <label for="paceEvent">Pace</label>
            <input type="text" name="paceEvent">
        </div>

        <div class="formInput">
            <label for="coherenceEvent">Coherence</label>
            <select name="coherenceEvent">
                <option value="sense">Sense</option>
                <option value="nosense">No sense</option>
            </select>
        </div>

        <div class="formInput">
            <input type="submit" value="Save">
        </div>
    </form>
`
const formCreatesPlot = `
    <form id="formCreatesPlot">
        <div class="formInput">
            <label for="idPlot">Identifier</label>
            <input type="number" name="idPlot">
        </div>

        <div class="formInput">
            <label for="plotEvents">Plots of the event</label>
            <input type="text" name="plotEvents" placeholder="IDs separated by a comma">
        </div>

        <div class="formInput">
            <label for="descriptionEvent">Description</label>
            <input type="text" name="descriptionEvent">
        </div>

        <div class="formInput">
            <label for="plotCharacters">Characters of the plot</label>
            <input type="text" name="plotCharacters" placeholder="IDs separated by a comma">
        </div>

        <div class="formInput">
            <input type="submit" value="Save">
        </div>
    </form>
`
const formDescribesChallenge = `
    <form id="formDescribesChallenge">
        <div class="formInput">
            <label for="nameChallenge">Name</label>
            <input type="text" name="nameChallenge">
        </div>

        <div class="formInput">
            <label for="descriptionEvent">Description</label>
            <input type="text" name="descriptionEvent">
        </div>

        <div class="formInput">
            <label for="dutyChallenge">Duty</label>
            <input type="text" name="dutyChallenge">
        </div>

        <div class="formInput">
            <label for="levelChallenge">Difficulty level</label>
            <input type="number" name="levelChallenge">
        </div>

        <div class="formInput">
            <label for="skillsChallenge">Required skills</label>
            <input type="number" name="skillsChallenge">
        </div>

        <div class="formInput">
            <input type="submit" value="Save">
        </div>
    </form>
`
const formDefinesFlow = `
    <form id="formDefinesFlow">
        <div class="formInput">
            <label for="nameFlow">Name</label>
            <input type="text" name="nameFlow">
        </div>

        <div class="formInput">
            <label for="grpupFlow">Movement group and order</label>
            <input type="text" name="grpupFlow">
        </div>

        <div class="formInput">
            <input type="submit" value="Save">
        </div>
    </form>
`

const formDeterminesGraphicElement = `
    <form id="formDeterminesGraphicElement">
        <div class="formInput">
            <label for="typeGE">Type</label>
            <select name="typeGE">
                <option value="diegetic">Diegetic</option>
                <option value="nondiegetic">Non-diegetic</option>
            </select>
        </div>

        <div class="formInput">
            <label for="nameGE">Name</label>
            <input type="text" name="nameGE">
        </div>

        <div class="formInput">
            <label for="descriptionGE">Description</label>
            <input type="text" name="descriptionGE">
        </div>

        <div class="formInput">
            <label for="imageGE">Image</label>
            <input type="text" name="imageGE" placeholder="Paste URL of the image here">
        </div>

        <div class="formGroup">
            <p>Only for Diegetic Elements</p>

            <div class="formInput">
                <label for="interfaceSpaceGE">Interface space</label>
                <input type="text" name="interfaceSpaceGE">
            </div>

            <div class="formInput">
                <label for="characterGE">Character</label>
                <input type="text" name="characterGE" placeholder="Character ID">
            </div>
        </div>

        <div class="formGroup">
            <p>Only for Non-diegetic Elements</p>

            <div class="formInput">
                <label for="sceneGE">Scene</label>
                <input type="text" name="sceneGE">
            </div>
        </div>

        <div class="formInput">
            <input type="submit" value="Save">
        </div>
    </form>
`

// -------------------- Start of the prototype --------------------

document.addEventListener('DOMContentLoaded', () => {
    Swal.fire(
        'Alpha Prototype',
        `You can click in the conditionals, events, dynamic reationships and goal relationships.
        For example, the first thing you should try is to click on the conditionals and the event
        to unlock the main dynamic relationship chains of the application.`,
        'info'
    )
})

// Info buttons

help.addEventListener('click', e => {
    Swal.fire(
        'Alpha Prototype',
        `You can click in the conditionals, events, dynamic reationships and goal relationships.
        For example, the first thing you should try is to click on the conditionals and the event
        to unlock the main dynamic relationship chains of the application.`,
        'info'
    )
})

team.addEventListener('click', e => {
    Swal.fire({
        title: 'Team #2',
        html: `<pre><b>Project:</b> Game Design Best Practices at Quintessence\n\n<b>Authors:</b>\nAndrés Felipe Aparicio Mestre\nDavid Esteban Toro Arango\nEmmanuel López Rodríguez\nMaria Paula Duque Muñoz\n\n<b>Course:</b> Requirements Engineering\n<b>Professor:</b> Carlos Mario Zapata Jaramillo\n\n<b>University:</b> Universidad Nacional de Colombia\nSede Medellín. Facultad de Minas\n<b>Semester:</b> 2022-2</pre>`,
    })
})

// -------------------- Left click conditionals and trigger events --------------------

let rulesUnlocked = 0;
let interfacesUnlocked = 0;
let workProductUnlocked = 0;

conditionalRules.addEventListener('click', e => {
    if (!conditionalRules.classList.contains('clicked')) {
        conditionalRules.classList.add('clicked');
        rulesUnlocked += 1;

        if (rulesUnlocked == 2) {
            unlock([specifiesSpace])

            Swal.fire(
                'Unlock',
                `"Game Designer specifies space" unlocked`,
                'success'
            )
        }
    }

});

conditionalInterfaces.addEventListener('click', e => {
    if (!conditionalInterfaces.classList.contains('clicked')) {
        conditionalInterfaces.classList.add('clicked');
        interfacesUnlocked += 1;

        if (interfacesUnlocked == 2) {
            unlock([determinesGraphicElement])

            Swal.fire(
                'Unlock',
                `"Game Designer determines graphic element" unlocked`,
                'success'
            )

        }
    }

});

triggerEvent.addEventListener('click', e => {
    if (!triggerEvent.classList.contains('clicked')) {
        triggerEvent.classList.add('clicked');
        rulesUnlocked += 1;
        interfacesUnlocked += 1;

        if (rulesUnlocked == 2) {
            unlock([specifiesSpace])

            Swal.fire(
                'Unlock',
                `"Game Designer specifies space" unlocked`,
                'success'
            )
        }

        if (interfacesUnlocked == 2) {
            unlock([determinesGraphicElement])

            Swal.fire(
                'Unlock',
                `"Game Designer determines graphic element" unlocked`,
                'success'
            )
        }
    }

});


// -------------------- Right click conditionals and trigger events --------------------

conditionalRules.addEventListener('contextmenu', e => {
    e.preventDefault()
    showInterface('img/specifications/conditionalRules.png');
});

conditionalInterfaces.addEventListener('contextmenu', e => {
    e.preventDefault()
    showInterface('img/specifications/conditionalInterfaces.png');
});

triggerEvent.addEventListener('contextmenu', e => {
    e.preventDefault()
    showInterface('img/specifications/triggerEvent.png');
});

// -------------------- Left click dynamic relationships in order --------------------

specifiesSpace.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!blocked) { return }
    showForm('Space', formSpecifiesSpace);
    unlock([createsEvent])
});

createsEvent.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer specifies space" relationship to unlock it.`
    )

    if (!blocked) { return }
    showForm('Event', formCreatesEvent);
    unlock([createsPlot])
});

createsPlot.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates event" relationship to unlock it.`
    )

    if (!blocked) { return }
    showForm('Plot', formCreatesPlot);
    unlock([describesChallenge])
});

describesChallenge.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates plot" relationship to unlock it.`
    )

    if (!blocked) { return }
    showForm('Challenge', formDescribesChallenge);
    unlock([definesFlow])
});

definesFlow.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer describes challenge" relationship to unlock it.`
    )

    if (!blocked) { return }
    showForm('Flow', formDefinesFlow);
    unlock([buildsRule])
});

buildsRule.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer defines flow" relationship to unlock it.`
    )

    if (!blocked) { return }
    showForm('Rule', formBuildsRule);
    unlock([balancesRule])
});

balancesRule.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer builds rule" relationship to unlock it.`
    )

    if (!blocked) { return }

    unlock([editsRule])

    if (!balancesRule.classList.contains('clicked')) {
        balancesRule.classList.add('clicked');
        workProductUnlocked += 1;

        if (workProductUnlocked === 2) {
            unlock([generatesWorkProduct])

            Swal.fire(
                'Unlock',
                `"Game designer edits rule" and "Game Designer generates work product" unlocked`,
                'success'
            )
        } else {
            showInterface('img/interfaces/7.png', '"Game designer edits rule" unlocked');
        }
    } else {
        showInterface('img/interfaces/7.png', '"Game designer edits rule" unlocked');
    }

});

editsRule.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer balances rule" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/8.png');
});

determinesGraphicElement.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!blocked) { return }
    showForm('GraphicElement', formDeterminesGraphicElement);
    unlock([implementsInterface])
});

implementsInterface.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates grapic element" relationship to unlock it.`
    )

    if (!blocked) { return }

    unlock([editsGraphicElement])

    if (!implementsInterface.classList.contains('clicked')) {
        implementsInterface.classList.add('clicked');
        workProductUnlocked += 1;

        if (workProductUnlocked === 2) {
            unlock([generatesWorkProduct])

            Swal.fire(
                'Unlock',
                `"Game designer edits graphic element" and "Game Designer generates work product" unlocked `,
                'success'
            )

        } else {
            showInterface('img/interfaces/9.png', '"Game designer edits graphic element" unlocked');

        }
    } else {
        showInterface('img/interfaces/9.png', '"Game designer edits graphic element" unlocked');
    }

});

editsGraphicElement.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer implements interface" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/10.png');
});

generatesWorkProduct.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer balances rule" relationship
        and the "Game Designer implements interface" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/11.png');
});


// -------------------- Right click dynamic relationships in order --------------------

specifiesSpace.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/specifiesSpace.png');
});

createsEvent.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer specifies space" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/createsEvent.png');
});

createsPlot.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates event" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/createsPlot.png');
});

describesChallenge.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates plot" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/describesChallenge.png');
});

definesFlow.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer describes challenge" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/definesFlow.png');
});

buildsRule.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer defines flow" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/buildsRule.png');
});

balancesRule.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer builds rule" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/balancesRule.png');
});

editsRule.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer balances rule" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/editsRule.png');
});

determinesGraphicElement.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/determinesGraphicElement.png');
});

implementsInterface.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates grapic element" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/implementsInterface.png');
});

editsGraphicElement.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer implements interface" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/editsGraphicElement.png');
});

generatesWorkProduct.addEventListener('contextmenu', e => {
    e.preventDefault()

    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer balances rule" relationship
        and the "Game Designer implements interface" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/specifications/generatesWorkProduct.png');
});

// -------------------- Goal Relationships --------------------

withoutKPI = [
    developingGame,
    guaranteeingBalances,
    allowingBuilds,
    ensuringSpecifies,
    guaranteeingCreates,
    takingCareOfDescribes,
    allowingDefines,
    allowingDetermines,
    developingGraphicElement
]

withoutKPI.forEach(element => {
    element.addEventListener('click', e => {
        Swal.fire({
            title: 'Goal without KPI',
            html: `This goal does not have an associated KPI, try to click another.`,
            icon: 'error'
        })
    })
})

refiningRule.addEventListener('click', e => {
    Swal.fire({
        title: 'Refining rule',
        html: `<pre><b>CSF:</b> Rules balancing.\n<b>KPI:</b> User perception.\n<b>Formula:</b> Survey about the game balance</pre>`,
        icon: 'question'
    })
})

estabilshingSpace.addEventListener('click', e => {
    Swal.fire({
        title: 'Establishing space',
        html: `<pre><b>CSF:</b> Space definition.\n<b>KPI:</b> Game space consistency.\n<b>Formula:</b> Total number of different\nused game space types</pre>`,
        icon: 'question'
    })
})

elaboratingPlot.addEventListener('click', e => {
    Swal.fire({
        title: 'Elaborating plot',
        html: `<pre><b>CSF:</b> Plot creation.\n<b>KPI:</b> Total event coherence rate.\n<b>Formula:</b> Coherent events/Total events</pre>`,
        icon: 'question'
    })
})

makingHasCoherence.addEventListener('click', e => {
    Swal.fire({
        title: 'Making event has coherence',
        html: `<pre><b>CSF:</b> Event creation.\n<b>KPI:</b> User event coherence perception.\n<b>Formula:</b> Survey about the event coherence</pre>`,
        icon: 'question'
    })
})

developingChallenge.addEventListener('click', e => {
    Swal.fire({
        title: 'Developing challenge',
        html: `<pre><b>CSF:</b> Challenge description.\n<b>KPI:</b> Challenge difficulty level mean.\n<b>Formula:</b> Summatory of all difficulty\nlevels of the challenges/Total number of challenges</pre>`,
        icon: 'question'
    })
})

developingFlow.addEventListener('click', e => {
    Swal.fire({
        title: 'Developing flow',
        html: `<pre><b>CSF:</b> Game flow definition.\n<b>KPI:</b> User opinion of the game flow.\n<b>Formula:</b> Survey about the game flow</pre>`,
        icon: 'question'
    })
})

developingInterface.addEventListener('click', e => {
    Swal.fire({
        title: 'Interface suitability',
        html: `<pre><b>CSF:</b> Space definition.\n<b>KPI:</b> Diegetic and non-diegetic graphic\nelements balance.\n<b>Formula:</b> Number of diegetic\nelements/Number of non-diegetic elements</pre>`,
        icon: 'question'
    })
})

// -------------------- Functions --------------------

function checkBlocked(element, title, message) {
    if (element.classList.contains('blocked')) {
        Swal.fire(title, message, 'error');
        return false;
    }

    return true;
}

function showInterface(imageURL, message = "") {
    Swal.fire({
        width: '64em',
        imageUrl: imageURL,
        text: message
    })
}

function unlock(elementList) {
    elementList.forEach(element => {
        element.classList.remove('blocked');
    });
}

function showForm(titleSwal, htmlForm) {
    Swal.fire({
        title: titleSwal,
        width: '64em',
        html: htmlForm,
    })
}
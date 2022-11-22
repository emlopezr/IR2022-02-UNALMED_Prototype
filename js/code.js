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

// Class concepts

const classSpace = document.querySelector('#space');
const classEvent = document.querySelector('#event');
const classPlot = document.querySelector('#plot');
const classChallenge = document.querySelector('#challenge');
const classFlow = document.querySelector('#flow');
const classRule = document.querySelector('#rule');
const classGraphicElement = document.querySelector('#graphicElement');

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
            <input type="text" name="idRule" id="idRule">
        </div>

        <div class="formInput">
            <label for="spacesRule">Associated spaces</label>
            <input type="text" name="spacesRule" placeholder="IDs separated by a comma" id="spacesRule">
        </div>

        <div class="formInput">
            <label for="eventsRule">Associated events</label>
            <input type="text" name="eventsRule" placeholder="IDs separated by a comma" id="eventsRule">
        </div>

        <div class="formInput">
            <label for="plotsRule">Associated plots</label>
            <input type="text" name="plotsRule" placeholder="IDs separated by a comma" id="plotsRule">
        </div>

        <div class="formInput">
            <label for="challengesRule">Associated challenges</label>
            <input type="text" name="challengesRule" placeholder="Names separated by a comma" id="challengesRule">
        </div>

        <div class="formInput">
            <label for="flowsRule">Associated flows</label>
            <input type="text" name="flowsRule" placeholder="IDs separated by a comma" id="flowsRule">
        </div>

        <div class="formInput">
            <input type="submit" value="Save" id="submitRule">
        </div>
    </form>
`

function createRule(e) {
    e.preventDefault()

    const idRule = document.querySelector('#idRule').value
    const spacesRule = document.querySelector('#spacesRule').value
    const eventsRule = document.querySelector('#eventsRule').value
    const plotsRule = document.querySelector('#plotsRule').value
    const challengesRule = document.querySelector('#challengesRule').value
    const flowsRule = document.querySelector('#flowsRule').value

    const newRule = {
        idRule,
        spacesRule,
        eventsRule,
        plotsRule,
        challengesRule,
        flowsRule
    }

    rules.push(newRule)
    localStorage.setItem('rules', JSON.stringify(rules))

    const btnSubmit = document.querySelector('#submitRule')
    btnSubmit.style.display = 'none'
    btnSubmit.insertAdjacentHTML('afterend', 'Rule created!')
}

const formSpecifiesSpace = `
    <form id="formSpecifiesSpace">
        <div class="formInput">
            <label for="idSpace">Identifier</label>
            <input type="number" name="idSpace" id="idSpace">
        </div>

        <div class="formInput">
            <label for="descriptionSpace">Description</label>
            <input type="text" name="descriptionSpace" id="descriptionSpace">
        </div>

        <div class="formInput">
            <label for="typeSpace">Type</label>
            <select name="typeSpace" id="typeSpace">
                <option value="linear">Linear</option>
                <option value="grid">Grid</option>
                <option value="web">Web</option>
                <option value="independent">Independent points</option>
                <option value="fragmented">Fragmented</option>
            </select>
        </div>

        <div class="formInput">
            <input type="submit" value="Save" id="submitSpace">
        </div>
    </form>
`

function createSpace(e) {
    e.preventDefault()

    const idSpace = document.querySelector('#idSpace').value
    const descriptionSpace = document.querySelector('#descriptionSpace').value
    const typeSpace = document.querySelector('#typeSpace').value

    const newSpace = {
        idSpace,
        descriptionSpace,
        typeSpace
    }

    spaces.push(newSpace)
    localStorage.setItem('spaces', JSON.stringify(spaces))

    const btnSubmit = document.querySelector('#submitSpace')
    btnSubmit.style.display = 'none'
    btnSubmit.insertAdjacentHTML('afterend', 'Space created!')
}

const formCreatesEvent = `
    <form id="formCreatesEvent">
        <div class="formInput">
            <label for="idEvent">Identifier</label>
            <input type="number" name="idEvent" id="idEvent">
        </div>

        <div class="formInput">
            <label for="descriptionEvent">Description</label>
            <input type="text" name="descriptionEvent" id="descriptionEvent">
        </div>

        <div class="formInput">
            <label for="paceEvent">Pace</label>
            <input type="text" name="paceEvent" id="paceEvent">
        </div>

        <div class="formInput">
            <label for="coherenceEvent">Coherence</label>
            <select name="coherenceEvent" id="coherenceEvent">
                <option value="sense">Sense</option>
                <option value="nosense">No sense</option>
            </select>
        </div>

        <div class="formInput">
            <input type="submit" value="Save" id="submitEvent">
        </div>
    </form>
`

function createEvent(e) {
    e.preventDefault()

    const idEvent = document.querySelector('#idEvent').value
    const descriptionEvent = document.querySelector('#descriptionEvent').value
    const paceEvent = document.querySelector('#paceEvent').value
    const coherenceEvent = document.querySelector('#coherenceEvent').value

    const newEvent = {
        idEvent,
        descriptionEvent,
        paceEvent,
        coherenceEvent
    }

    events.push(newEvent)
    localStorage.setItem('events', JSON.stringify(events))

    const btnSubmit = document.querySelector('#submitEvent')
    btnSubmit.style.display = 'none'
    btnSubmit.insertAdjacentHTML('afterend', 'Event created!')
}

const formCreatesPlot = `
    <form id="formCreatesPlot">
        <div class="formInput">
            <label for="idPlot">Identifier</label>
            <input type="number" name="idPlot" id="idPlot">
        </div>

        <div class="formInput">
            <label for="plotEvents">Events of the plot</label>
            <input type="text" name="plotEvents" placeholder="IDs separated by a comma" id="plotEvents">
        </div>

        <div class="formInput">
            <label for="descriptionPlot">Description</label>
            <input type="text" name="descriptionPlot" id="descriptionPlot">
        </div>

        <div class="formInput">
            <label for="plotCharacters">Characters of the plot</label>
            <input type="text" name="plotCharacters" placeholder="IDs separated by a comma" id="plotCharacters">
        </div>

        <div class="formInput">
            <input type="submit" value="Save" id="submitPlot">
        </div>
    </form>
`

function createPlot(e) {
    e.preventDefault()

    const idPlot = document.querySelector('#idPlot').value
    const plotEvents = document.querySelector('#plotEvents').value
    const descriptionPlot = document.querySelector('#descriptionPlot').value
    const plotCharacters = document.querySelector('#plotCharacters').value

    const newPlot = {
        idPlot,
        plotEvents,
        descriptionPlot,
        plotCharacters
    }

    plots.push(newPlot)
    localStorage.setItem('plots', JSON.stringify(plots))

    const btnSubmit = document.querySelector('#submitPlot')
    btnSubmit.style.display = 'none'
    btnSubmit.insertAdjacentHTML('afterend', 'Plot created!')
}

const formDescribesChallenge = `
    <form id="formDescribesChallenge">
        <div class="formInput">
            <label for="nameChallenge">Name</label>
            <input type="text" name="nameChallenge" id="nameChallenge">
        </div>

        <div class="formInput">
            <label for="descriptionChallenge">Description</label>
            <input type="text" name="descriptionChallenge" id="descriptionChallenge">
        </div>

        <div class="formInput">
            <label for="dutyChallenge">Duty</label>
            <input type="text" name="dutyChallenge" id="dutyChallenge">
        </div>

        <div class="formInput">
            <label for="levelChallenge">Difficulty level</label>
            <input type="number" name="levelChallenge" id="levelChallenge">
        </div>

        <div class="formInput">
            <label for="skillsChallenge">Required skills</label>
            <input type="text" name="skillsChallenge" id="skillsChallenge">
        </div>

        <div class="formInput">
            <input type="submit" value="Save" id="submitChallenge">
        </div>
    </form>
`

function createChallenge(e) {
    e.preventDefault()

    const nameChallenge = document.querySelector('#nameChallenge').value
    const descriptionChallenge = document.querySelector('#descriptionChallenge').value
    const dutyChallenge = document.querySelector('#dutyChallenge').value
    const levelChallenge = document.querySelector('#levelChallenge').value
    const skillsChallenge = document.querySelector('#skillsChallenge').value

    const newChallenge = {
        nameChallenge,
        descriptionChallenge,
        dutyChallenge,
        levelChallenge,
        skillsChallenge
    }

    challenges.push(newChallenge)
    localStorage.setItem('challenges', JSON.stringify(challenges))

    const btnSubmit = document.querySelector('#submitChallenge')
    btnSubmit.style.display = 'none'
    btnSubmit.insertAdjacentHTML('afterend', 'Challenge created!')
}

const formDefinesFlow = `
    <form id="formDefinesFlow">
        <div class="formInput">
            <label for="nameFlow">Name</label>
            <input type="text" name="nameFlow" id="nameFlow">
        </div>

        <div class="formInput">
            <label for="grpupFlow">Movement group and order</label>
            <input type="text" name="grpupFlow" id="grpupFlow">
        </div>

        <div class="formInput">
            <input type="submit" value="Save" id="submitFlow">
        </div>
    </form>
`

function createFlow(e) {
    e.preventDefault()

    const nameFlow = document.querySelector('#nameFlow').value
    const grpupFlow = document.querySelector('#grpupFlow').value

    const newFlow = {
        nameFlow,
        grpupFlow
    }

    flows.push(newFlow)
    localStorage.setItem('flows', JSON.stringify(flows))

    const btnSubmit = document.querySelector('#submitFlow')
    btnSubmit.style.display = 'none'
    btnSubmit.insertAdjacentHTML('afterend', 'Flow created!')
}

const formDeterminesGraphicElement = `
    <form id="formDeterminesGraphicElement">
        <div class="formInput">
            <label for="typeGE">Type</label>
            <select name="typeGE" id="typeGE">
                <option value="diegetic">Diegetic</option>
                <option value="nondiegetic">Non-diegetic</option>
            </select>
        </div>

        <div class="formInput">
            <label for="nameGE">Name</label>
            <input type="text" name="nameGE" id="nameGE">
        </div>

        <div class="formInput">
            <label for="descriptionGE">Description</label>
            <input type="text" name="descriptionGE" id="descriptionGE">
        </div>

        <div class="formInput">
            <label for="imageGE">Image</label>
            <input type="text" name="imageGE" placeholder="Paste URL of the image here" id="imageGE">
        </div>

        <div class="formGroup">
            <p>Only for Diegetic Elements</p>

            <div class="formInput">
                <label for="interfaceSpaceGE">Interface space</label>
                <input type="text" name="interfaceSpaceGE" id="interfaceSpaceGE">
            </div>

            <div class="formInput">
                <label for="characterGE">Character</label>
                <input type="text" name="characterGE" placeholder="Character ID" id="characterGE">
            </div>
        </div>

        <div class="formGroup">
            <p>Only for Non-diegetic Elements</p>

            <div class="formInput">
                <label for="sceneGE">Scene</label>
                <input type="text" name="sceneGE" id="sceneGE">
            </div>
        </div>

        <div class="formInput">
            <input type="submit" value="Save" id="submitGraphicElement">
        </div>
    </form>
`

function createGraphicElement(e) {
    e.preventDefault()

    const typeGE = document.querySelector('#typeGE').value
    const nameGE = document.querySelector('#nameGE').value
    const descriptionGE = document.querySelector('#descriptionGE').value
    const imageGE = document.querySelector('#imageGE').value
    let interfaceSpaceGE = document.querySelector('#interfaceSpaceGE').value
    let characterGE = document.querySelector('#characterGE').value
    let sceneGE = document.querySelector('#sceneGE').value

    if (typeGE == 'diegetic') {
        sceneGE = 'NA'
    } else {
        interfaceSpaceGE = 'NA'
        characterGE = 'NA'
    }

    const newGraphicElement = {
        typeGE,
        nameGE,
        descriptionGE,
        imageGE,
        interfaceSpaceGE,
        characterGE,
        sceneGE,
    }

    graphicElements.push(newGraphicElement)
    localStorage.setItem('graphicElements', JSON.stringify(graphicElements))

    const btnSubmit = document.querySelector('#submitGraphicElement')
    btnSubmit.style.display = 'none'
    btnSubmit.insertAdjacentHTML('afterend', 'GraphicElement created!')
}

// -------------------- Start of the prototype --------------------

document.addEventListener('DOMContentLoaded', () => {
    Swal.fire(
        'Beta Prototype',
        `You can left click in the conditionals, events, dynamic reationships, goal relationships.
        For example, the first thing you should try is to click on the conditionals and the event to
        unlock the main dynamic relationship chains of the application. When you left click a dynamic
        relationship, a form appears and you can provide the information to create a register. Also, 
        you can right click in conditionals, events and dynamic reationships to see it's PS-Based 
        specification. Finally you can left click on some class concepts to see all the registers that 
        you have created`,
        'info'
    )
})

// Info buttons

help.addEventListener('click', e => {
    Swal.fire(
        'Beta Prototype',
        `You can left click in the conditionals, events, dynamic reationships, goal relationships.
        For example, the first thing you should try is to click on the conditionals and the event to
        unlock the main dynamic relationship chains of the application. When you left click a dynamic
        relationship, a form appears and you can provide the information to create a register. Also, 
        you can right click in conditionals, events and dynamic reationships to see it's PS-Based 
        specification. Finally you can left click on some class concepts to see all the registers that 
        you have created`,
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
    showForm('Space', formSpecifiesSpace, '#formSpecifiesSpace', createSpace);
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
    showForm('Event', formCreatesEvent, '#formCreatesEvent', createEvent);
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
    showForm('Plot', formCreatesPlot, '#formCreatesPlot', createPlot);
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
    showForm('Challenge', formDescribesChallenge, '#formDescribesChallenge', createChallenge);
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
    showForm('Flow', formDefinesFlow, '#formDefinesFlow', createFlow);
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
    showForm('Rule', formBuildsRule, '#formBuildsRule', createRule);
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
    showForm('GraphicElement', formDeterminesGraphicElement, '#formDeterminesGraphicElement', createGraphicElement);
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

// -------------------- Click in the class concepts --------------------

classRule.addEventListener('click', e => {
    Swal.fire({
        title: 'Rules',
        html: showTable(rules, 'Rule'),
        width: '64em',
    })
})

classSpace.addEventListener('click', e => {
    Swal.fire({
        title: 'Spaces',
        html: showTable(spaces, 'Space'),
        width: '64em',
    })
})

classEvent.addEventListener('click', e => {
    Swal.fire({
        title: 'Events',
        html: showTable(events, 'Event'),
        width: '64em',
    })
})

classPlot.addEventListener('click', e => {
    Swal.fire({
        title: 'Plots',
        html: showTable(plots, 'Plot'),
        width: '64em',
    })
})

classChallenge.addEventListener('click', e => {
    Swal.fire({
        title: 'Challenges',
        html: showTable(challenges, 'Challenge'),
        width: '64em',
    })
})

classFlow.addEventListener('click', e => {
    Swal.fire({
        title: 'Flows',
        html: showTable(flows, 'Flow'),
        width: '64em',
    })
})

classGraphicElement.addEventListener('click', e => {
    Swal.fire({
        title: 'Graphic Elements',
        html: showTable(graphicElements, 'GE'),
        width: '86em',
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

function showForm(titleSwal, htmlForm, idForm, functionLocalStorage) {
    Swal.fire({
        title: titleSwal,
        width: '64em',
        html: htmlForm,
    })

    const formHTML = document.querySelector(idForm)
    formHTML.addEventListener('submit', functionLocalStorage)
}

function showTable(classConcept, name) {
    const table = document.createElement('TABLE')
    const thead = document.createElement('THEAD')
    const tr1 = document.createElement('TR')

    table.appendChild(thead)
    thead.appendChild(tr1)

    for (const key in classConcept[0]) {
        const th = document.createElement('TH')
        th.textContent = key.toLowerCase().replace(name.toLowerCase(), '')
        tr1.appendChild(th)
    }

    const tbody = document.createElement('TBODY')

    table.appendChild(tbody)

    classConcept.forEach(element => {
        tr2 = document.createElement('TR')

        for (const key in element) {
            const td = document.createElement('TD')
            td.textContent = element[key]
            tr2.appendChild(td)
        }

        tbody.appendChild(tr2)
    })

    if (table.outerHTML == '<table><thead><tr></tr></thead><tbody></tbody></table>') {
        return `Not ${name.toLowerCase()}s to show yet :(`
    } else {
        return '<center>' + table.outerHTML + '</center>'
    }
}
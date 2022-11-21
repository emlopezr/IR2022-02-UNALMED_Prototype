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

// -------------------- Left and Right Click dynamic relationships in order --------------------
// -------------------- Left Click conditionals and trigger events --------------------

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

specifiesSpace.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/1.png', '"Game designer creates event" unlocked');
    unlock([createsEvent])
});

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

createsEvent.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer specifies space" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/2.png', '"Game designer creates plot" unlocked');
    unlock([createsPlot])
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

createsPlot.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates event" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/3.png', '"Game designer describes challenge" unlocked');
    unlock([describesChallenge])
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

describesChallenge.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates plot" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/4.png', '"Game designer defines flow" unlocked');
    unlock([definesFlow])
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

definesFlow.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer describes challenge" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/5.png', '"Game designer builds rule" unlocked');
    unlock([buildsRule])
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

buildsRule.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer defines flow" relationship to unlock it.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/6.png', '"Game designer balances rule" unlocked');
    unlock([balancesRule])
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

determinesGraphicElement.addEventListener('click', e => {
    let blocked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!blocked) { return }
    showInterface('img/interfaces/9.png', '"Game designer implements interface" unlocked');
    unlock([implementsInterface])
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
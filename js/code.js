// -------------------- HTML Elements --------------------

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
const eventPC = document.querySelector('#event');

// -------------------- Start of the prorotype --------------------

document.addEventListener('DOMContentLoaded', () => {
    Swal.fire(
        'Alpha Prototype - Team #2',
        `You can click in the conditionals, events, dynamic reationships and goal relationships.
        For example, the first thing you should try is to click on the conditionals and the event
        to unlock the main dynamic relationship chains of the application.`,
        'info'
    )
})

// -------------------- Click elements in order --------------------

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
                'Unlock!',
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
                'Unlock!',
                `"Game Designer determines graphic element" unlocked`,
                'success'
            )

        }
    }

});

eventPC.addEventListener('click', e => {
    if (!eventPC.classList.contains('clicked')) {
        eventPC.classList.add('clicked');
        rulesUnlocked += 1;
        interfacesUnlocked += 1;

        if (rulesUnlocked == 2) {
            unlock([specifiesSpace])

            Swal.fire(
                'Unlock!',
                `"Game Designer specifies space" unlocked`,
                'success'
            )
        }

        if (interfacesUnlocked == 2) {
            unlock([determinesGraphicElement])

            Swal.fire(
                'Unlock!',
                `"Game Designer determines graphic element" unlocked`,
                'success'
            )
        }
    }

});

specifiesSpace.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/1.png', '"Game designer creates event" unlocked');
    unlock([createsEvent])
});

createsEvent.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer specifies space" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/2.png', '"Game designer creates plot" unlocked');
    unlock([createsPlot])
});

createsPlot.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates event" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/3.png', '"Game designer describes challenge" unlocked');
    unlock([describesChallenge])
});

describesChallenge.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates plot" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/4.png', '"Game designer defines flow" unlocked');
    unlock([definesFlow])
});

definesFlow.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer describes challenge" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/5.png', '"Game designer builds rule" unlocked');
    unlock([buildsRule])
});

buildsRule.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer defines flow" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/6.png', '"Game designer balances rule" unlocked');
    unlock([balancesRule])
});

balancesRule.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer builds rule" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/7.png', '"Game designer edits rule" unlocked');
    unlock([editsRule])

    if (!balancesRule.classList.contains('clicked')) {
        balancesRule.classList.add('clicked');
        workProductUnlocked += 1;

        if (workProductUnlocked === 2) {
            unlock([generatesWorkProduct])

            Swal.fire(
                'Unlock!',
                `"Game Designer generates work product" unlocked`,
                'success'
            )
        }
    }

});

editsRule.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer balances rule" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/8.png');
});

determinesGraphicElement.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/9.png', '"Game designer implements interface" unlocked');
    unlock([implementsInterface])
});

implementsInterface.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates grapic element" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/9.png', '"Game designer edits graphic element" unlocked');
    unlock([editsGraphicElement])

    if (!implementsInterface.classList.contains('clicked')) {
        implementsInterface.classList.add('clicked');
        workProductUnlocked += 1;

        if (workProductUnlocked === 2) {
            unlock([generatesWorkProduct])

            Swal.fire(
                'Unlock!',
                `"Game Designer generates work product" unlocked`,
                'success'
            )

        }
    }

});

editsGraphicElement.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer implements interface" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/10.png');
});

generatesWorkProduct.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer balances rule" relationship
        and the "Game Designer implements interface" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/11.png');
});

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